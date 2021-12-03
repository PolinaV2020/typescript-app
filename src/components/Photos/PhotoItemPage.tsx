import React, {FC, useState, useEffect} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";
import { Photo } from "../../types/todo";

interface PhotoItemPageParams {
   id: string;
}

const PhotoItemPage: FC = () => {
    const [photo, setPhoto] = useState<Photo | null>(null);

    const params = useParams();

    async function fetchPhoto () {
        try {
            const response = await axios.get<Photo>("https://jsonplaceholder.typicode.com/photos/" + params.id);
            setPhoto(response.data);
        } catch (e) {
            alert(e)
        }
    }


    useEffect(() => {
        fetchPhoto();
    }, [])

    return (
        <div>
            {photo?.title}   
            <img src={photo?.url}></img>
        </div>
    );
};

export default PhotoItemPage;