import { useState } from 'react'
import { AddCategory , GifGrid } from './components';

export const GifExpertApp = () => {
    //no poner hooks adentro de condicionales
    const [categories, setCategories] = useState([ 'Avatar' ]);
    
    const onAddCategory = ( newCategory ) => {

        if(categories.includes(newCategory)) return;
        setCategories([ newCategory , ...categories ]);

        // setCategories([...categories, 'Valorant']);
        // setCategories(cats => [...cats, 'Valorant']);
    }
    
  return (
    <>
        <h1>GifExpertApp</h1>

        <AddCategory 
            onNewCategory={ value => onAddCategory(value) }
        />

        { 
            categories.map( ( category ) => (
                <GifGrid 
                key={ category } 
                category={ category }/>
            ))
        }
    </>
  )
}