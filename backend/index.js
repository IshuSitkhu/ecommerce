const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

// Serve static files
app.use("/upload", express.static(path.join(__dirname, "upload")));

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
app.listen(4000, () => console.log("🚀 Server running on port 4000"));

// ✅ Register Endpoint (Unchanged)
app.post("/register", async (req, res) => {
  const { username, email, password, role } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (result.length > 0) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const userRole = role || "user";

    db.query("INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)",
      [username, email, hashedPassword, userRole],
      (err, result) => {
        if (err) return res.status(500).json({ message: "Error registering user" });
        res.status(201).json({ message: "User registered successfully" });
      }
    );
  });
});

// ✅ Login Endpoint (Unchanged)
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });
    if (result.length === 0) return res.status(400).json({ message: "User not found" });

    const user = result[0];
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) return res.status(401).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user.id, role: user.role }, "secretkey", { expiresIn: "1h" });
    res.json({ message: "Login successful", token, role: user.role });
  });
});

// ✅ Multer Storage for File Uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload"); // Save images in the backend /upload folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// ✅ Add Product Endpoint
app.post("/addItems", upload.single("image"), (req, res) => {
  const { name, category, price } = req.body;
  const imgurl = req.file ? `/upload/${req.file.filename}` : null; // Store path in DB

  if (!name || !category || !price || !imgurl) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const query = "INSERT INTO product (name, category, price, imgurl) VALUES (?, ?, ?, ?)";
  db.query(query, [name, category, price, imgurl], (err, result) => {
    if (err) {
      console.error("❌ Error adding product:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.status(201).json({ message: "Product added successfully" });
  });
});


// ✅ Fetch Products by Category
app.get("/products/:category", (req, res) => {
  const { category } = req.params;
  const query = "SELECT * FROM product WHERE category = ?";
  
  db.query(query, [category], (err, results) => {
    if (err) {
      console.error("❌ Error fetching products:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});





