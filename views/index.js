const express = require('express');
const router = express.Router();
const route = require('../controllers/route');
const express = require('express');
const bodyParser = require('body-parser');
const blogRoutes = require('./views/index');

const app = express();
const PORT = 6000;


app.use(bodyParser.json());


app.use('/', blogRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


router.get('/', route.getAllPosts);
router.get('/:postid', route.getPostById);
router.post('/', route.createPost);

module.exports = router;
