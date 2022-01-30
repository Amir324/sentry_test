import React from 'react';
import styles from './Image.module.scss'

const ImageComponent = ({src}) => {
    return (
        <img src={src} className={styles.wrapper}/>
    );
};

export default ImageComponent;