import { useEffect, useState } from "react"
import {getGifs} from '../helpers/getGifs'

// ESTO ES UN CUSTOM HOOK 

// export const useFetchGifs = () => {
//    const [state, setstate] = useState({
//          data:[],
//          loading:true

//    });

//    return state; // {data:[], loading: true};
// }


export const useFetchGifs = (category) => {
    const [state, setState] = useState({
          data:[],
          loading:true
 
    });
    
    useEffect(() =>{
         getGifs(category)
         .then (imgs =>{

            setTimeout(() => {
                setState({
                    data: imgs,
                    loading:false
                });
            }, 3000);

             
         })
    },[category])


  
 
    return state; // {data:[], loading: true};
 }
 