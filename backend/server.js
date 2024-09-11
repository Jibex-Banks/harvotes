const express = require('express');
const sql = require('mssql');
const cors = require('cors');

const app = express();

// CORS configuration
const corsOptions = {
  origin: 'http://localhost:5173', // Replace with your frontend URL
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

const config = {
  user: 'your-username',
  password: 'your-password',
  server: 'your-server-address',
  database: 'auth_db',
  options: {
    encrypt: true,
    trustServerCertificate: true
  }
};

let pool;

async function connectToDatabase() {
  try {
    pool = await sql.connect(config);
    console.log('Connected to database!');
  } catch (err) {
    console.error('Error connecting to database:', err);
    process.exit(1);
  }
}

async function createUsersTable() {
  try {
    await pool.request().query(`
      IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='users' AND xtype='U')
      CREATE TABLE users (
        id INT IDENTITY(1,1) PRIMARY KEY,
        username NVARCHAR(100) NOT NULL UNIQUE,
        email NVARCHAR(100) NOT NULL UNIQUE,
        password NVARCHAR(255) NOT NULL
      )
    `);
    console.log('Users table created or already exists');
  } catch (err) {
    console.error('Error creating users table:', err);
  }
}

connectToDatabase();

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const result = await pool.request()
      .input('username', sql.NVarChar, username)
      .query('SELECT * FROM users WHERE username = @username');
    
    if (result.recordset.length === 0) {
      return res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
    
    const user = result.recordset[0];
    if (user.password === password) {
      res.json({ success: true, username: user.username });
    } else {
      res.status(401).json({ success: false, message: 'Invalid username or password' });
    }
  } catch (err) {
    console.error('Error in login:', err);
    res.status(500).json({ success: false, message: 'Error logging in', error: err.message });
  }
});

app.post('/api/signup', async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const result = await pool.request()
      .input('username', sql.NVarChar, username)
      .input('email', sql.NVarChar, email)
      .input('password', sql.NVarChar, password)
      .query('INSERT INTO users (username, email, password) VALUES (@username, @email, @password)');
    
    res.json({ success: true });
  } catch (err) {
    console.error('Error in signup:', err);
    res.status(500).json({ success: false, message: 'Error signing up', error: err.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});