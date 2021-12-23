import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import MealCart from '../MealCart/MealCart';
import './Meals.css';

const Meals = () => {
    const [meals, setMeals] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div className='meal-container'>
            <div>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal}></Meal>)
                }
            </div>
            <div>
                <MealCart></MealCart>
            </div>
        </div>
    );
};

export default Meals;