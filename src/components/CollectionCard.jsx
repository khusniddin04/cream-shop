import React from 'react'

function CollectionCard({img, title}) {
  return (
    <div className='collectionCard'>
        <img src={img} alt="" />
        <h3>{title}</h3>
    </div>
  )
}

export default CollectionCard