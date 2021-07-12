import React from 'react'
import {pizza_api} from '../config/apiConfig'
import HOC from '../Hoc'
import RecipeCard from '../Cards/RecipeCard'
import { Row } from 'react-bootstrap';
import { Paper } from '@material-ui/core';

function Pizza(props) {
    // copying the props to a const
    const recipeList=props.list
    return (
        <Row>
            {
                // Mapping each element to cards
               recipeList.map((item,i)=>(
                <Paper key={i} elevation={2}>
                    <RecipeCard 
                            label={item.recipe.label}
                            image={item.recipe.image}
                            mealType={item.recipe.mealType}/>
                    </Paper>
            ))
            }
                     
                    
        </Row>
    )
}

export default HOC(Pizza,pizza_api)
