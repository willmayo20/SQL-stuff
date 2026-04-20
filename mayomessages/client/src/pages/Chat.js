import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMessages, sendMessage } from '../services/api';
import '../styles/Chat.css';

function Chat() {
  const { chatId } = useParams();
  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    fetchMessages();
    const interval = setInterval(fetchMessages, 2000);
    return () => clearInterval(interval);
  }, [chatId]);

  const fetchMessages = async () => {
    const messagesData = await getMessages(chatId);
    if (Array.isArray(messagesData)) {
      setMessages(messagesData);
    } else if (messagesData.error) {
      setError(messagesData.error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    setError('');
    if (!content.trim()) return;

    const result = await sendMessage(chatId, content);
    if (result.error) {
      setError(result.error);
    } else {
      setContent('');
      fetchMessages();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <button onClick={() => navigate('/chats')}>← Back to Chats</button>
        <h2>Chat #{chatId}</h2>
      </div>

      <div className="messages-area">
        {messages.length === 0 ? (
          <p className="empty">No messages yet. Start the conversation!</p>
        ) : (
          messages.map((msg) => (
            <div
              key={msg.id}
              className={`message ${msg.username === username ? 'sent' : 'received'}`}
            >
              <strong>{msg.username}</strong>
              <p>{msg.content}</p>
              <span className="time">{new Date(msg.created_at).toLocaleString()}</span>
            </div>
          ))
        )}
      </div>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSendMessage} className="message-form">
        <input
          type="text"
          placeholder="Type a message..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Chat;
