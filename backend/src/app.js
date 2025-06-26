const express = require('express');
const app = express();
const cors = require('cors');
const Blog = require("./models/post.models.js");
require('dotenv').config();

const connectDB = require('./db/index.js');

connectDB()
.then(() =>{
    app.listen(process.env.PORT,()=>{console.log(`Server working on port ${process.env.PORT}`);});
})
.catch((err)=>{
    console.log("MONGODB CONNECTION FAILED Error : ",err);
})
app.use(express.json({limit:"16KB"}));
app.use(express.urlencoded({extended:true,limit:"16KB"}))
app.use(cors());
const authRoutes = require('./routes/auth.routes.js');
const blogRoutes = require('./routes/blog.routes.js');

app.use('/auth',authRoutes);
app.use('/blogs',blogRoutes);
app.get('/',async (req,res) => {
    const blogs = await Blog.find().populate("author", "name email");
  res.json(blogs);
})

