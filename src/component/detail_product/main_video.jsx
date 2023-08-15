import React from "react";
import Header from "./header";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MainVideo() {
  const params = useParams();
  const [thumbs, setThumbs] = useState([]);

  async function fetchData() {
    try {
      const response = await fetch(`/thumbnail/${params.thumbsID}`);
      const json = await response.json();
      return json;
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    fetchData().then((data) => setThumbs(data));
  }, []);

  return (
    <>
      <div className="p-2">
        <Header />
        {thumbs.map((t) => (
          <div key={t._id}>
            <iframe
              width="100%"
              height="400"
              src={t.videoURL}
              title={t.name}
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
            <h1 className="mt-5 font-semibold text-xl">{t.name}</h1>
          </div>
        ))}
      </div>
    </>
  );
}
