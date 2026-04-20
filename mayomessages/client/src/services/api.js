const API_BASE = 'http://localhost:5000/api';

export async function signup(email, username, password) {
  const response = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, username, password })
  });
  const data = await response.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('username', data.username);
  }
  return data;
}

export async function login(email, password) {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });
  const data = await response.json();
  if (data.token) {
    localStorage.setItem('token', data.token);
    localStorage.setItem('userId', data.userId);
    localStorage.setItem('username', data.username);
  }
  return data;
}

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('username');
}

export async function createChat(chatName) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE}/chats/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ chatName })
  });
  return response.json();
}

export async function joinChat(chatName, email) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE}/chats/join`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ chatName, email })
  });
  return response.json();
}

export async function getMyChats() {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE}/chats/my-chats`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.json();
}

export async function sendMessage(chatId, content) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE}/messages/${chatId}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({ content })
  });
  return response.json();
}

export async function getMessages(chatId) {
  const token = localStorage.getItem('token');
  const response = await fetch(`${API_BASE}/messages/${chatId}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });
  return response.json();
}
