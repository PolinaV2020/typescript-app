import React, { useEffect, useState } from 'react';
import axios from "axios";
import UserList from "./components/UserList";
import PhotosList from './components/Photos/PhotosList';
import Card, { CardVariants } from "./components/Card";
import { Photo } from "./types/todo";


const App = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);

  const fetchPhotos = async () => {
    try {
      const response = await axios.get<Photo[]>("https://jsonplaceholder.typicode.com/photos");
      setPhotos(response.data);
    } catch (e) {
      alert(e)
    }
  }

  useEffect(() => {
    fetchPhotos();
  },[])


  return (
    <div>
      <UserList />
      <Card width="200px" height="200px" variant={CardVariants.outlined}>
        <button>Button</button>
      </Card>
      <PhotosList photos={photos} />
    </div>
  );
};

export default App;

