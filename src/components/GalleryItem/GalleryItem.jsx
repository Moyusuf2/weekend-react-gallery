import { useState } from 'react'
function GalleryItem({galleryItems,likes}){
    const [display, setDisplay] = useState(true)
    console.log('in GalleryItem');

    const onLike = (evt) =>{
        evt.preventDefault();

        likes(galleryItems)

    }
    const changeDisplay = ((evt) =>{
        evt.preventDefault();
        setDisplay(!display)
    })

    return(

        <div key={galleryItems.id} className="container">
            <div className="picture" >
                {display === true &&
                <img src={galleryItems.path} alt="pic of goat" 
                onClick={changeDisplay}/>
                }
                {display === false &&
                        <p onClick={changeDisplay}>{galleryItems.description}</p>}
                </div>
                <div className='likes'>
                <button onClick={onLike}>Love it!</button>
                </div>
            <h4>
                {galleryItems.likes} love this
            </h4>
            
        </div>
    );

}


export default GalleryItem;