// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

// eslint-disable-next-line react/prop-types
const PostForm = ({ setPosts, posts }) => {
  console.log("posts ==> ", posts);

  const createPost = (e) => {
    e.preventDefault();

    if (!e.target.title.value) return alert("title not found");
    if (!e.target.image.value) return alert("image not found");
   

    const userLocalStorage = JSON.parse(localStorage.getItem("users"));


    const data = {
      avatar: userLocalStorage.avatar,
      creator: userLocalStorage.name,
      title: e.target.title.value,
      image: e.target.image.value,
      likes: 2,
    };

    setPosts([data, ...posts]);
    e.target.reset();
  };
  return (
    <div className="mt-10">
      <h2>Create Post</h2>
      <form onSubmit={createPost} className="flex gap-4 flex-col">
      
        <div className="flex gap-3 w-full">
          <label className="w-20" htmlFor="title">
            title
          </label>
          <textarea
            id="title"
            className="border w-full"
            placeholder="What's on your mind?"
            rows={4}
            name="title"
          />
        </div>

        <div className="flex gap-3 w-full ">
          <label className="w-20" htmlFor="image">
            image
          </label>
          <input
            className="border w-full"
            type="text"
            id="image"
            name="image"
          />
        </div>

        <button className="border  p-2 w-40" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default PostForm;
