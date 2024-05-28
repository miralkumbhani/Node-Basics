const Post = require("../models/post");

exports.getPosts = (request, response) => {
  const postRes = Post.find()
    .select("_id title body")
    .then((posts) => {
      return response.json({ posts: postRes });
    })
    .catch((error) => console.log("Error: ", error));
};

exports.createPost = (request, response) => {
  const post = new Post(request.body);
  console.log("creating post: ", request.body);
  post.save().then((res) => {
    return response?.json({
      post: res,
    });
  });
};
