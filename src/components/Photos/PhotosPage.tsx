import React, { useEffect, useState, FC } from 'react';
import axios from "axios";
import List from '../../components/List';
import { Photo } from "../../types/todo";
import PhotosItem from './PhotosItem';



const PhotosPage: FC = () => {
    const [photos, setPhotos] = useState<Photo[]>([]);

    const fetchPhotos = async () => {
        try {
            const response = await axios.get<Photo[]>("https://jsonplaceholder.typicode.com/photos?_limit=5");
            setPhotos(response.data);
        } catch (e) {
            alert(e)
        }
    }

    useEffect(() => {
        fetchPhotos();
    }, [])


    return (
        <List items={photos} renderItem={(photo: Photo) => <PhotosItem photo={photo} key={photo.id} />} />
    );
};

export default PhotosPage;

