import React from 'react'
import HOC from '../Hoc'
import RecipeCard from '../Cards/RecipeCard'
import { Row } from 'react-bootstrap';
import { Paper } from '@material-ui/core';
import {Vegetable_api} from '../config/apiConfig'

function Vegetable(props) {
    const recipeList=props.list
    return (
        <Row>
            {
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

export default HOC(Vegetable,Vegetable_api)
