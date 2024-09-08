require('dotenv').config();
const express = require('express');
const sql = require('mssql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
const port = process.env.PORT || 5173;

// Middleware
app.use(express.json());

// Database configuration
const dbConfig = {
  user: 'your_db_user',
  password: 'your_db_password',
  server: 'JIBEX-BANKS', // Without the instance name
  database: 'your_db_name',
  options: {
    instanceName: 'SQLEXPRESS', // Add instance name here
    encrypt: true,              // Or set to false depending on your setup
    connectTimeout: 30000,       // Optional: Increase connection timeout
  },
};

// Connect to the database
sql.connect(dbConfig)
  .then(pool => {
    if (pool.connected) {
      console.log('Connected to SQL Server');
    }
  })
  .catch(err => {
    console.error('Database connection failed:', err);
  });


// Define routes
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const pool = await sql.connect(dbConfig);
    const result = await pool.request()
      .input('username', sql.NVarChar, username)
      .query('SELECT * FROM Users WHERE Username = @username');

    const user = result.recordset[0];
    if (user && await bcrypt.compare(password, user.Password)) {
      const token = jwt.sign({ id: user.ID, username: user.Username }, 'your_jwt_secret', { expiresIn: '1h' });
      res.json({ token });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.post('/signup', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const pool = await sql.connect(dbConfig);
    await pool.request()
      .input('username', sql.NVarChar, username)
      .input('email', sql.NVarChar, email)
      .input('password', sql.NVarChar, hashedPassword)
      .query('INSERT INTO Users (Username, Email, Password) VALUES (@username, @email, @password)');

    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
