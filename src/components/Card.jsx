import React from 'react'

const Card = ({img,title,description,i}) => {
  return (
    <div className="card d-flex align-items-center" style={{"--i":i}}>
  <img src={img} className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title text-white">{title}</h5>
    <p className="card-text mt-3">{description}</p>
  </div>
</div>
  )
}

export default Card