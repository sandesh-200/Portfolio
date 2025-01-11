import mongoose from 'mongoose';
const BlogSchema = new mongoose.Schema({
    title:{type:String,required:true},
    content: { type: String, required: true },
  author: { type: String, default: 'Anonymous' },
  createdAt: { type: Date, default: Date.now },
  image: { type: String, default: null }
})

const Blog = mongoose.model('Blog',BlogSchema);

export default Blog;