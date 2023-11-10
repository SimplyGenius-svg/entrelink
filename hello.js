const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const app = express()

mongoose.connect('mongodb://localhost:27017/entrelinkusers', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connect('mongodb://localhost:27017/entrelinkusers', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.post('/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({ email, password });
    await user.save();
    res.send('User created successfully');
  } catch (error) {
    res.status(500).send('Error creating user');
  }
});


app.use(express.static(__dirname + '/www'));
app.use(bodyParser.urlencoded({ extended: true }));s
app.listen(5500)
console.log('working on 5500');



/* 
Necessary for Users:
 email
 password
 username
 (entrepreneur, investor, occupation)
        User Profile (Freemium):
        profile picture
            Functionality:
                Post in Forums
                Join Networking Events
                Connect With People (Tinder)

        Company Profile ($$$):
        Users are able to create Company Profiles:
            industry
            Key Metrics About Company
            Mission + Vision
            (Analytics Tab Functionality)
        
        social media
*/