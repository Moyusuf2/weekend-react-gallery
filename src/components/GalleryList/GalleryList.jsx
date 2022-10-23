import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({galleryList}){
    return (
        <>
        <div>
            {galleryList.map((galItem) =>(
                <GalleryItem 
                key= {galItem.id}
                galleryItems={galItem}/>
            )
            )}
        </div>
        </>
    );
}

export default GalleryList;