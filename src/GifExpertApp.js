import React, { useState } from 'react'
import { AddCategory } from './componentes/AddCategory';
import { GifGrid } from './componentes/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr/>

            <ol>
                {
                    categories.map(c =>
                        <GifGrid
                            key={c} 
                            category={c}
                         />
                    )
                }
            </ol>
        </>
    )
}
