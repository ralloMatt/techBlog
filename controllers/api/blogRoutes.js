const router = require('express').Router();
const { Blog } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => { // POST route to create a blog
    try {
      const newBlog = await Blog.create({ // Create it
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newBlog);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => { // DELETE route to delete a blog
    try {
      const blogData = await Blog.destroy({ // Destroy (delete) it
        where: {
          id: req.params.id,
          user_id: req.session.user_id, // user id should be in session
        },
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No project found with this id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  
  module.exports = router;