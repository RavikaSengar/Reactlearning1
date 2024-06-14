import React from 'react'

function TabButtons({children, onSelect}) {

    
  return (
    <li>
        <button onClick={onSelect}> {children}</button>
    </li>
  )
}

export default TabButtons