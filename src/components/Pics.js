import React from "react";
import './piclist.css';
import ImageCard from './ImageCard';


const pics=(props)=>{
    const a = props.images.map((pic)=>{
        return <ImageCard key={pic.id} image={pic}/>  
    });
    return <div className='piclist'>{a}</div>
};

export default pics;