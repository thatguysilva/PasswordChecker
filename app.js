const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json()); // To parse JSON requests
app.use(express.static('public'));

// Function to check password strength
function isPasswordStrong(password) {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasDigits && hasSpecialChar;
}

app.post('/check-password', (req, res) => {
    const { password } = req.body;

    if (!password) {
        return res.status(400).json({ message: "Password is required" });
    }

    const isStrong = isPasswordStrong(password);

    return res.json({
        password: '********',
        isStrong,
        message: isStrong ? "Your password is strong." : "Your password is weak."
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});