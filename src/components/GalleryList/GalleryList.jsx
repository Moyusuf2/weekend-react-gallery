import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList,likes}){
    return (
        <>
        <div>
            {galleryList.map((galItem) =>(
                <GalleryItem 
                key= {galItem.id}
                galleryItems={galItem}
                likes={likes} />
            )
            )}
        </div>
        </>
    );
}

export default GalleryList;