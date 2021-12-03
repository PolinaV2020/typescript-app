import React, { FC, useState } from 'react';

export enum CardVariants {
    outlined = "outlined",
    primary = "primary"
}
interface CardProps {
    width?: string;
    height?: string;
    variant?: CardVariants;
    onClick?: (num: number) => void;
}

const Card: FC<CardProps>= ({ width, height, variant, children, onClick }) => {
    return (
        <div style={{ 
            width, height, 
            background: variant === CardVariants.primary ? "purple": "none" ,
            border: variant === CardVariants.outlined ? "4px solid purple": "none" }}>
            {children}
        </div>
    );
};

export default Card;