import React, { useId } from 'react'
/**
 * @param {string} label
 * @param {string} placeholder
 * @param {string} value
 * @param  {(s: string)=>void}onChange
 * @returns {JSX.Element}
 * @constructor
 */
function Input({placeholder, value, onChange}) {
    const id = useId()
  return (
   <div>
        
        <input 
            id={id}
            
            
            value={value}
            placeholder={placeholder}
            onChange={(e) => onChange(e.target.value)}
        />
   </div>
  )
}

export default Input