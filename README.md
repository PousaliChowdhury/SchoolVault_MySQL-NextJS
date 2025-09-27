# SchoolVault_MySQL-NextJS

A mini-project built with *Next.js* and *MySQL* that allows users to:
1. Add school details with an image upload.
2. View all schools in a responsive grid layout.

---

## 📖 Features

- Add new school with:
  - Name
  - Address
  - City
  - State
  - Country
  - Contact number
  - Email ID
  - Image upload
- Store data in MySQL database.
- Display schools in a responsive grid (with images, name, address, and city).
- Input validation using *react-hook-form*.
- Responsive design (works on mobile and desktop).

---

## ⚙ Setup Instructions

### 1. Install dependencies

```bash
npm install
```
### 2. Configure environment variables

Create a .env.local file in the project root:

```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=schoolDB
```
### 3. Set up MySQL

Run the following SQL in MySQL Workbench or CLI:
```bash
CREATE DATABASE schoolDB;

USE schoolDB;

CREATE TABLE schools (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(100) NOT NULL,
  state VARCHAR(100) NOT NULL,
  contact BIGINT NOT NULL,
  image VARCHAR(255),
  email_id VARCHAR(255) NOT NULL,
  PRIMARY KEY (id)
);
```
### 4. Run the development server
```bash
npm run dev
```
Visit http://localhost:3000 in your browser.

---

## 🛠 Tech Stack

- Next.js (React Framework)
- MySQL (Database)
- react-hook-form (Form validation)
- Multer (File upload handling)

