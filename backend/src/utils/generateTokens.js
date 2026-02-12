const jwt = require('jsonwebtoken');

const generateTokens = (student) => { 
    return jwt.sign(
        {
            id: student._id,
            name: student.name,
            email: student.email
        },
        process.env.JWT_SECRET,
        { expiresIn: '3d' }
    );
}

module.exports = generateTokens;


