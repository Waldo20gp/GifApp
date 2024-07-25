import { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

const [categories, setCategories] = useState(['Goku'])

const onAddCategory = ( newCategory ) => {
    if(categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]);
}

  return (
    <>
    <h1>GifApp</h1>
    <AddCategory 
    // onAddCategories={setCategories}
    onNewCategory={ onAddCategory } 
    />
    
    
        
    { categories.map( category => 
              <GifGrid key={category} category={category} /> 
              ) 
    }
    

    </>
  )
}
