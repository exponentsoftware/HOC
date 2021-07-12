import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Row, Container } from "react-bootstrap";
import NavigationBar from "./Pages/NavigationBar"
import Content from "./Content";

export default function LayoutPage() {
  return (
    <Container style={{position:'relative',top:"5px"}}>

      {/* This is the navigation bar */}

      <Row style={{alignItems:'center'}}><NavigationBar/></Row>
        
        {/* Box to display the recipe cards */}
      <Row xs={12}><Content/></Row>
    </Container>
  );
}
