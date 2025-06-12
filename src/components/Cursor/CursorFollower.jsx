// src/components/CursorFollower.jsx
import React, { useEffect, useRef } from "react";
import "./CursorFollower.css";

const CursorFollower = () => {
  const followerRef = useRef(null);

  useEffect(() => {
    const follower = followerRef.current;

    const moveCursor = (e) => {
      const { clientX: x, clientY: y } = e;

      follower.style.transform = `translate(${x}px, ${y}px)`;
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return <div className="cursor-follower" ref={followerRef}></div>;
};

export default CursorFollower;
