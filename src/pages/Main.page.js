import React, {useCallback, useEffect, useState} from 'react';
import {getBirds} from "../Services/Birds.service";
import SideComponent from "../components/Side.component";
import {birdsNormalizer} from "../Services/Birds.normalizer";
import style from "./Main.module.scss"
import DetailComponent from "../components/Detail.component";
import uniqBy from 'lodash/uniqBy'
import {useInView} from "react-intersection-observer";

const MainPage = () => {

    const [data, setData] = useState([])
    const [records, setRecords] = useState(20)
    const [selectedData, setSelectedData] = useState(undefined)
    const {ref, inView} = useInView();


    const handleGetBirds = useCallback(async (rec) => {
        try {
            const data = await getBirds(rec)
            const normalizedData = data?.items?.map(birdsNormalizer)
            setData(prevData => uniqBy([...prevData, ...normalizedData], 'name'))
        } catch {
            console.error("Something went wrong")
        }
    }, [])

    const selectBird = (name) => {
        throw new Error("THIS IS AN ERROR")
        const bird = data.find(d => d.name === name)
        setSelectedData(bird)
    }


    useEffect(() => {
        handleGetBirds(records)
    }, [handleGetBirds, records])

    useEffect(()=>{
        if(inView){
            setRecords(prevRec => prevRec + 20)
        }
    },[inView])

    return (
        <div className={style.wrapper}>
            {/* eslint-disable-next-line no-undef */}
            <div className={style.side}><SideComponent data={data} onClick={selectBirdError} selectedId={selectedData?.name}/>
                {data.length && <div ref={ref} className={style.loading}>loading</div>}
            </div>
            <div className={style.detail}>{selectedData &&
            <DetailComponent image={selectedData?.image} sound={selectedData?.sound} lat={selectedData?.lat}
                             lng={selectedData?.lng} text={selectedData?.name}
            />}</div>
        </div>
    );
};

export default MainPage;