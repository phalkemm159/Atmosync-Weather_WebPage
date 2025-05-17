![image](https://github.com/user-attachments/assets/1a4a3ff6-bc74-490a-b404-992397577f14)

🌦️ Atmosync – Weather WebPage

Atmosync is a sleek and responsive weather application built using HTML, CSS, and JavaScript. It utilizes the OpenWeatherMap API to fetch real-time weather data for any city worldwide.

## 🚀 Features

- 🔍 Search current weather by city name
- 🌡️ Displays temperature, weather condition, humidity, and wind speed
- 🎨 Animated UI elements for better visual feedback
- ❌ Graceful error handling for invalid cities
- ⌨️ Supports "Enter" key for instant search

---

## 🛠️ Tech Stack

- HTML5  
- CSS3  
- Vanilla JavaScript  
- OpenWeatherMap API  

---

## 📦 Folder Structure

Atmosync-Weather_WebPage/

├── public/

│ ├── css/

│ │ └── style.css

│ ├── images/

│ │ ├── clear.png

│ │ ├── rain.png

│ │ └── ...

│ └── index.html

├── script.js

├── .env

├── server.js (optional backend)

└── README.md

---

## 🔒 Environment Variables

If you're using a backend server to hide your API key, create a `.env` file in the root directory:

APIkey=your_openweathermap_api_key

Then ensure you're using dotenv in your server.js:

require('dotenv').config();

⚙️ Setup Instructions
📌 Option 1: Run as Static Frontend (for learning/testing)
⚠️ Not secure for production as the API key is exposed.

Clone the repository

Open index.html directly in a browser

Start searching for any city

📌 Option 2: Use with Node.js Backend (recommended for production)
Install dependencies:
npm install

Create a .env file:
APIkey=your_openweathermap_api_key

Start the backend server:
node server.js
Open index.html — the frontend will fetch weather data from:

http://localhost:3000/weather


🧠 Future Improvements

🔍 Autocomplete suggestions

🌎 Use geolocation to get local weather

📱 Mobile-first responsive enhancements

📝 License
This project is open source and available under the MIT License.

👨‍💻 Author
Developed by @phalkemm159 ✨
