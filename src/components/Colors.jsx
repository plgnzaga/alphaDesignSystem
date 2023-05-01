import { Container, Grid, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {dangerColors, darkColors, lightColors, primaryColors, secondaryColors, successColors, warningColors} from '../overrides/ColorPalettes'

const Colors = (props) => {

    const colorPalettes = [
        {   
            category:"Primary",
            colors:primaryColors
        },
        {
            category:"Secondary",
            colors:secondaryColors
        },
        {
            category:'Success',
            colors:successColors
        },
        {
            category:'Warning',
            colors:warningColors
        },
        {
            category:"Danger",
            colors:dangerColors
        },
        {
            category:"Light",
            colors:lightColors
        },
        {
            category:"Dark",
            colors:darkColors
        } 
        
    ]
  
    return (
        <>
            
           <Grid className="d-grid-1">
           { colorPalettes.map((palette) => 
            <Grid>
                <Typography variant="h4">{palette.category}</Typography>
                <Grid id="colors-container">
                    { palette.colors.map((i,index) => 
                        <Grid sx={{backgroundColor:i.hexCode,color:i.textColor}} className='item'>
                            <small className='d-block'>{i.hexCode}</small>
                            <small className='d-block'>{i.shade}</small>
                        </Grid>
                    )}
                </Grid>
            </Grid>
             )}
           </Grid>

            
        </>
    );
}

export default Colors; 
