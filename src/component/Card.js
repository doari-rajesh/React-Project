import React from 'react'
import './Card.css'

 function Card(props) {
    console.log(props)
  return (
    <>
    <div className="card-container">
        <div className="card">
            <span className="card-title">{props.title}</span>
            <span className="card-description">{props.desc}</span>
            <img src="https://thumbs.dreamstime.com/b/assorted-american-food-top-view-109748438.jpg" alt="image" />
        </div>
    </div>
    </>
  )
}


export default Card;
