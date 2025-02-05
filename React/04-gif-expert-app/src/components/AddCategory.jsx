import { useState } from "react"

export const AddCategory = (setCategories) => {

    const [inputValue, setInputValue] = useState('One Punch');

    const onInputChange= (event) => {
        setInputValue(event.target.value);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        setCategories((categories) => [...categories, inputValue]);
    }

  return (

    <form onSubmit={(event) => onSubmit(event)}>
    <input
        type= "text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
    />
    </form>
    
  )
}
