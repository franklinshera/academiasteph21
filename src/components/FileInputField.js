import React from 'react'

const FileInputField = ({labelText,classes ,placeholder}) => {
    return (
        <div className="input-group">
            <label  >{labelText}</label>
            <input type='file' className={classes} placeholder={placeholder ?? `Upload ${labelText} Here`} />
        </div>
    )
}

export default FileInputField
