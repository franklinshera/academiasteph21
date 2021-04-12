import React from 'react'

const TextAreaInputField = ({labelText , textareaName , id , cols , rows , placeholder}) => {
    return (
        <div className="input-group">
            <label >{labelText}</label>
            <textarea name={textareaName} id={id} cols={cols ?? '25'} rows={rows ?? '10'} placeholder={placeholder ?? `Type ${labelText} Here`}/>
        </div>
    )
}

export default TextAreaInputField
