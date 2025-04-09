# BuyCar

A full-stack car listing and discovery platform where users can explore, filter, sort, and wishlist cars. Built using **React**, **Vite**, **Tailwind CSS + DaisyUI**, **Redux Toolkit**, and a custom **Node.js + Express + MongoDB** backend.

---

## 🔗 Live Demo: [https://buycar-fn8p.onrender.com](https://buycar-fn8p.onrender.com/)

---

## ✨ Features

- Browse cars with image, price, specs, etc.
- Filter by:
  - Brand
  - Fuel type
  - Seating capacity
  - Price range
- Sort by price (low to high, high to low)
- Search by make or model (with regex)
- Pagination
- Wishlist functionality (with Redux store)
- Responsive UI with light/dark mode toggle
- Protected CORS-based API for deployment

---

## 🛠️ Tech Stack

### Frontend
- React + Vite
- Tailwind CSS + DaisyUI
- React Router DOM
- Lucide React Icons
- Axios
- Redux Toolkit + Redux DevTools
- React Hot Toast

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- dotenv
- Render for deployment

---

## ⚙️ Local Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/aishwary-dixit1/BuyCar.git
cd buycars
```

### 2. Setup Backend

```bash
cd backend
npm install
```

Create a `.env` file in `/backend`:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```

Run backend:
```bash
npm run dev
```

> Uses `nodemon` for hot-reloading

---

### 3. Setup Frontend

```bash
cd ../frontend
npm install
npm run dev
```

> Opens at `http://localhost:5173`

---

### 4. Seed Sample Car Data

Use the provided `seed.js` script to insert mock data:

```bash
node seed.js
```

---

## 🧠 Folder Structure

```
buycars/
│
├── backend/
│   ├── server.js
│   ├── src/
│   │   ├── routes/
│   │   ├── controllers/
│   │   ├── models/
│   │   └── config/
│   └── seed.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── redux/
│   └── tailwind.config.js
│
├── README.md
└── package.json
```

---

## ✍️ Author

**Aishwary Dixit**

- GitHub: [@aishwarydixit](https://github.com/aishwarydixit)
- LinkedIn: [linkedin.com/in/aishwarydixit](https://linkedin.com/in/aishwarydixit)

---

## 📄 License

This project is licensed under the MIT License.

---

### ⭐️ Don't forget to star the repo if you find this useful!
