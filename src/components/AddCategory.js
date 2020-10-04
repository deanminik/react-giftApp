import React, { useState } from 'react'
import { GifExpertApp } from '../GifExpertApp';
import PropTypes from 'prop-types';
import { unmountComponentAtNode } from 'react-dom';

// estos es un prop 

// export const AddCategory = ({prop_desestructurado}) => {

export const AddCategory = ({setCategories}) => {
  
        
    // const [inputValue, setinputValue] = useState('Hola Mundo'); con un estado
    // const [inputValue, setinputValue] = useState(); undefined 
    // string vacio 
    const [inputValue, setinputValue] = useState(''); 
    
    

    const handleInputChange = (e) =>{
              console.log(e.target.value);

              setinputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        //  y para prevenir que la pagina no vuelva a cargar ya que es un defecto por default del formulario 
        e.preventDefault();
          console.log('submit hecho'); 

        //   para borrar los espacios de antes y despues usar trim 
        if( inputValue.trim().length>2){
            setCategories(cats => [inputValue,...cats]);
            setinputValue('esto es otro')
        }
          
    }
    
    return (
        // <>
        //    <h1>{inputValue}</h1>
        //   <input
             
        //      type="text"
        //      value={inputValue} 
        //      onChange={handleInputChange}
        //   ></input> 
        // </>

        // fragament es para agrupar elementos en este caso no lo vamos a usar 
        // porque vamos a usar un form que tambien sirve como agrupador 
         
        // para usar la tecla enter vamos a usar onsubmit 
        
        <form onSubmit={handleSubmit}>
             <h1>{inputValue}</h1>
                <input
             
             type="text"
             value={inputValue} 
             onChange={handleInputChange}
          ></input> 
        </form>
    )
}

// con esto que estamos haciendo obligamos a la persona que tiene que usar nuestro componente 
// el warning sale en la consola 


AddCategory.propTypes ={
    setCategories: PropTypes.func.isRequired
}

// entonces si alguien escribe esto 
// <AddCategory/>
// en vez de esto le saldar error 
// <AddCategory setCategories={setCategories}/>