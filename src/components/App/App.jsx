import React,{ useEffect, useState } from 'react';
import './App.css';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';

function App() {
  const [galleryList, setGalleryList] = useState([]);
  const [likes,setLikes] = useState()

  console.log('in  App');
  useEffect( ()=>{
    //fetch gallery on page load
    console.log('in UseEffect');
    getGalleryList();

  },[])

  const getGalleryList= () =>{
    console.log('in getGalleryList');
      axios({
        method: 'GET',
        url: '/gallery'
      })
      .then((response) =>{
        console.log('/GET response', response.data);
        // put data into state
        setGalleryList(response.data);
      })
      .catch((error) =>{
        console.log('error in /GET',error)
      });
  }

  const newLikes = ((galItem) =>{
    axios({
      method:'PUT',
      url: `/gallery/like/${galItem.id}`
    })
    .then((response) =>{
      console.log('new Like',response.data)
      getGalleryList(response.data)
    })
    .catch((error) =>{
      console.log('error in newLike /PUT',error)
    })
  })

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">My favorite Anime shows </h1>
        </header>
        <GalleryList galleryList={galleryList}
        likes={newLikes}/>
        </div>
    );
}

export default App;
