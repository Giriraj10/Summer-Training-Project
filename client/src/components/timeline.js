import React, { useEffect, useState } from 'react';
import { styled } from '@material-ui/core/styles';
import Postcard from './Postcards';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
const timeline =()=> {

  
    //JSX
    return(
      
          <Postcard/>
               

    );
  
}


export default timeline;



