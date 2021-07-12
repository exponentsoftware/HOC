import React from 'react'
import HOC from '../Hoc'
import {Egg_api} from '../config/apiConfig'
import RecipeCard from '../Cards/RecipeCard'
import { Row } from 'react-bootstrap';
import { Paper } from '@material-ui/core';

function Egg(props) {
    // copying the props to the const
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
// Wrapping the component with Higher Order Component(HOC) and sending the api
export default HOC(Egg,Egg_api)
