import React, { useId } from 'react'
/**
 * @param {string} label
 * @param {string} placeholder
 * @param {string} value
 * @param  {(s: string)=>void}onChange
 * @returns {JSX.Element}
 * @constructor
 */
 function Mod({placeholder, value, onChange, label}) {
    const id = useId()

  return (
    <div>
    <label className='form-label' htmlFor={id}>{label}</label>
            <input 
                id={id}
                type="text"
                className="form-control"
                value={value}
                placeholder={placeholder}
                // onChange={(e) => onChange(e.target.value)}
            />
    </div>
  )
}

export default Mod