import React from "react";


export default function Meme() {
  /*state for meme text and image
  *It is necessary to manage the meme data and update it dynamically based on user input API response*/
const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg" 
});

/*state for all memes data
*storing all meme data allows us to randomly select a meme image for the user*/
  const [allMemes, setAllMemes] = React.useState([]);
/*useEffect hook to fetch memes data once on component mount.
*`useEffect` is used here to ensure the meme data is fetched only once, similar to componentDidMount in class components. The empty dependency array ([]) ensures it runs only once.*/
  React.useEffect(() => {
    async function getMemes() {
    const res = await fetch("https://api.imgflip.com/get_memes")
    const data = await res.json()
    setAllMemes(data.data.memes)
  }
  getMemes()
}, [])
  /*function to get a random meme image.
  *Provides the functionality to change the meme image to a random one from the fetched memes, enhancing user interaction.*/
  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
  }))

  }
// function to handle text input changes
  function handleChange(event) {
    const {name, value} = event.target 
    setMeme(prevMeme => ({
      ...prevMeme,
      [name]: value
  }))
  }


  return (
    <main>
      <div className="form">
     <input
            type="text"
            placeholder="Top Text"
            className="form--input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        <input
              type="text"
              placeholder="Bottom text"
              className="form--input"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
            />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme container">
      <img src={meme.randomImage}className="meme--image" />
      <h2 className="meme--text top">{meme.topText}</h2>
      <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}
