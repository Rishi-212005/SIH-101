const db = require('../db');
const bcrypt = require('bcrypt');

// ------------------ REGISTER ------------------
exports.register = async (req, res) => {
  const { role, fullName, email, phone, password, department, skills } = req.body;

  if (!role || !fullName || !email || !phone || !password) {
    return res.status(400).json({ error: 'All required fields must be filled' });
  }

  // Check if user already exists
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length > 0) return res.status(400).json({ error: 'User already exists' });

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert user
    const query = `INSERT INTO users (role, fullName, email, phone, password, department, skills) 
                   VALUES (?, ?, ?, ?, ?, ?, ?)`;
    db.query(query, [role, fullName, email, phone, hashedPassword, department || '', skills || ''], (err, result) => {
      if (err) return res.status(500).json({ error: 'Database insert error' });
      res.status(201).json({ message: 'User registered successfully', userId: result.insertId });
    });
  });
};

// ------------------ LOGIN ------------------
exports.login = (req, res) => {
  const { email, password, role } = req.body;

  if (!email || !password || !role) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  const query = 'SELECT * FROM users WHERE email = ? AND role = ?';
  db.query(query, [email, role], async (err, results) => {
    if (err) return res.status(500).json({ error: 'Database error' });
    if (results.length === 0) return res.status(401).json({ error: 'Invalid credentials' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });

    // Optionally, create a JWT here for authentication

    res.status(200).json({ message: 'Login successful', user: { id: user.id, role: user.role, fullName: user.fullName } });
  });
};
