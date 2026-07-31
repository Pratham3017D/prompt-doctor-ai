# 🚀 PromptDoctor AI

> Transform weak AI prompts into clear, structured, and high-quality prompts using Google Gemini AI.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![Gemini](https://img.shields.io/badge/Google-Gemini-blue?logo=google)
![Vite](https://img.shields.io/badge/Vite-Frontend-purple?logo=vite)
![License](https://img.shields.io/badge/License-MIT-yellow)

---

## 📖 About

PromptDoctor AI is an AI-powered web application that analyzes user prompts and suggests improvements to make them more effective for Large Language Models (LLMs) such as Gemini, ChatGPT, Claude, and others.

The application evaluates prompt quality, identifies weaknesses, and generates an optimized version for better AI responses.

---

## ✨ Features

- 🧠 AI-powered prompt analysis
- 📊 Prompt quality score
- ✅ Clarity evaluation
- 📝 Context analysis
- 🎯 Constraint detection
- 📋 Improved prompt generation
- 💡 Strengths & weaknesses report
- 📱 Responsive modern UI
- ☁️ Cloud deployment (Vercel + Render)

---

## 🛠️ Tech Stack

### Frontend

- React
- Vite
- Tailwind CSS
- Framer Motion
- Axios
- Lucide React

### Backend

- Node.js
- Express.js
- Google Gemini API
- CORS
- dotenv

---

## 📂 Project Structure

```
PromptDoctor-AI
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── assets
│   │   └── App.jsx
│   └── package.json
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── services
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/YOUR_USERNAME/PromptDoctor-AI.git
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file inside the backend folder.

```
GEMINI_API_KEY=YOUR_API_KEY
```

Frontend `.env`

```
VITE_API_URL=http://localhost:5000
```

---

## 🌐 Live Demo

### Frontend

Coming Soon

### Backend

https://prompt-doctor-ai.onrender.com

---

## 📸 Screenshots

(Add screenshots here)

---

## 🚀 Future Improvements

- User Authentication
- Prompt History
- Export Report as PDF
- Multiple AI Models
- Dark/Light Theme
- Prompt Templates
- Team Workspace
- AI Conversation History
- Analytics Dashboard

---

## 🧠 How It Works

1. User enters a prompt.
2. Frontend sends the prompt to the backend.
3. Backend validates the request.
4. Gemini AI analyzes the prompt.
5. AI returns:
   - Prompt Score
   - Strengths
   - Weaknesses
   - Improved Prompt
6. Frontend displays the complete report.

---

## 🏗️ Architecture

```
User
   │
   ▼
React Frontend
   │
Axios
   │
Express Backend
   │
Gemini API
   │
AI Analysis
   │
Response
   │
Frontend UI
```

---

## 👨‍💻 Developed By

**Pratham Rathore**

B.Tech Computer Science Engineering

Parul University

---

## ⭐ Support

If you like this project, consider giving it a ⭐ on GitHub.

It motivates further development.

---

## 📜 License

This project is licensed under the MIT License.