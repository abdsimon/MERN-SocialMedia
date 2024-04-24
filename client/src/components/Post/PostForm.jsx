// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to create a new post
      const response = await axios.post("/api/posts", { text });
      console.log("Post created:", response.data);
     
      setText("");
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What's on your mind?"
          rows={4}
          cols={50}
        />
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default PostForm;
