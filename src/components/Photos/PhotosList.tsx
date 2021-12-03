import React, { FC } from 'react';
import { Photo } from "../../types/todo";
import PhotosItem from "./PhotosItem";

interface PhotosListProps {
    photos: Photo[];   
}

const PhotosList: FC<PhotosListProps> = ({ photos }) => {
    return (
        <div>
            {photos.map((photo) =>  <PhotosItem key={photo.id} photo={photo} />)}
        </div>
    );
};

export default PhotosList;