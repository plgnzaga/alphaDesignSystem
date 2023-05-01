import { Button, Box, InputLabel, Grid } from '@mui/material';
import React, { useState, useEffect } from 'react';
import {DownloadButton, NextButton, Proceed} from './mui-overrides/Buttons/CustomButtons';

const Buttons = (props) => {

    return (
        <>
            <Proceed buttonText={'Proceed'} variant={'outlined'} color={'primary'} />
            <NextButton buttonText={'Next'} variant={'outlined'} color={'primary'} />
            <DownloadButton buttonText={'Download'} variant={'contained'} color={'primary'} />
            <Button color="success" variant='text'>Success</Button>
            <Button color="success" variant='outlined'>Success</Button>
            <Button color="success" variant='contained'>Success</Button>
            <Button color="danger" variant='text'>Danger</Button>
            <Button color="danger" variant='outlined'>Danger Outlined</Button>
            <Button color="danger" variant='contained'>Danger</Button>
            <Button variant="contained" color="success" sx={{ backgroundColor: (theme) => theme.palette.success[500] }}>
                Button with success 200 shade
            </Button>


            <Grid className="d-flex">
                <Grid style={{ flexBasis: '100%', gridTemplateColumns: 'repeat(4,1fr)' }} className='d-grid'>
                    <Grid className='my-custom-class'>Default</Grid>
                    <Grid>Hovered</Grid>
                    <Grid>Active</Grid>
                    <Grid>Disabled</Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default Buttons; 
