import React from 'react'
import HOC from '../Hoc'
import {Noodles_api} from '../config/apiConfig'
import RecipeCard from '../Cards/RecipeCard'
import { Row } from 'react-bootstrap';
import { Paper } from '@material-ui/core';

function Noodles(props) {
    
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

export default HOC(Noodles,Noodles_api)
