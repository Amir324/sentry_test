import React from 'react';
import ThumbnailComponent from "./Thumbnail.component";
import style from './Side.module.scss'

const SideComponent = ({data, onClick, selectedId}) => {
    return (
        <>
            {data.map(d => {
                return <div key={d.name} className={style.item} onClick={() => onClick(d.name)}><ThumbnailComponent selectedId={selectedId} image={d.image}
                                                                                                   name={d.name}/></div>
            })}
        </>
    );
};

export default SideComponent;