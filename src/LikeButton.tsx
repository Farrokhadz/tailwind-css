import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button
      onClick={() => setLiked(!liked)}
      className="flex items-center gap-2 cursor-pointer"
    >
      {liked ? (
        <AiFillHeart className="text-[#ff6b81] text-3xl transition" />
      ) : (
        <AiOutlineHeart className="text-3xl transition" />
      )}
    </button>
  );
}

export default LikeButton;
