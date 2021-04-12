import React from 'react'

const SelectInputField = ({labelText , selectName , selectID , selectOptions , parentClasses}) => {
    return (
        <div className={parentClasses ? `input-group ${parentClasses}` : 'input-group'}>
            <label >{labelText}</label>
            <select name={selectName} id={selectID}>
                <option value='' selected disabled>Choose {labelText}</option>
                {selectOptions.map(opt => (
                     <option value={opt.value}>{opt.name}</option>
                ))}
               
            </select>
        </div>
    )
}

export default SelectInputField
