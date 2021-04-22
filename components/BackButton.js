import React from "react";
import { useRouter } from "next/router";
const BackButton = () => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };

  return (
    <button type="button" onClick={handleClick}>
      <style jsx>{`
        padding: 5px 8px;
        width: 100px;
        background: #5074d0;
        color: white;
        font-weight: bold;
        font-size: 15px;
        border: none;
        margin: 15px 0;
        cursor:pointer;
      `}</style>
      Back
    </button>
  );
};

export default BackButton;
