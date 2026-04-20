import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ChatList from './pages/ChatList';
import Chat from './pages/Chat';
import './styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/chats"
          element={isLoggedIn ? <ChatList /> : <Navigate to="/login" />}
        />
        <Route
          path="/chats/:chatId"
          element={isLoggedIn ? <Chat /> : <Navigate to="/login" />}
        />
        <Route path="/" element={<Navigate to={isLoggedIn ? "/chats" : "/login"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
