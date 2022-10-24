import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, likes }) {
  console.log("in GalleryList");
  return (
    <>
      <div>
        {/* loop through GalleryList */}
        {galleryList.map((galItem) => (
          <GalleryItem
            // photo id
            key={galItem.id}
            //actual photo
            galleryItems={galItem}
            //number of likes
            likes={likes}
          />
        ))}
      </div>
    </>
  );
}

export default GalleryList;
