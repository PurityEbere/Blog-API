const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 6000;

app.use(bodyParser.json());

const route = {
  getAllPosts: (req, res) => {
    res.send('Get all posts');
  },
  getPostById: (req, res) => {
    res.send(`Get post with ID: ${req.params.postid}`);
  },
  createPost: (req, res) => {
    res.send('Create a new post');
  }
};

app.get('/', route.getAllPosts);
app.get('/:postid', route.getPostById);
app.post('/', route.createPost);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.export = router
