// import React, { useEffect, useState } from 'react'
import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import { getGifs } from '../helpers/getGifs'
import { GifGridItem } from './GifGridItem';


// export const GifGrid = ({category}) => {

//     const getGifs = async() =>{
//         const url = 'https://api.giphy.com/v1/gifs/search?q=cheeseburgers&limit=10&api_key=pbro3Wn5yeSBQJXUThYcSymeXn1hUQvW';
//         const resp = await fetch(url);
//         // const data = await resp.json();
//         // Todo lo anterior es puro javascript
//         //cupamos desestructurar lo siguien para que  sólo nos traiga las imagenes 
//         const {data} = await resp.json();

//        // vamos a recorrer cada una de las imagenes/ poniendole un nombre al objeto puede ser cualquiera en este caso imgs 
//        const gifs = data.map(imgs =>{
//            return{
//                id: imgs.id,
//                title: imgs.title,
//             //    url: imgs.images.downsized_medium.url
//             // por si no están tdas las imagenes agregar b?
//                url: imgs.images?.downsized_medium.url
//            }
//        })

//         // console.table(data);
//         console.table(gifs);

//     }

//     getGifs();
//     return (
//         <>
//             <h3>{category}</h3>
//         </>
//     )
// }


//______________________________________________________________________________-

// USO DE useEffect 

// export const GifGrid = ({ category }) => {


//     const [count, setCount] = useState(0);
//     useEffect(() => {
//         getGifs();
//         //luego hay que enviarle un arreglo de dependecias depsues de }
//         // es decir solo quiero que se ejecute la función cuando es ejecutado por primera ves y no lo repkita 
//     }, [])
//     const getGifs = async () => {
//         const url = 'https://api.giphy.com/v1/gifs/search?q=cheeseburgers&limit=10&api_key=pbro3Wn5yeSBQJXUThYcSymeXn1hUQvW';
//         const resp = await fetch(url);

//         const { data } = await resp.json();

//         const gifs = data.map(imgs => {
//             return {
//                 id: imgs.id,
//                 title: imgs.title,
//                 url: imgs.images?.downsized_medium.url
//             }
//         })


//         console.log(gifs);

//     }

//     // getGifs();
//     return (
//         <>
//             <h3>{category}</h3>
//             <h3>{count}</h3>
//             <button onClick={()=> setCount(count + 1)}>Aumentar</button>
//         </>
//     )
// }


//__________________________________________________________________________

// export const GifGrid = ({ category }) => {

//     const [images, setImages] = useState([])
    
//     useEffect(() => {
//         getGifs();
//         //luego hay que enviarle un arreglo de dependecias depsues de }
//         // es decir solo quiero que se ejecute la función cuando es ejecutado por primera ves y no lo repkita 
//     }, [])
//     const getGifs = async () => {
//         const url = 'https://api.giphy.com/v1/gifs/search?q=cheeseburgers&limit=10&api_key=pbro3Wn5yeSBQJXUThYcSymeXn1hUQvW';
//         const resp = await fetch(url);

//         const { data } = await resp.json();

//         const gifs = data.map(imgs => {
//             return {
//                 id: imgs.id,
//                 title: imgs.title,
//                 url: imgs.images?.downsized_medium.url
//             }
//         })


//         console.log(gifs);
//         //El nuevo estado será los gifs que estoy recibiendo 
//         setImages(gifs);

//     }

//     // getGifs();
//     return (
//         <>
//             <h3>{category}</h3>
//              <ol>
//                  {/* <li>item</li> */}
//                  {/* vamos a usar una expresion de javascript, images viene de la linea 86 usando el useState  */}
//                  {
//                     //  cuando no tenemos las llaves estamos haciendo un return implicito 
//                     //  images.map( img =>(
                          
//                     //  <li key={img.id}>{img.title}</li>
//                     //  ))
//                       //_______________________________________
//                      //La forma desestructurada
//                      images.map( ({id,title}) =>(
                          
//                         <li key={id}>{title}</li>
//                         ))
//                  }
//              </ol>
//         </>
//     )
// }


//________________________________________________________________________________________

// export const GifGrid = ({ category }) => {

//     const [images, setImages] = useState([])
    
//     useEffect(() => {
//         getGifs();
//         //luego hay que enviarle un arreglo de dependecias depsues de }
//         // es decir solo quiero que se ejecute la función cuando es ejecutado por primera ves y no lo repkita 
//     }, [])
//     const getGifs = async () => {
//         const url = 'https://api.giphy.com/v1/gifs/search?q=cheeseburgers&limit=10&api_key=pbro3Wn5yeSBQJXUThYcSymeXn1hUQvW';
//         const resp = await fetch(url);

