ECHO is on.
# EigenLayer Restaking Info API

This is a backend service that exposes restaking data from EigenLayer, built with **Node.js**, **Express**, and **MongoDB**. It mimics fetching onchain and subgraph data related to restakers, validators, and rewards.

---

## 📦 Features

### ✅ Endpoints:

- `GET /restakers`
  > Returns a list of users who restaked stETH  
  → Includes user address, amount restaked, and validator address.

- `GET /validators`
  > Returns list of AVS validator operators  
  → Includes operator ID, status, total delegated stake, and slash history.

- `GET /rewards/:address`
  > Returns reward insights for a given wallet  
  → Total rewards received and breakdown by validator.

---

## 🛠️ Tech Stack

- Node.js + Express
- MongoDB with Mongoose
- dotenv for environment config
- Nodemon for dev server

---

## 🧪 Demo Sample Data

Run this to seed the database with mock data:

```bash
node scripts/seed.js
