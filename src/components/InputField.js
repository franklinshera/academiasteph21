import React from 'react'

const InputField = ({ labelName , type , classes , placeholder }) => {
    return (
        <div className="input-group">
            <label  >{labelName}</label>
            <input type={type ?? 'text'} className={classes} placeholder={placeholder ?? `Type ${labelName} Here`} />
        </div>
    )
}

export default InputField
