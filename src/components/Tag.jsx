import React from 'react'
import axios from 'axios';
import { useState,useEffect } from 'react';
import Spinner from './Spinner';
import useGif from '../hooks/useGif';

const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;

function Tag() {
    const[tag,setTag]=useState('car');

    // const[gif,setGif]=useState('');
    // const[loading,setLoading]=useState(true);
    

    // async function fetchData() {
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
    //     const {data} = await axios.get(url);
    //     const imageSource= data.data.images.downsized_large.url;
    //     setGif(imageSource);
    //     setLoading(false);
    // }

    // useEffect (
    //     ()=>{
    //         fetchData();
    //     },[]
    // )


    const{gif,loading,fetchData}=useGif(tag);

    


  return (
    <div className='w-1/2 bg-blue-600 rounded-lg border border-black flex flex-col gap-y-5 items-center mt-[15px]'>
        <h1 className='text-2xl underline uppercase font-bold'>Random GIF</h1>
        {
            loading ? (<Spinner/>) : (<img src={gif} width={450}></img>)
        }
        
        <input
        onChange={(event)=>setTag(event.target.value)}
        className='w-10/12 text-lg rounded-lg'
        value={tag}
        />
        <button onClick={()=>fetchData(tag)}
        className='w-10/12 bg-yellow-500 text-lg rounded-lg'>
            Generate
        </button>
    </div>
  )
}

export default Tag