import { useState } from "react"
import PropTypes from 'prop-types'

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState("")

    const onInputChange = ({ target }) => {
        setInputValue(target.value)
    }

    const onSubmit= ( event ) => {
        event.preventDefault();
        const inputValueTrim = inputValue.trim(); 
        if(inputValueTrim.length<1) return;
        onNewCategory(inputValueTrim)
        setInputValue("")
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar gif" 
                value={inputValue} 
                onChange={onInputChange} 
            />
        </form>
    )
}


AddCategory.propTypes = {
    onNewCategory:PropTypes.func.isRequired
}