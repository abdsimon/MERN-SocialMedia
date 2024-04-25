// eslint-disable-next-line no-unused-vars
import React from "react";

import { ThumbsUp, MessageCircle } from "lucide-react";

// eslint-disable-next-line no-unused-vars, react/prop-types
export default function Post({ avatar, index, likes, title, creator, image }) {

    const likeHandler=()=>{
        alert(`Post index is: ${index}`)
    }
  return (
    <div className="border h-60 mt-5 p-4">
      <div className="flex gap-3 items-center ">
        <img className="w-7" src={avatar} alt="" />
        <div className="font-bold">{creator}</div>
      </div>

      <div>
        <p>{title}</p>

        <img className="w-full h-32  object-cover" src={image} alt="" />
      </div>

      <div className="flex gap-3 mt-2">
        <div className="relative ">
          <span className="absolute flex justify-center items-center rounded-full -top-2 -right-2 bg-blue-300 w-4 h-4">
            {likes}
          </span>
          <ThumbsUp onClick={likeHandler}/>
        </div>
        <MessageCircle />
      </div>
    </div>
  );
}
