// eslint-disable-next-line no-unused-vars

import Post from "../Post";

const Posts = ({ posts }) => {
  return posts.map((item, index) => (
    <Post key={index} {...item} index={index} />
  ));
};

export default Posts;
