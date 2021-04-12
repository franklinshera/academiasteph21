import React from 'react'

const RadioInputField = ({labelText , inputName, id}) => {
    return (
        <div className="radio-group">
            <label className="text-lg font-semibold ">{labelText}</label>
            
            <label className="custom-check">
                <input type="checkbox" name={inputName} id={id ?? ''}/>
                <span className="checkmark"></span>
            </label>
        </div>
    )
}

export default RadioInputField
