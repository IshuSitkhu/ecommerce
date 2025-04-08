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
    return res.status(400).json({ message: "All fields are requi#222" });
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
        res.status(201).json({ message: "User registe#222 successfully" });
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
    if (!isValidPassword) return res.status(401).json({ message: "Invalid c#222entials" });

    const token = jwt.sign({ id: user.id, role: user.role }, "secretkey", { expiresIn: "5min" });
    res.json({
      message: "Login successful",
      token,
      role: user.role,
      username: user.username, // ✅ ADD THIS
      userId: user.id, 
    });
    
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
    return res.status(400).json({ message: "All fields are requi#222" });
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


app.get("/products", (req, res) => {
  const query = "SELECT * FROM product";
  db.query(query, (err, results) => {
    if (err) {
      console.error("❌ Error fetching all products:", err);
      return res.status(500).json({ message: "Database error" });
    }
    res.json(results);
  });
});



// // // ///////
// // // /// Add the POST Route for Adding Items to Cart
// // app.post('/cart', (req, res) => {
// //   const { userId, productId, name, price, image } = req.body;
// //   const sql = 'INSERT INTO addtocart (userId, productId, name, price, image) VALUES (?, ?, ?, ?, ?)';
// //   db.query(sql, [userId, productId, name, price, image], (err, result) => {
// //     if (err) return res.status(500).send(err);
// //     res.send({ message: 'Item added to cart' });
// //   });
// // });

// app.post('/cart', (req, res) => {
//   const { userId, productId, name, price, image, quantity = 1 } = req.body; // Set default quantity to 1
//   const sql = 'INSERT INTO addtocart (userId, productId, name, price, image, quantity) VALUES (?, ?, ?, ?, ?, ?)';
//   db.query(sql, [userId, productId, name, price, image, quantity], (err, result) => {
//     if (err) return res.status(500).send(err);
//     res.send({ message: 'Item added to cart' });
//   });
// });

app.post('/cart', (req, res) => {
  const { userId, productId, name, price, image } = req.body;

  // Check if the product already exists in the cart for this user
  const checkProductSql = 'SELECT * FROM addtocart WHERE userId = ? AND productId = ?';
  db.query(checkProductSql, [userId, productId], (err, result) => {
    if (err) return res.status(500).send(err);

    if (result.length > 0) {
      // Product already exists in the cart, update the quantity
      const currentQuantity = result[0].quantity;
      const newQuantity = currentQuantity + 1; // Increase quantity by 1

      const updateSql = 'UPDATE addtocart SET quantity = ? WHERE userId = ? AND productId = ?';
      db.query(updateSql, [newQuantity, userId, productId], (err, updateResult) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Quantity updated in cart' });
      });
    } else {
      // Product does not exist in the cart, insert a new entry
      const insertSql = 'INSERT INTO addtocart (userId, productId, name, price, image, quantity) VALUES (?, ?, ?, ?, ?, ?)';
      db.query(insertSql, [userId, productId, name, price, image, 1], (err, insertResult) => {
        if (err) return res.status(500).send(err);
        res.send({ message: 'Item added to cart' });
      });
    }
  });
});



// app.post('/cart', (req, res) => {
//   console.log("Received data:", req.body);

//   const { userId, productId, name, price, image } = req.body;

//   // Add validation for missing fields
//   if (!userId || !productId || !name || !price || !image) {
//     return res.status(400).send('Missing required fields');
//   }

//   console.log(`Adding product ${productId} to user ${userId}'s cart`);

//   // Check if the item already exists in the cart
//   const checkItemSql = 'SELECT * FROM addtocart WHERE userId = ? AND productId = ?';
//   db.query(checkItemSql, [userId, productId], (err, result) => {
//     if (err) {
//       console.error('Database error while checking existing item:', err);
//       return res.status(500).send('Internal Server Error');
//     }

//     if (result.length > 0) {
//       // If item exists, update quantity
//       const newQuantity = result[0].quantity + 1;
//       const updateQuantitySql = 'UPDATE addtocart SET quantity = ? WHERE userId = ? AND productId = ?';
//       db.query(updateQuantitySql, [newQuantity, userId, productId], (err) => {
//         if (err) {
//           console.error('Database error while updating quantity:', err);
//           return res.status(500).send('Internal Server Error');
//         }
//         console.log(`Updated quantity of product ${productId} for user ${userId}`);
//         res.send({ message: 'Item quantity updated in cart' });
//       });
//     } else {
//       // If item doesn't exist, insert new item
//       const insertSql = 'INSERT INTO addtocart (userId, productId, name, price, image, quantity) VALUES (?, ?, ?, ?, ?, ?)';
//       db.query(insertSql, [userId, productId, name, price, image, 1], (err) => {
//         if (err) {
//           console.error('Database error while inserting new item:', err);
//           return res.status(500).send('Internal Server Error');
//         }
//         console.log(`Added new product ${productId} to user ${userId}'s cart`);
//         res.send({ message: 'Item added to cart' });
//       });
//     }
//   });
// });


// GET CART ITEMS FOR A USER
app.get('/cart/:userId', (req, res) => {
  const userId = req.params.userId;
  db.query('SELECT * FROM addtocart WHERE userId = ?', [userId], (err, result) => {
    // if (err) return res.status(500).send(err);
    // res.send(result);
    if (err) {
      console.error("Error fetching user cart:", err);
      return res.status(500).json({ error: "Internal server error" });
    }
    res.json(result);
  });
});


// DELETE an item from the cart
app.delete('/cart/:userId/:productId', (req, res) => {
  const { userId, productId } = req.params;
  const sql = 'DELETE FROM addtocart WHERE userId = ? AND productId = ?';
  db.query(sql, [userId, productId], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send('Internal Server Error');
    }
    res.send({ message: 'Item removed from cart' });
  });
});

// PUT: Update cart item quantity
// PUT: Update cart item quantity
app.put('/cart/:userId/:productId', (req, res) => {
  const { userId, productId } = req.params;
  const { quantity } = req.body;

  if (quantity <= 0) {
    return res.status(400).send({ message: 'Invalid quantity' });
  }

  const sql = 'UPDATE addtocart SET quantity = ? WHERE userId = ? AND productId = ?';
  db.query(sql, [quantity, userId, productId], (err, result) => {
    if (err) {
      console.error("Database error:", err);
      return res.status(500).send('Internal Server Error');
    }
    if (result.affectedRows === 0) {
      return res.status(404).send({ message: 'Item not found in cart' });
    }
    res.send({ message: 'Cart updated' });
  });
});


