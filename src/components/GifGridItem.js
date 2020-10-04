import React from 'react'
//   en el parametro recibi una umagen o un gif 
// export const GifGridItem = (img) => {

//     console.log(img)

//     return (
//         <div>
//             {img.title}
//         </div>
//     )
// }


//_________________________________________________________________

// export const GifGridItem = (props) => {

//     console.log(props.img)

//     return (
//         <div>
//           
//         </div>
//     )
// }


//_____________________________________________________________-

// ESta forma es mucho más facil de leer que con las props o sea propiedades

//desestructuramos
export const GifGridItem = ({id, title, url }) => {

    console.log(id, title, url);

    return (
        <div className="card animate__animated animate__fadeInUp">
            <img src={url} alt={title}/>
            <p>{title}</p>
        </div>
    )
}
