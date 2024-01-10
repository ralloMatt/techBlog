const router = require('express').Router();


router.get('/', async (req, res) => {
   
    
    res.render('homepage');
  
});

router.get('/dashboard', (req, res) => {
  
    res.render('dashboard');
});



router.get('/login', (req, res) => {
  
    res.render('login');
});


module.exports = router;