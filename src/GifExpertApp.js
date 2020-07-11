import React, {useState} from 'react'
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories, setCategories] = useState(['Goku']);

    // const handleAdd = (e) => {
    //     //Dos alternativas, ambas implican copiar el arreglo con ...categories
    //     setCategories( [...categories, 'SuperCampeones']);
    //     //setCategories( cats => [...categories, 'Suppp']);

    // }



    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            <ol>
                { 
                    categories.map( category => (
                        <GifGrid 
                            key={category}
                            category={category} 
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
