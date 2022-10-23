import React,{useState} from 'react';
function GalleryItem({galleryItems,likes}){

    console.log('in GalleryItem');

    const onLike = (evt) =>{
        evt.preventDefault();

        likes(galleryItems)

    const changeDisplay = (evt =>{
        const [displayPic, setDisplay] = useState(true)
        setDisplay(!displayPic)
    })

    }

    return(
        <div className="container">
            <div key={galleryItems.id} className="row">

                {displayPic ?

                <div className="picture">
                    <img src={galleryItems.path} alt="pic of goat"  onClick= {() => changeDisplay(galleryItems.id)}/>
                             <button onClick={onLike}>Love it!</button>
                        <h4>
                            {galleryItems.likes} love this
                        </h4>
                </div>
            :
            <div className="comment">
                <p className="description" onClick= {() => changeDisplay(galleryItems.id)}> {galleryItems.description}</p>
                <button onClick={onLike}>Love it!</button>
            <h4>
                {galleryItems.likes} love this
            </h4>
            </div>
            }
            </div>
        </div>
    );

}
{/* <div className="picture">
                    <img src={galleryItems.path} alt="pic of goat" 
                    onClick={changeDisplay}/>
                    <button onClick={onLike}>Love it!</button>
                        <h4>
                            {galleryItems.likes} love this
                        </h4>
                </div> */}


export default GalleryItem;