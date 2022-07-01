const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

// init app
const app = express();


app.use(cookieParser());

// Cookie options
const accessTokenCookieOptions = {
  expires: new Date(
    Date.now() + 1 * 60 * 1000
  ),
  maxAge: 1 * 60 * 1000,
  httpOnly: true,
  sameSite: 'lax',
};

const refreshTokenCookieOptions = {
  expires: new Date(
    Date.now() + 59 * 60 * 1000
  ),
  maxAge: 59 * 60 * 1000,
  httpOnly: true,
  sameSite: 'lax',
};


// connect db

// middleware
app.use(cors({credentials: true, origin: 'http://localhost:3000'}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send("helo");
});

app.get('/api/classes', async (req, res) => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return res.json(
        {
            data: [
                {label: "class 01", value: "1"},
                {label: "class 02", value: "2"},
                {label: "class 03", value: "3"},
                {label: "class 04", value: "4"},
                {label: "class 05", value: "5"},
            ], 
            abc: "trying to convert transform response from react toolkit query"
        });
});

app.get('/api/students', async (req, res) => {
    var {classId} = req.query;
    await new Promise(resolve => setTimeout(resolve, 3000));

    var data = [
        {studentId: 1, firstName: 'student', lastName: '01', isAssigned: true, classId: "1"},
        {studentId: 2, firstName: 'student', lastName: '02', isAssigned: false, classId: "2"},
        {studentId: 3, firstName: 'student', lastName: '03', isAssigned: false, classId: "2"},
        {studentId: 4, firstName: 'student', lastName: '04', isAssigned: false, classId: "1"},
        {studentId: 5, firstName: 'student', lastName: '05', isAssigned: false, classId: "2"},
        {studentId: 6, firstName: 'student', lastName: '06', isAssigned: false, classId: "1"},
        {studentId: 7, firstName: 'student', lastName: '07', isAssigned: false, classId: "2"},
        {studentId: 8, firstName: 'student', lastName: '08', isAssigned: false, classId: "4"},
        {studentId: 9, firstName: 'student', lastName: '09', isAssigned: true, classId: "2"},
        {studentId: 10, firstName: 'student', lastName: '10', isAssigned: false, classId: "1"},
        {studentId: 11, firstName: 'student', lastName: '11', isAssigned: false, classId: "1"},
        {studentId: 12, firstName: 'student', lastName: '12', isAssigned: false, classId: "1"},
    ];

    if(classId) {
        data = data.filter(p => p.classId === classId);
    }

    return res.json({ data });
});

app.post('/api/auth/register', async (req, res) => {
    console.log(req.body);
});

app.post('/api/auth/login', async (req, res) => {
    console.log(req.body);
    await new Promise(resolve => setTimeout(resolve, 4000));

    // create access_token + refresh_token
    res.cookie('access_token', "access_token_fake", accessTokenCookieOptions);
    res.cookie('refresh_token', "refresh_token_fake", refreshTokenCookieOptions);
    res.cookie('logged_in', true, {
      ...accessTokenCookieOptions,
      httpOnly: false,
    });

    res.status(200).json({
        status: 'success',
        access_token: "access_token_fake",
      });
});

app.get('/api/auth/logout', async (req, res) => {
    res.cookie('access_token', '', { maxAge: 1 });
    res.cookie('refresh_token', '', { maxAge: 1 });
    res.cookie('logged_in', '', { maxAge: 1 });
    res.status(200).json({ status: 'success' });
});

app.get('/api/users/me', async (req, res) => {
  return res.json({id: 1, name: 'tin-nguyen', email: 'blah@gmail.com', role: 'admin'});
});



// start server
const PORT_SERVER = 3001;
app.listen(PORT_SERVER, () =>
  console.log(`server is running on port ${PORT_SERVER}`),
);