import express from 'express';
import { authenticateToken } from '../middleware/auth.js';
import db from '../db.js';

const router = express.Router();

router.post('/:chatId', authenticateToken, (req, res) => {
  const { chatId } = req.params;
  const { content } = req.body;
  const userId = req.user.userId;

  if (!content) {
    return res.status(400).json({ error: 'Message content required' });
  }

  db.get(
    'SELECT user_id FROM chat_members WHERE chat_id = ? AND user_id = ?',
    [chatId, userId],
    (err, member) => {
      if (err || !member) {
        return res.status(403).json({ error: 'Not a member of this chat' });
      }

      db.run(
        'INSERT INTO messages (chat_id, user_id, content) VALUES (?, ?, ?)',
        [chatId, userId, content],
        function(err) {
          if (err) {
            return res.status(500).json({ error: 'Failed to send message' });
          }
          res.json({ messageId: this.lastID, content });
        }
      );
    }
  );
});

router.get('/:chatId', authenticateToken, (req, res) => {
  const { chatId } = req.params;
  const userId = req.user.userId;

  db.get(
    'SELECT user_id FROM chat_members WHERE chat_id = ? AND user_id = ?',
    [chatId, userId],
    (err, member) => {
      if (err || !member) {
        return res.status(403).json({ error: 'Not a member of this chat' });
      }

      db.all(
        `SELECT m.id, m.content, m.created_at, u.username FROM messages m
         INNER JOIN users u ON m.user_id = u.id
         WHERE m.chat_id = ?
         ORDER BY m.created_at ASC`,
        [chatId],
        (err, messages) => {
          if (err) {
            return res.status(500).json({ error: 'Failed to fetch messages' });
          }
          res.json(messages);
        }
      );
    }
  );
});

export default router;
