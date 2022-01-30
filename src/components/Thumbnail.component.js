import React from 'react';
import ImageComponent from "./Image.component";
import style from './Thumbnail.module.scss'
import clsx from "clsx";

const ThumbnailComponent = ({image, name, selectedId}) => {
    return (
        <div className={clsx({[style.wrapper]: true, [style.shadow]: selectedId === name})}>
            <ImageComponent src={image} />
            <span className={style.name}>{name}</span>
        </div>
    );
};

export default ThumbnailComponent;