const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");

require('../DB/conn')
const User = require('../model/userschema');
const Job = require('../model/postschema');

router.get('/', (req, res) => {
    res.send(`Hello world from the server rotuer js`);
});


//post ka page
router.post('/post', async (req, res) => {
    const {orgname,jobtitle,salary,location} = req.body;
    
    if(!orgname || !jobtitle || !salary || !location){
        return res.status(422).json({error:"Please Fill All the Entries"});
    }
    
    try{
        const orgExist = await Job.findOne({orgname:orgname});
        const jobExist = await Job.findOne({jobtitle:jobtitle});
        const salExist = await Job.findOne({salary:salary});
        const locExist = await Job.findOne({location:location});
        if(orgExist && jobExist && salExist &&locExist){
            return res.status(422).json({ error: "Post Already Exists"});
        }else{
        const post = new Job({orgname, jobtitle,salary,location});
        //hash pass
        await post.save();
        res.status(201).json({message: "Post Registered Successfully"});
        }
    }catch(err){
        console.log(err);
    }
    // res.send(`Hello world from the post`);
});


//register
router.post('/signup', async (req, res) => {
    const {name, email,phone,work,password,cpassword} = req.body;
    
    if(!name || !email || !phone || !work || !password || !cpassword){
        return res.status(422).json({error:"Please Fill All the Entries"});
    }
    
    try{
        const userExist = await User.findOne({email:email})
        if(userExist){
            return res.status(422).json({ error: "Email Already Exists"});
        }else if(password != cpassword){
            return res.status(422).json({ error: "Passwords Do Not Match"});
        }else{
            const user = new User({name, email,phone,work,password,cpassword});
        //hash pass
        await user.save();

        res.status(201).json({message: "User Registered Successfully"});

        }
        
    }catch(err){
        console.log(err);
    }

});

//loogin route

router.post('/signin' , async  (req, res) => {

    try{
        let token;
    const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({error: "Field Cannot be Empty"})
        }
        
        const userLogin = await User.findOne({email:email}); 

        console.log(userLogin);

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

        if (!isMatch) {
            res.status(400).json({ error: "Invalid Credientials " });
        } else {
             // need to genereate the token and stored cookie after the password match 
            token = await userLogin.generateAuthToken();
            // console.log(token)

            res.cookie("jwtoken", token, {
                expires: new Date(Date.now() + 1800000),
                httpOnly:true
            });
            
            res.json({ message: "user Signin Successfull" });
        }
        } else {
             res.status(400).json({ error: "Invalid Credientials " });
        }

    } catch (err) {
        console.log(err);
    }
});

// about us ka page 
router.get('/about', authenticate ,(req, res) => {
    console.log(`Accessing profile section`);
    res.send(req.rootUser);
});

// get user data for contact us and home page 
router.get('/getdata', authenticate, (req, res) => {
   console.log(`fetching user data`);
    res.send(req.rootUser);
});

router.route('/getpost').get((req, res) => {
    Job.find()
    .then(foundpost => res.json(foundpost))
    console.log(`fetching post data`);
 });

// contact us page 
router.post('/contact', authenticate, async (req, res) => {
    try {

        const { name, email, phone, message } = req.body;
        
        if (!name || !email || !phone || !message) {
            console.log("error in contact form");
            return res.json({ error: "Please fill the Contact form correctly" });
        }

        const userContact = await User.findOne({ _id: req.userID });
 
        if (userContact) {
            
            const userMessage = await userContact.addMessage(name, email, phone, message);

            await userContact.save();

            res.status(201).json({ message: "Your Message has been sent !" });

        }
        
    } catch (error) {
        console.log(error);
    }

});



// Logout  ka page 
router.get('/logout', (req, res) => {
    console.log(`Loging out`);
    res.clearCookie('jwtoken', { path: '/' });
    res.status(200).send('User logout');
});


module.exports = router;

