

/* Acts as the main container for the header elements.
* Using a `header` tag semantically indicates that this section is the header of the page or section.*/
export default function Header() {
  return (
    <header className="header">
      <img src="./src/images/trollface.png" alt="trollface-logo" className="header--image" />
      <h2 className="header--title">Meme Generator</h2>
      <h4 className="header--project">React Course - DJS07</h4>
    </header>
  )
}
