import React from 'react'

function navigate (item, path){ 
  return path.reduce((value, entry) => value[entry], item)
}

const List = ({items, path}) => {
  if (! Array.isArray(items)){
    items = Object.values(items)
    console.log('Items', items)
  }

  return (
    <ul>
        {items.map((item) => (
          <li key={navigate(item, path)}>{navigate(item, path)}</li>
      ))}
    </ul>
  )
}

export default List