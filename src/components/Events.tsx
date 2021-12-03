import React, { FC, useState } from 'react';

const Events: FC = () => {
    const [value, setValue] = useState<string>("");
    const [isDrag, setIsDrag] = useState<boolean>(false);

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        alert(value)
    }

    const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {

    }

    const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(true)
    }

    const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }

    const onDropHandler = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDrag(false)
    }

    return (
        <div>
            <input value={value} onChange={changeHandler} type="text"></input>
            <button onClick={clickHandler}>Done!</button>
            <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: "#FF6B6B"}}></div>
            <div 
            onDrop={onDropHandler} 
            onDragLeave={leaveHandler} 
            onDragOver={dragWithPreventHandler} 
            style={{width: 200, height: 200, background: isDrag ? "#EAB536" : "#D4FF00" , marginTop: 10}}></div>
        </div>
    );
};

export default Events;