import React from 'react';
import ImageComponent from "./Image.component";
import Map from "./Map.component";
import styles from './Detail.module.scss'

const DetailComponent = ({image, sound, lat, lng, text}) => {
    return (
        <div className={styles.wrapper}>
            <h3>{text}</h3>
            <div><ImageComponent src={image}/></div>
            <div className={styles.audio}>
                <audio controls src={sound}/>
            </div>
            <div className={styles.map}><Map lat={lat} lng={lng} text={text}/></div>
        </div>
    );
};

export default DetailComponent;