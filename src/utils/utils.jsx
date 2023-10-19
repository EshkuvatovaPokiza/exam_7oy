import React from 'react';
import classes from "./utils.module.scss"


const Container = ({children}) => {
    return (
    <div className={classes.container}   >
      {children}
    </div>
    )
  }
  export {Container}