import Post from '../../../models/Post';
import User from '../../../models/User';

export default {
  Post: {
    author: post => User.findById(post.author),
  },
  Query: {
    posts: () => Post.find(),
    post: (_, { id }) => Post.findById(id),
  },
  Mutation: {
    createPost: (_, { data }) => {
      const post = Post.create(data);

      return post;
    },
    updatePost: (_, { id, data }) =>
      Post.findOneAndUpdate(id, data, { new: true }),
    deletePost: async (_, { id }) => {
      const deleted = await Post.findOneAndDelete(id);

      return !!deleted;
    },
  },
};
