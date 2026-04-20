# MayoMessages

A simple chat application where users can sign up, create chats, join chats by name and email, and send messages.

## Features

- User authentication (signup/login)
- Create new chat rooms
- Join existing chats with chat name and email
- Send and receive messages in real-time
- View chat history
- Multiple users can participate in the same chat

## Project Structure

```
mayomessages/
├── server/          # Node.js Express backend
│   ├── db.js       # SQLite database setup
│   ├── server.js   # Main server file
│   ├── middleware/
│   │   └── auth.js # JWT authentication
│   └── routes/
│       ├── auth.js    # Authentication endpoints
│       ├── chats.js   # Chat management endpoints
│       └── messages.js # Message endpoints
└── client/         # React frontend
    ├── public/
    │   └── index.html
    └── src/
        ├── pages/
        │   ├── Login.js
        │   ├── Signup.js
        │   ├── ChatList.js
        │   └── Chat.js
        ├── services/
        │   └── api.js   # API calls
        └── styles/      # CSS files
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm

### Backend Setup

1. Navigate to the server directory:
```bash
cd mayomessages/server
```

2. Install dependencies:
```bash
npm install
```

3. Start the server:
```bash
npm start
```

The server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the client directory:
```bash
cd mayomessages/client
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open in your browser at `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/signup` - Create a new user
- `POST /api/auth/login` - Login user

### Chats
- `POST /api/chats/create` - Create a new chat
- `POST /api/chats/join` - Join an existing chat
- `GET /api/chats/my-chats` - Get user's chats

### Messages
- `POST /api/messages/:chatId` - Send a message
- `GET /api/messages/:chatId` - Get chat messages

## How to Use

1. Sign up with your email and username
2. Create a new chat by giving it a name
3. Share the chat name with others
4. Others can join using the chat name and their email
5. Start sending messages in the chat!

## Technology Stack

### Backend
- Express.js - Web framework
- SQLite3 - Database
- bcryptjs - Password hashing
- jsonwebtoken - Authentication

### Frontend
- React - UI library
- React Router - Navigation
- CSS3 - Styling
