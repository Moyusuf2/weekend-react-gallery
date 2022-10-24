import { useState } from "react";
function GalleryItem({ galleryItems, likes }) {
  const [display, setDisplay] = useState(true);
  console.log("in GalleryItem");

  const onLike = (evt) => {
    evt.preventDefault();
    //current likes
    likes(galleryItems);
  };
  const changeDisplay = (evt) => {
    evt.preventDefault();
    //set display to equal description and vice versa
    setDisplay(!display);
  };

  return (
    <div key={galleryItems.id} className="container">
      <div className="picture">
        {display === true && (
          <img
            src={galleryItems.path}
            alt="pic of goat"
            onClick={changeDisplay}
          />
        )}
        {display === false && (
          <p onClick={changeDisplay}>{galleryItems.description}</p>
        )}
      </div>
      <div className="likes">
        <button onClick={onLike}>Love it!</button>
      </div>
      {
        galleryItems.likes === 0?
            <div> No likes </div>
            :
      
            <h4>{galleryItems.likes} people love this</h4>
      }
    </div>
  );
}

export default GalleryItem;
