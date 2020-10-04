import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

// si pone el export aqui significa que lleva llaves en el indice a la hora de importar
// export const GifExpertApp = () => {

// const categories = ['One Punch','Samurai X','Dragon Ball'];
// para no tener que usar ese arreglo y tras de eso no lo podemos mutar podríamos usar el siguiente hook
// useState 
// lo importamos

// usetState:  el segundo parametro es para añadir categorias setcategories
// en este caso el arreglo sería un estado 

// const [categories, setCategories] = useState(['One Punch','Samurai X','Dragon Ball']);

// const handleAdd = () =>{
// si utilizan el push no sería una buena practica lo mejor sería el setCategories

//  setCategories('Hunter');
// si lo dejamos va a reventar porque está intentando cambiar las categoria entonces hay que extraerlo los elementos del arreglo 


// entonces despues de estraer las categorias con los ... 3puntos en el segundo parametro colocamos lo que queremos añadir
// setCategories([...categories,'vengo desde un hook llamado useState que tiene un arreglo y yo soy su nuevo elemento']); 

// si quiere que el elemento venga de primero cambian de posicion los paramtros 

// setCategories(['vengo desde un hook llamado useState que tiene un arreglo y yo soy su nuevo elemento',...categories]);


// otra forma y es muy efectiva es por medio de callback 
//cats es nuestro call back
// setCategories(cats =>[...cats,'vengo desde un hook llamado useState que tiene un arreglo y yo soy su nuevo elemento'])  
// } 

//     export const GifExpertApp = () => {

//     // const [categories, setCategories] = useState(['One Punch','Samurai X','Dragon Ball']);
//     const [categories, setCategories] = useState(['One Punch']);
//     return (
//         <>
//             <h2>GifExpertApp</h2>
//             {/* <AddCategory></AddCategory> */}
//             {/* vamos a usar comunicacion entre los componentes  */}
//             <AddCategory setCategories={setCategories}/>

//             <hr></hr>

//             {/* <button onClick={handleAdd}>Agregar un nuevo elemento</button> */}

//             {/* para introducir arreglos */}
//             <ol>
//             {
//                 // categories.map( seleting_category => {
//                 //                //primer parametro el index | dentro del li lo que hay en ese index  
//                 //                // NO SE PUEDEN REPETIR LOS KEYS SINO DA ERROR EL CONTENIDO DE CADA ESPACIO DEBE DE SER UNICOO 
//                 // return <li key={seleting_category}>{seleting_category}{' holas'}</li>
//                 // })

//                 // categories.map( seleting_category => {

//                     categories.map( category => (

//                                         <GifGrid
//                                         //   key={category}
//                                         category = {category}/> 
//                     ))
//             }
//             </ol>

//         </>

//     )
// }



//_________________________________________________________________________________________________-

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Hunter x Hunter']);
    return (
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr />
            <ol>
                {
                    categories.map(category => (

                        <GifGrid
                           // this is the unique key
                            key={category}
                            category={category} />
                    ))
                }
            </ol>

        </>

    )
}