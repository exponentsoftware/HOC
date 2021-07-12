import { Card,Button } from 'react-bootstrap'
import React from 'react'

function RecipeCard(props) {
    return (
        <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.label}</Card.Title>
    <Card.Text>
      Type: {props.mealType}
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    )
}

export default RecipeCard