//         const { data } = await resp.json();

//         const gifs = data.map(imgs => {
//             return {
//                 id: imgs.id,
//                 title: imgs.title,
//                 url: imgs.images?.downsized_medium.url
//             }
//         })


//         console.log(gifs);
//         //El nuevo estado será los gifs que estoy recibiendo 
//         setImages(gifs);

//     }

//     // getGifs();
//     return (
//         // usamos fraghment porque ya tenemos 2 objetos tanto el h3 como el div 
//         <>
//         <h3>{category}</h3>
//         <div className="card-grid">
          
             
                 
//                  {
                
//                      images.map( (img) =>(
//                           // neceitamos mandar la imagen 
//                         <GifGridItem 
//                         key={img.id}
//                         // img = {img}
//                         //usaremos el operador spread
//                         {...img}
//                         />
//                         ))
//                  }
            
//         </div>
//         </>
//     )
// }

//_________________________________________________________________________________________________________________


// export const GifGrid = ({ category }) => {

//     const [images, setImages] = useState([])
    
//     useEffect(() => {
//         getGifs();
//     }, [])
//     const getGifs = async () => {
//         const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI(category)}&limit=10&api_key=pbro3Wn5yeSBQJXUThYcSymeXn1hUQvW`;
//         const resp = await fetch(url);

//         const { data } = await resp.json();

//         const gifs = data.map(imgs => {
//             return {
//                 id: imgs.id,
//                 title: imgs.title,
//                 url: imgs.images?.downsized_medium.url
//             }
//         })
//         console.log(gifs);
//         setImages(gifs);

//     }

//     return (

//         <>
//         <h3>{category}</h3>
//         <div className="card-grid">

//                  {
                
//                      images.map( (img) =>(
//                           // neceitamos mandar la imagen 
//                         <GifGridItem 
//                         key={img.id}
//                         // img = {img}
//                         //usaremos el operador spread
//                         {...img}
//                         />
//                         ))
//                  }
            
//         </div>
//         </>
//     )
// }

// ___________________________________________ 
//usando helper

// export const GifGrid = ({ category }) => {

//     const [images, setImages] = useState([]);
    
//     useEffect(() => {
//         //lo siguiente retorna una promesa
//         getGifs(category)
//         // .then(imgs => setImages(imgs))
//         //tambien es lo mismo hacerlo así
//         .then(setImages);
//         //tuvimos una funcion que unicamente el imgs primero es mandado a la funcion que haby dentro de setImages 
//     }, [category])
  

//     return (

//         <>
//         <h3>{category}</h3>
//         <div className="card-grid">

//                  {
                
//                      images.map( (img) =>(
//                           // neceitamos mandar la imagen 
//                         <GifGridItem 
//                         key={img.id}
//                         // img = {img}
//                         //usaremos el operador spread
//                         {...img}
//                         />
//                         ))
//                  }
            
//         </div>
//         </>
//     )
// }
//________________________________________________________________________
// USO DE CUSTOM HOOK 

// export const GifGrid = ({ category }) => {

   
//     // const state = useFetchGifs();

//     // vamos a desestructurar el state 
      
//     const {data,loading} = useFetchGifs(category);
//     console.log(loading);
//     console.log(data);


  

//     return (

//         <>
//         <h3>{category}</h3>
//         {/* // si loading esta en true ? entonces se pone Cargando...' caso contrario : Data cargada */}
//         {loading ? 'Cargando...' : 'Data cargada'} 
//         </>
//     )
// }

//______________________________________________________________________________

export const GifGrid = ({ category }) => {


      
    // const {data,loading} = useFetchGifs(category);
    //  para que ese paramro no se llama data sino que images hay qie darle un nombre y se hace de la siguiente forma 
    const {data:images,loading} = useFetchGifs(category);

    return (

        <>
                <h3 className="card animate__animated animate__fadeInUp" >{category}</h3>
                {/* si esto es true loading  enronces evalua esto <p>Loading</p>} si el primero no es true entonces no hace nada */}
                {loading && <p>Loading</p>}
              <div className="card-grid">
        
                       {
                        
                            //  data.map( (img) =>(
                                images.map( (img) =>(
                           
                                <GifGridItem 
                                key={img.id}
                             
                                {...img}
                                />
                                ))
                         }
                    
                </div>
                </>
    )
}