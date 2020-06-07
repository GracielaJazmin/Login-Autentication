const {Router} = require('express')
const router = Router();

const jwt = require('jsonwebtoken')

const Users = require('../models/user')

router.get('/', (req, res) => res.send('Hello World!'))

router.post('/signup', async (req, res) =>{
    const {user, password} = req.body;
    const newUser = new Users({user, password});
    await newUser.save();
    
    const token = jwt.sign({_id: newUser._id}, 'SecretKey');
    res.status(200).json({token})
});

router.post('/signin', async (req, res) => {
    const{ user, password} = req.body;
    const usuario = await Users.findOne({user})
    if(!usuario) return res.status(401).send("This user doesn't exist");
    if(usuario.password !== password) return res.status(401).send("Wrong password");

    const token = jwt.sign({_id: usuario._id}, 'SecretKey')
    return res.status(200).json({token});
})

router.get('/accountant', veryfyToken, (req, res) =>{
    res.json([
        {
            _id:1,
            name:'Items',
            description:'losddlñlsdldxs',
            date:"2020-06-05 02:52"
        },
        {
            _id:2,
            name:'Items 2',
            description:'losddlñlsdldxs',
            date:"2020-06-05 02:52"
        },
        {
            _id:3,
            name:'Items 3',
            description:'losddlñlsdldxs',
            date:"2020-06-05 02:52"
        },

    ])
})


module.exports = router;

function veryfyToken(req, res, next){
    if(!req.headers.authorization){ 
        return res.status(401).send('Unauthorize Request');
    }

    const token = req.headers.authorization.split(' ')[1]
    if(token === 'null'){
        return res.status(401).send('Unauthorize Request');
    }

   const payload =  jwt.verify(token, 'SecretKey')
   req.userId = payload._id;
   next();



}