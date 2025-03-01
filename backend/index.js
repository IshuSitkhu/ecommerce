const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ MySQL Database Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "ecommerceee",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed: " + err.message);
  } else {
    console.log("✅ Connected to MySQL");
  }
});

// ✅ Start Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));

/* =====================================
 ✅ Register Endpoint
====================================== */
app.post("/register", async (req, res) => {
  try {
    let { username, email, password, role } = req.body;

    // Trim whitespace from input
    username = username?.trim();
    email = email?.trim();
    password = password?.trim();

    // Validate input fields
    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if user already exists
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
      if (err) {
        console.error("Database error:", err);
        return res.status(500).json({ message: "Database error" });
      }

      if (result.length > 0) {
        return res.status(400).json({ message: "User already exists" });
      }

      // Hash password before storing
      const hashedPassword = await bcrypt.hash(password, 10);
      role = role || "user"; // Default role if not provided

      // Insert new user
      db.query(
        "INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
        [username, email, hashedPassword, role],
        (err, result) => {
          if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).json({ message: "Error registering user" });
          }
          res.status(201).json({ message: "User registered successfully" });
        }
      );
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

/* =====================================
 ✅ Login Endpoint
====================================== */
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input fields
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
      if (err) return res.status(500).json({ message: "Database error" });
      if (result.length === 0) return res.status(404).json({ message: "User not found" });

      const user = result[0];
      const isValidPassword = await bcrypt.compare(password, user.password);

      if (!isValidPassword) return res.status(401).json({ message: "Invalid credentials" });

      // Securely sign JWT token
      const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || "defaultsecret", {
        expiresIn: "1h",
      });

      res.json({ message: "Login successful", token, user: { id: user.id, username: user.username, email: user.email, role: user.role } });
    });
  } catch (error) {
    console.error("Server error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

/* =====================================
 ✅ Protected Route Example (Dashboard)
====================================== */
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  
  if (!token) return res.status(403).json({ message: "Access denied. No token provided." });

  jwt.verify(token, process.env.JWT_SECRET || "defaultsecret", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Invalid token" });

    req.user = decoded;
    next();
  });
};

// ✅ Example Protected Route
app.get("/dashboard", verifyToken, (req, res) => {
  res.json({ message: `Welcome, user ${req.user.id}!`, role: req.user.role });
});
