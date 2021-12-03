import React, { FC } from 'react';
import { Photo } from "../../types/todo";

interface PhotosItemProps {
    photo: Photo;
}

const PhotosItem: FC<PhotosItemProps> = ({ photo }) => {
    return (
        <div>
            <div>{photo.id}</div>
            <div>{photo.title}</div>
            <img src={photo.thumbnailUrl} alt=""></img>
        </div>
    );
};

export default PhotosItem;