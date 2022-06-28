const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// init app
const app = express();

// connect db

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("helo");
});

app.get('/api/students', (req, res) => {
    var {classId} = req.query;

    return res.json({ data: [
        {studentId: 1, firstName: 'student', lastName: '01', isAssigned: true},
        {studentId: 2, firstName: 'student', lastName: '02', isAssigned: false},
        {studentId: 3, firstName: 'student', lastName: '03', isAssigned: false},
        {studentId: 4, firstName: 'student', lastName: '04', isAssigned: false},
        {studentId: 5, firstName: 'student', lastName: '05', isAssigned: false},
        {studentId: 6, firstName: 'student', lastName: '06', isAssigned: false},
        {studentId: 7, firstName: 'student', lastName: '07', isAssigned: false},
        {studentId: 8, firstName: 'student', lastName: '08', isAssigned: false},
        {studentId: 9, firstName: 'student', lastName: '09', isAssigned: true},
        {studentId: 10, firstName: 'student', lastName: '10', isAssigned: false},
        {studentId: 11, firstName: 'student', lastName: '11', isAssigned: false},
        {studentId: 12, firstName: 'student', lastName: '12', isAssigned: false},
    ] });
});

// start server
const PORT_SERVER = 3001;
app.listen(PORT_SERVER, () =>
  console.log(`server is running on port ${PORT_SERVER}`),
);