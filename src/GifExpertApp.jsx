import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);

    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        setCategories([newCategory, ...categories]);
        // setCategories(categories => [newCategory, ...categories]);
    };

    return (
        <>
            {/* Título */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory onNewCategory={onAddCategory} />

            {/* Listado de Gif */}
            <ol>
                {categories.map((category) => {
                    return <li key={category}>{category}</li>
                })}
            </ol>

            {/* Gif Iteam */}
        </>
    );
};
