function GalleryItem({galleryItems,likes}){

    console.log('in GalleryItem');

    const onLike = (evt) =>{
        evt.preventDefault();
        
        likes(galleryItems)

    }

    const changeDisplay = (evt =>{

    })
    return(
        <div className="container">
            <h2>
                <img src={galleryItems.path} alt="pic of goat" onClick={changeDisplay}/>
            </h2>
            <h4>
                {galleryItems.likes}
            </h4>
            <button onClick={onLike}>Love it!</button>
            
            
        </div>
    );

}
{/* <img src={galleryItems.path}/> */}

export default GalleryItem;