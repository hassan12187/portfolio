import React from 'react'

const SkillsCard = ({title,desc,children,img,i}) => {
  return (
    <div className='my_card col-lg-4 col-md-5 col-sm-8' style={{'--i':i}}>
    <img src={img} />
    <div className='my_card_body'>
        <h5 className='card_title'>{title}</h5>
        <p className='fw-light'>{desc}</p>
        <ul>
           {children}
        </ul>
    </div>
</div>
  )
}

export default SkillsCard