import React from 'react'
import Card from './Card';

 function Food(props) {
  return (
    <>
    <Card title={props.foodItem[0].title} desc={props.foodItem[0].desc}/>
    <Card title={props.foodItem[1].title} desc={props.foodItem[1].desc}/>
    <Card title={props.foodItem[2].title} desc={props.foodItem[2].desc}/>
    <Card title={props.foodItem[3].title} desc={props.foodItem[3].desc}/>
    </>
  )
}


export default Food;
