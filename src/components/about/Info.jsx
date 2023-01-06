import React from 'react'

const Info = ({ items, Heading }) => {
  return (
    <>
      <Heading title="about info" />
      <div className="about_details_content">
        {items.deatils.map((val) => (
          <div className="about_details_content_box">
            <div className="icon">
              <div className={val.icon}></div>
            </div>
            <div className="about_details_content_box_text">
              <h4>{val.text}</h4>
              <span>{val.value}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default Info
