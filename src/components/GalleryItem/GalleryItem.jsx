function GalleryItem(){

    const onLike = () =>{

    }
    return(
        <>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
        <button className="likeBtn" onClick={onLike}>Love it!</button>
        <img src="images/goat_small.jpg"/>
        <button className="likeBtn" onClick={onLike}>Love it!</button>
        <img src="images/goat_small.jpg"/>
        <button className="likeBtn" onClick={onLike}>Love it!</button>
        <img src="images/goat_small.jpg"/>
        <button className="likeBtn" onClick={onLike}>Love it!</button>
        <img src="images/goat_small.jpg"/>
        <button className="likeBtn" onClick={onLike}>Love it!</button>
        <img src="images/goat_small.jpg"/>
        <button className="likeBtn" onClick={onLike}>Love it!</button>

        </>
    )
}

export default GalleryItem