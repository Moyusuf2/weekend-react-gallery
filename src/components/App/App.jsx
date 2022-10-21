import React, { useEffect } from 'react';
import './App.css';
import GalleryItem from '../GalleryItem/GalleryItem';
import GalleryList from '../GalleryList/GalleryList';
import axios from 'axios';
import { response } from 'express';

function App() {

  useEffect( ()=>{
    getGalleryList();
  },[])

  function getGalleryList(){
    console.log('in getGalleryList')
      axios({
        method: 'GET',
        url: '/gallery'
      })
      .then((response) =>{
        console.log('/GET response', response.data)
        // put data into state
        GalleryList(response.data)
      })
      .catch((error) =>{
        console.log('error in /GET',error)
      })
  }

    return (
      <div className="App">
        <GalleryList />
        <GalleryItem />
        </div>
    );
}

export default App;
