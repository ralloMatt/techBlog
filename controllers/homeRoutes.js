const router = require('express').Router();
const { User, Blog, Comment } = require('../models');

router.get('/', async (req, res) => {
   
    try {
        // Get all Blog posts and also User names
        const blogData = await Blog.findAll({
            include: [
                {
                    model: User,
                    attributes: ['name'], // just want the name
                },
            ],
        });

        // Serialize data so template can read it
        const blogs = blogData.map((blog) => blog.get({ plain: true }));

        // send that data to the template
        res.render('homepage', {
            blogs,
            logged_in: req.session.logged_in
        });
    } catch (err){
        res.json(500).json(err);
    }
});

router.get('/blog/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ['name'],
          },
        ],
      });
  
      const blog = blogData.get({ plain: true });
  
      res.render('blog', {
        ...blog,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
});


router.get('/dashboard', (req, res) => {
  
    res.render('dashboard');
});



router.get('/login', (req, res) => {
    if (req.session.logged_in) { // if we are logged in, send user to dashboard
        res.redirect('/dashboard');
        return;
    }

    res.render('login');
});


module.exports = router;