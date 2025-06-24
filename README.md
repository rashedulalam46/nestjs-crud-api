# NestJS RESTful API with JSON File Storage

A simple RESTful API built using [NestJS](https://nestjs.com/) with support for basic CRUD operations (`GET`, `POST`, `PUT`, `DELETE`). This example uses a local JSON file for data storage and follows a clean, modular folder structure for better scalability and maintainability.

## 🚀 Features

- ✅ Built with NestJS and TypeScript
- 📁 Clean modular architecture
- 💾 JSON file-based storage (no database required)
- 🔁 Supports full CRUD operations
- 🧪 Easy to test with Postman or curl

---

## 📦 Folder Structure
```bash
nestjs-crud-api/
├── src/
│ ├── users/
│ │ ├── users.controller.ts
│ │ ├── users.service.ts
│ │ ├── users.module.ts
│ ├── app.module.ts
├── users.json
├── package.json
```

🔗 API Endpoints

| Method | Endpoint     | Description       |
| ------ | ------------ | ----------------- |
| GET    | `/users`     | Get all users     |
| GET    | `/users/:id` | Get user by ID    |
| POST   | `/users`     | Create a new user |
| PUT    | `/users/:id` | Update a user     |
| DELETE | `/users/:id` | Delete a user     |
