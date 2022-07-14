import portfolioItems from "../db/data"
import CardItem from "./CardItem.js"
import Grid from "@mui/material/Grid"
import Container from "@mui/material/Container"

//import data 
//map data 
//Grid container is a wrapper around all the Grid items
//Grid items - specify the columns and screen size

import React from 'react'


// return <Grid item key = {index} xs={12} md={6}>
export default function Card() {
  return (
    <div>
    {/* <Container > */}
    {/* <Grid container spacing={2}> */}
    {portfolioItems.map((portfolio, index) => {
      return <Grid item key = {index} >
      <CardItem portfolio={portfolio} />
      </Grid>
      
    })}
    {/* </Grid> */}
    {/* </Container> */}
    </div>
  )
}
