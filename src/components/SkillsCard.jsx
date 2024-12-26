import React from 'react'

const SkillsCard = ({title,desc,children,img,i}) => {
  return (
    <div className='my_card col-lg-3 px-4' style={{'--i':i}}>
    <img src={img} />
    <div className='my_card_body'>
        <h5>{title}</h5>
        <p className='fw-light'>{desc}</p>
        <ul>
           {children}
        </ul>
    </div>
</div>
  )
}

export default SkillsCard