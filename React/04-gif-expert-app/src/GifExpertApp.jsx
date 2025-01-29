import { useState } from "react"
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Hatsune Miku', 'Pokemon']);

    const onAddCategory = () => {

      setCategories([...categories, "Valorant" ]);
    
    }

  return (

    <>
    {/*Titulo*/}
    <h1>GifsExpertApp</h1>

    {/*Input*/}
    <AddCategory />

    <button onClick= {onAddCategory}>Agregar</button>

    {/*Listado*/}
    <ol>
        {
            categories.map(category => {
                return <li key ={ category } > {category} </li>
            })
        }
    </ol>
    </>


  )
}
