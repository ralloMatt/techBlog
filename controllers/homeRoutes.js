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
            blogs
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
        ...blog
      });
    } catch (err) {
      res.status(500).json(err);
    }
});


router.get('/dashboard', (req, res) => {
  
    res.render('dashboard');
});



router.get('/login', (req, res) => {
  
    res.render('login');
});


module.exports = router;