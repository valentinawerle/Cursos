import { useState } from "react"
import PropTypes from "prop-types"
import { use } from "react"

export const CounterApp = ({value}) => {

    const [ counter, setCounter ] = useState(10);

    const handleAdd = () => {
        setCounter = ( 1000);


    }

    return(
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>

    <button onClick = {handleAdd}>
        +1
    </button>
    </>
    )
}

CounterApp.propTypes = {
    //value : PropTypes.number.isRequired

}

