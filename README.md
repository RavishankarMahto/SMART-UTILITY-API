# 🌐 Smart Utility API

This is a Node.js-based REST API providing smart utilities like:
- ✅ URL Shortener
- 🌦️ Weather Information
- 📖 Word Meaning Dictionary

Built using **Express.js**, **Axios**, and **OpenWeatherMap API**, this project is designed to provide multiple services through a unified backend.

---

## 📁 Project Structure

```
smart-utility/
├── backend/
│   ├── routes/
│   │   ├── url.js
│   │   ├── weather.js
│   │   └── dictionary.js
│   ├── .env
│   ├── server.js
├── frontend/
│   └── index.html
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js installed (v18+ recommended)
- npm or yarn
- Internet (for weather and dictionary APIs)

---

### 🔧 Installation

```bash
git clone https://github.com/RavishankarMahto/SMART-UTILITY-API.git
cd SMART-UTILITY-API/backend
npm install
```

---

### 🔑 Create `.env` File

In the `backend/` folder, create a `.env` file and add:

```
PORT=5000
WEATHER_API_KEY=edf227583c5d97c00da4c2b538af2f79
```

---

### ▶️ Running the Server

```bash
node server.js
```

Server will run at:  
`http://localhost:5000`

---

## 🔌 API Endpoints

### 1. 🔗 URL Shortener

**POST** `/api/url/shorten`

```json
Request Body:
{
  "originalUrl": "[https://example.com](https://bgtpeople.codexuslabs.com/employee-profile)"
}

Response:
{
  "shortUrl": "http://localhost:5000/api/url/nYL3Es"
}
```

---

### 2. 🌦️ Weather Info

**GET** `/api/weather?city=Delhi`

```json
Response:
{
  "name": "Delhi",
  "main": {
    "temp": 30.6,
    "humidity": 75
  },
  "weather": [
    {
      "description": "overcast clouds"
    }
  ]
}
```

---

### 3. 📖 Word Meaning

**GET** `/api/word?word=example`

```json
Response:
{
  "word": "example",
  "meanings": [
    {
      "partOfSpeech": "noun",
      "definitions": [
        {
          "definition": "A thing characteristic of its kind..."
        }
      ]
    }
  ]
}
```

---

## 📚 Tech Stack

- **Backend**: Node.js, Express.js
- **HTTP Requests**: Axios
- **Environment Variables**: dotenv
- **APIs Used**:
  - [OpenWeatherMap](https://openweathermap.org/)
  - [Free Dictionary API](https://dictionaryapi.dev/)

---

## 🧑‍💻 Author

Made with ❤️ by [Ravishankar Kumar Mahto](https://github.com/RavishankarMahto)

---
