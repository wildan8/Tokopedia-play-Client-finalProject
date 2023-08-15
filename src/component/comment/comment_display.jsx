import React from "react";
import useTime from "../../Hooks/useTime";

export default function CommentDisplay({ username, replyComment, time }) {
  const settingTime = useTime(time);
  return (
    <>
      <div className="flex items-center  p-2 border-y border-opacity-10">
        <div className="m-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="{1.5}"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <div>
          <div>
            <h1 className="text-xs">{settingTime}</h1>
            <h1 className="font-semibold text-sm">{username}</h1>
          </div>
          <div>
            <p className=" text-sm">{replyComment}</p>
          </div>
        </div>
      </div>
    </>
  );
}
