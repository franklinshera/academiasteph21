import React from 'react'

const InputField = ({ labelText , type ,name, classes , placeholder , parentClasses , onChange}) => {

    function getSlug(){
       return name.replace(' ', '-').toLowerCase() ?? labelText.replace(' ', '-').toLowerCase()
    }


    return (
        <div className={parentClasses ? `input-group ${parentClasses}` : 'input-group'}>
            <label  >{labelText}</label>
            {(type === 'number') ? (
                <input type='number' name={getSlug} id={getSlug} min='0' step='1' pattern="{0-9}" onChange={onChange} className={classes} placeholder={placeholder ?? `Type ${labelText} Here`} />
            ) : (
                <input type={type ?? 'text'} name={getSlug} id={getSlug} onChange={onChange}  className={classes} placeholder={placeholder ?? `Type ${labelText} Here`} />
            )}
            
        </div>
    )
}

export default InputField
