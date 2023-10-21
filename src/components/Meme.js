import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Meme() {
  const [allMemes, setAllMemes] = useState([]);

  const [memeData, setMemeData] = useState({
    topText: "",
    bottomText: "",
    url: "http://i.imgflip.com/1bij.jpg",
  });

  function generate(e) {
    e.preventDefault();
    let { data } = allMemes;
    const indx = Math.ceil(Math.random() * data.memes.length);
    setMemeData((prevData) => {
      return { ...prevData, url: data.memes[indx].url };
    });
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setMemeData((meme) => {
      return {
        ...meme,
        [name]: value,
      };
    });
  }

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get("https://api.imgflip.com/get_memes");
      setAllMemes(data.data);
    };
    fetchData();
  }, []);

  return (
    <main>
      <form className="form">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={memeData.topText}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={memeData.bottomText}
          onChange={handleChange}
          required={true}
        />
        <button className="form--button" onClick={generate} type="submit">
          Get a new meme image 🖼
        </button>
      </form>
      <div className="meme">
        <img src={memeData.url} className="meme--image" />
        <h2 className="meme--text top">{memeData.topText}</h2>
        <h2 className="meme--text bottom">{memeData.bottomText}</h2>
      </div>
    </main>
  );
}
