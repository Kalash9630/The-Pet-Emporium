const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cors = require('cors')
const app = express();
const v = require('validator')

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ThePetEmporium');

const MessageSchema = new mongoose.Schema({
    emailname: {
        type: String,
    },
    emailmessage: {
        type: String,
    },
    emailtext: {
        type: String,
    },
    emailcontact: {
        type: Number,
    },
    date: {
        type: Date,
        default: new Date(),
    }
})
const Message = mongoose.model('Message', MessageSchema);
app.get('/', (req, res) => {
    res.send('Server is running!');
})
app.post('/HOME', async (req, res) => {
    try {
        const { emailname, emailmessage, emailtext, emailcontact } = req.body;
        const newMessage = new Message({ emailname, emailmessage, emailtext, emailcontact });
        await newMessage.save();
        res.status(200).send('Done');
    } catch (error) {
        res.status(500).json({ error: 'An error occurred in data storing.' });
    }
});

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
    },
    email: {
        type: String,
        unique: true,
        validate: {
            validator: function (value) {
                // Regular expression to validate email format
                return /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(value);
            },
            message: 'Invalid email format.',
        },
    },
    password: {
        type: String,
    },
    contact: {
        type: Number,
    },
    date: {
        type: Date,
        default: new Date(),
    },
    //order page schem
    orders: [{
        productname: {
            type: String,
        },
        price: {
            type: String,
            default: '$7'
        },
        date: {
            type: Date,
            default: new Date(),
        },
        fullname: {
            type: String,
        },
        emailorder: {
            type: String,
            validate: {
                validator: function (value) {
                    // Regular expression to validate email format
                    return /^[A-Za-z0-9+_.-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(value);
                },
                message: 'Invalid email format.',
            },
        },
        address: {
            type: String,
        },
        city: {
            type: String,
        },
        state: {
            type: String,
        },
        pincode: {
            type: Number,
        },
        nameoncard: {
            type: String,
        },
        cardnumber: {
            type: Number,
        },
        expmonth: {
            type: Number,
        },
        expyear: {
            type: Number,

        },
        cvv: {
            type: Number,
        },
    }]
});


const User = mongoose.model('User', UserSchema);

app.get("/", (req, res) => {
    res.send("Server is running");
});


app.post('/Signup', async (req, res) => {
    try {
        const { username, email, password, contact } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, password: hashedPassword, contact });
        await newUser.save();
        res.json({ message: 'User Sign up successfull.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred in server.' });
    }
});

app.post('/Logn', async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await User.findOne({ username: username });
        if (!user) {
            return res.status(401).json({ error: 'User not found.' });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            return res.status(401).json({ error: 'Invalid password.' });
        }
        res.json({ message: 'Login successfull.' });
    } catch (error) {
        res.status(500).json({ error: 'An error occurred.' });
    }
});

app.post('/Shop', async (req, res) => {
    try {
        const {
            productname,
            fullname,
            emailorder,
            address,
            city,
            state,
            pincode,
            nameoncard,
            cardnumber,
            expmonth,
            expyear,
            cvv,
        } = req.body;

        const check = await User.findOne({ email: emailorder })
        if (!check) {
            res.status(404).json({ notfound: 'Email not registered' });
        }
        else {
            const result = await User.updateOne({ email: emailorder }, {
                $push: {
                    orders: {
                        'productname': productname,
                        'fullname': fullname,
                        'emailorder': emailorder,
                        'address': address,
                        'city': city,
                        'state': state,
                        'pincode': pincode,
                        'nameoncard': nameoncard,
                        'cardnumber': cardnumber,
                        'expmonth': expmonth,
                        'expyear': expyear,
                        'cvv': cvv
                    }
                }
            })
            res.status(200).json({ message: 'order placed' });
        }


    } catch (error) {
        res.status(500).json({ error: 'An error occuring in placing the order.' });
    }
});


app.post('/Cart', async (req, res) => {
    try {
        let cartusername = req.body.temp;
        const result = await User.find({ username: cartusername }, { orders: 1, _id: 0 });
        // console.log(result);
        res.status(200).json(result[0].orders);
    } catch (error) {
        res.status(404).json('no record found');
    }
});



const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
