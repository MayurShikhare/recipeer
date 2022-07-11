import React, {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import  { get_foodItems } from './foodItemSlice';
import Card from './Card';
import './card.css'
import { useNavigate} from 'react-router';
// import { Link } from "react-router-dom";

const Fooditems = () => {
  const items = useSelector(state => {
    const obj = state.foodItems.items
    // console.log(obj)
  // converting from obj of obj {{}} to array of objects [{}]
    const propertyValues = Object.values(obj);
    // console.log(propertyValues)
    return propertyValues
    
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(get_foodItems())
  }, [dispatch]);

  // const cardClickHandler = (clickedItem) => {
  //   console.log(clickedItem)
  // }
  const navigate = useNavigate()
  
  
  return (
    <div className="cards-container">      
      {items.map(item =>{ 
        return(
          <div key={item.id} >
          <button className="btn" onClick = {() =>{
            // cardClickHandler(item)
            console.log(item)
            navigate("/details" , {state : item})

          } }>
        <Card details = {item} />
        </button>
        </div>

        )
      })}
    </div>
  );
}

export default Fooditems;
