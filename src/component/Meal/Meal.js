import React from 'react';
import './Meal.css';

const Meal = (props) => {
    console.log(props.meal);
    const { strMeal, strMealThumb, strCategory, strInstructions } = props.meal;
    return (
        <div className='meal-container'>
            <div>
                <img src={strMealThumb} alt="" />
            </div>
            <div className='detail'>
                <h2>{strMeal}</h2>
                <p>{strInstructions.slice(0, 70)}</p>
                <p>Category :{strCategory}</p>
            </div>
        </div>
    );
};

export default Meal;