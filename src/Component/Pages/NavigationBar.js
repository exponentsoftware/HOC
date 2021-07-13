import React from "react";
import Paper from "@material-ui/core/Paper";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useStyles } from "../config/styleConfig";

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <>
      <Col>
        <Paper elevation={3} className={classes.paper}>
          <Link to="egg"><h2>Egg</h2></Link>
        </Paper>
      </Col>
      <Col>
        <Paper elevation={3} className={classes.paper}>
          <Link to="noodles"><h2>Noodle</h2></Link>
        </Paper>
      </Col>
      <Col>
        <Paper elevation={3} className={classes.paper}>
          <Link to="chicken"><h2>Chicken</h2></Link>
        </Paper>
      </Col>
      <Col>
        <Paper elevation={3} className={classes.paper}>
          <Link to="Vegetable"><h2>Vegetable</h2></Link>
        </Paper>
      </Col>
      <Col>
        <Paper elevation={3} className={classes.paper}>
          <Link to="pizza"><h2>Pizza</h2></Link>
        </Paper>
      </Col>
      <Col>
      </Col>
    </>
  );
}
