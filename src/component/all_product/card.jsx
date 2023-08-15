import React from "react";
import { Link } from "react-router-dom";

export default function Card({ id, name = "N/a", thumbs = "N/a" }) {
  return (
    <div
      key={id}
      className="bg-darkTokPed relative hover:scale-105 transition duration-300 ease-in-out "
    >
      <Link to={`/product-detail/${id}`}>
        <img
          className="object-cover w-full aspect-[9/16] rounded-lg"
          src={require("../../images/" + thumbs + ".jpeg")}
        ></img>
        <div className="absolute bottom-0 px-2 py-3 bg-gray-500/50 w-full text-white text-xs font-bold bg-darkTokPed  bg-opacity-50 ">
          <div className="pl-1 pt-2">
            <h1 className="font-bold text-sm">{name}</h1>
            <h1 className="font-normal opacity-80">{thumbs}</h1>
          </div>
        </div>
      </Link>
    </div>
  );
}
