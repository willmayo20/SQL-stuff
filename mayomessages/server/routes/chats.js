import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import db from '../db.js';

const router = express.Router();

router.post('/create', authenticateToken, (req, res) => {
  const { chatName } = req.body;
  const userId = req.user.userId;

  if (!chatName) {
    return res.status(400).json({ error: 'Chat name required' });
  }

  db.run(
    'INSERT INTO chats (name, created_by) VALUES (?, ?)',
    [chatName, userId],
    function(err) {
      if (err) {
        return res.status(500).json({ error: 'Failed to create chat' });
      }

      const chatId = this.lastID;
      db.run(
        'INSERT INTO chat_members (chat_id, user_id) VALUES (?, ?)',
        [chatId, userId],
        (err) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to add creator to chat' });
          }
          res.json({ chatId, chatName });
        }
      );
    }
  );
});

router.post('/join', authenticateToken, (req, res) => {
  const { chatName, email } = req.body;
  const userId = req.user.userId;

  if (!chatName || !email) {
    return res.status(400).json({ error: 'Chat name and email required' });
  }

  db.get('SELECT id FROM chats WHERE name = ?', [chatName], (err, chat) => {
    if (err || !chat) {
      return res.status(404).json({ error: 'Chat not found' });
    }

    db.get('SELECT id FROM users WHERE email = ? AND id = ?', [email, userId], (err, user) => {
      if (err || !user) {
        return res.status(401).json({ error: 'User email does not match' });
      }

      db.run(
        'INSERT INTO chat_members (chat_id, user_id) VALUES (?, ?)',
        [chat.id, userId],
        (err) => {
          if (err) {
            if (err.message.includes('UNIQUE')) {
              return res.status(400).json({ error: 'Already a member of this chat' });
            }
            return res.status(500).json({ error: 'Failed to join chat' });
          }
          res.json({ chatId: chat.id, chatName });
        }
      );
    });
  });
});

router.get('/my-chats', authenticateToken, (req, res) => {
  const userId = req.user.userId;

  db.all(
    `SELECT c.id, c.name, c.created_at FROM chats c
     INNER JOIN chat_members cm ON c.id = cm.chat_id
     WHERE cm.user_id = ?
     ORDER BY c.created_at DESC`,
    [userId],
    (err, chats) => {
      if (err) {
        return res.status(500).json({ error: 'Failed to fetch chats' });
      }
      res.json(chats);
    }
  );
});

export default router;
