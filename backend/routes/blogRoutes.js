import express from 'express';
import Blog from '../models/blogmodel.js';

const router = express.Router();

//CREATE A NEW BLOG

router.post('/',async(req,res)=>{
    try {
        const {title,content,author,image} = req.body;
        const newBlog = new Blog({title,content,author,image});
        await newBlog.save()
        res.status(201).json(newBlog)
    } catch (error) {
        res.status(500).json({error:error.message})
    }
})

// Get all blogs
router.get('/', async (req, res) => {
    try {
      const blogs = await Blog.find().sort({ createdAt: -1 });
      res.status(200).json(blogs);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


// Get a single blog by ID
router.get('/:id', async (req, res) => {
    try {
      const blog = await Blog.findById(req.params.id);
      if (!blog) return res.status(404).json({ message: 'Blog not found' });
      res.status(200).json(blog);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Update a blog by ID
router.put('/:id', async (req, res) => {
    try {
      const { title, content, author, image } = req.body; // Include image field
      const updatedBlog = await Blog.findByIdAndUpdate(
        req.params.id,
        { title, content, author, image },
        { new: true } // Return the updated document
      );
      if (!updatedBlog) return res.status(404).json({ message: 'Blog not found' });
      res.status(200).json(updatedBlog);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


  // Delete a blog by ID
router.delete('/:id', async (req, res) => {
    try {
      const blog = await Blog.findByIdAndDelete(req.params.id);
      if (!blog) return res.status(404).json({ message: 'Blog not found' });
      res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });


export default router