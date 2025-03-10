
# 📚 Bookstore API  

This is a **NestJS-powered Bookstore API** that allows users to manage books, authors, and orders efficiently. Built with **NestJS, TypeScript**, it follows best practices for **scalability, maintainability, and performance**.  

## 🚀 Features  

✅ **CRUD operations** for books, authors, and orders   

## 🛠️ Tech Stack  

- **NestJS** – Modular architecture for scalable backend development  
- **TypeScript** – Strictly typed for better maintainability  

## 📦 Installation  

1. **Clone the repository**  
   ```bash
   git clone https://github.com/meshack-mbuvi/bookstore-api.git
   cd bookstore-api
   ```  

2. **Install dependencies**  
   ```bash
   npm install
   ```     

3. **Start the server**  
   ```bash
   npm run start:dev
   ```  

## 🏗️ API Endpoints  

| Method | Endpoint          | Description                  |
|--------|-------------------|------------------------------|
| GET    | `/books`          | Get all books                |
| GET    | `/books/:id`      | Get a specific book          |
| POST   | `/books`          | Create a new book            |
| PUT    | `/books/:id`      | Update book details          |
| DELETE | `/books/:id`      | Delete a book                |

📌 **Full API documentation available at:** `http://localhost:3000/api` (Swagger UI)  

## 🔥 Running with Docker  

```bash
docker-compose up --build
```  

## ✅ Tests  

Run unit and e2e tests:  
```bash
npm run test
npm run test:e2e
```  

## 🎯 Contributing  

Feel free to **fork, contribute, or report issues**!  

---

📌 **Author:** Meshack Mbuvi  
📌 **GitHub:** [@meshack-mbuvi](https://github.com/meshack-mbuvi)  

