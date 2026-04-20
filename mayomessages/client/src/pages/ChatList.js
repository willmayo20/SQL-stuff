import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMyChats, createChat, joinChat, logout } from '../services/api';
import '../styles/ChatList.css';

function ChatList() {
  const [chats, setChats] = useState([]);
  const [chatName, setChatName] = useState('');
  const [email, setEmail] = useState('');
  const [mode, setMode] = useState('view');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    fetchChats();
  }, []);

  const fetchChats = async () => {
    const chatsData = await getMyChats();
    if (Array.isArray(chatsData)) {
      setChats(chatsData);
    }
  };

  const handleCreateChat = async (e) => {
    e.preventDefault();
    setError('');
    const result = await createChat(chatName);
    if (result.error) {
      setError(result.error);
    } else {
      setChatName('');
      setMode('view');
      fetchChats();
    }
  };

  const handleJoinChat = async (e) => {
    e.preventDefault();
    setError('');
    const result = await joinChat(chatName, email);
    if (result.error) {
      setError(result.error);
    } else {
      setChatName('');
      setEmail('');
      setMode('view');
      fetchChats();
    }
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div className="chat-list-container">
      <div className="header">
        <h1>MayoMessages</h1>
        <div className="user-info">
          <span>Hello, {username}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      <div className="content">
        <div className="chats-section">
          <h2>Your Chats</h2>
          {chats.length === 0 ? (
            <p className="empty">No chats yet. Create or join one!</p>
          ) : (
            <ul className="chat-list">
              {chats.map((chat) => (
                <li key={chat.id} onClick={() => navigate(`/chats/${chat.id}`)}>
                  {chat.name}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="actions-section">
          <div className="button-group">
            <button
              onClick={() => setMode('create')}
              className={mode === 'create' ? 'active' : ''}
            >
              Create Chat
            </button>
            <button
              onClick={() => setMode('join')}
              className={mode === 'join' ? 'active' : ''}
            >
              Join Chat
            </button>
          </div>

          {mode === 'create' && (
            <form onSubmit={handleCreateChat}>
              <input
                type="text"
                placeholder="Chat name"
                value={chatName}
                onChange={(e) => setChatName(e.target.value)}
                required
              />
              <button type="submit">Create</button>
            </form>
          )}

          {mode === 'join' && (
            <form onSubmit={handleJoinChat}>
              <input
                type="text"
                placeholder="Chat name"
                value={chatName}
                onChange={(e) => setChatName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Join</button>
            </form>
          )}

          {error && <p className="error">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default ChatList;
