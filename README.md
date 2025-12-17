# 🔐 Secure Auth & Device-Integrated Backend (Node.js)

A production-style backend built with **Node.js, Express, MongoDB**, implementing **secure authentication**, **email verification via OTP**, **JWT-based user access**, and **token-based device authentication** (IoT-friendly).

---

## 🚀 Features

### 👤 User Authentication
- User signup with email & password
- Password hashing using **bcrypt**
- JWT-based authentication
- Protected user routes via middleware

### ✉️ Email Verification (OTP / MFA)
- OTP sent during signup
- OTP stored securely (hashed)
- OTP expiration handling
- Email resend OTP support
- Prevents login until email is verified

### 🔁 OTP Management
- One active OTP per purpose
- Old OTPs automatically invalidated
- Expiry-based verification
- Secure OTP comparison

### 📦 Device Authentication (IoT-Ready)
- Devices authenticated via **device token**
- No JWT required for devices
- Secure ESP32-friendly authentication
- Separate middleware for devices

### 🧾 Logging & Debugging
- Centralized logger
- Request flow tracing
- Error tracking
- Production-friendly logs

---

## 🏗️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- Nodemailer
- Winston (Logger)

---

## 📁 Project Structure

```txt
src/
├── controllers/
│   ├── auth.controller.js
│   ├── emailVerification.controller.js
│
├── services/
│   ├── user.signup.service.js
│   ├── emailVerification.service.js
│   ├── verifyEmailOtp.service.js
│
├── repositories/
│   └── user.repository.js
│
├── models/
│   ├── User.model.js
│   ├── Otp.model.js
│
├── middlewares/
│   ├── userAuth.middleware.js
│   ├── deviceAuth.middleware.js
│
├── utils/
│   ├── jwt.utils.js
│   ├── otp.util.js
│   ├── email.util.js
│   ├── logger.js
│
├── routes/
│   ├── auth.routes.js
│   ├── device.routes.js
│
└── app.js
