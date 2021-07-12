import React from "react";
import { Route, Switch } from "react-router-dom";
import { useStyles } from "./config/styleConfig";
import { Paper } from "@material-ui/core";
import Egg from "./Pages/Egg";
import vegetable from "./Pages/Vegetable"
import Chicken from "./Pages/Chicken";
import Pizza from "./Pages/Pizza";
function Content() {
  const classes = useStyles();
  return (
    // Router path using the react-router-dom and assigning the Compoments to respective paths
    <Paper className={classes.paper}>
      <Switch>
        <Route path="/egg" component={Egg} />
        <Route path="/chicken" component={Chicken} />
        <Route path="/vegetable" component={vegetable} />
        <Route path="/pizza" component={Pizza} />
      </Switch>
    </Paper>
  );
}

export default Content;
