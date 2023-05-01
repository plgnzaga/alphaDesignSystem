import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerticalAlignBottomIcon from '@mui/icons-material/VerticalAlignBottom';
import { Grid } from '@mui/material';


export const Proceed = (props) => {
    const {buttonText,variant,color} = props;
    
    return (
       <Button variant={variant} id="proceed">
            <span>{buttonText}</span>
            <small className="proceed-icon"><ArrowForwardIcon /></small>
       </Button>
    )
}

export const NextButton = (props) => {
    const {buttonText,variant,color} = props;
    
    return (
       <Button variant={variant} color={color} id="next">
            <span>{buttonText}</span>
            <Grid class="arrow-wrapper">
                <Grid class="arrow"></Grid>
            </Grid>
       </Button>
    )
}

export const DownloadButton = (props) => {
    const {buttonText,variant,color} = props;
    
    return (
       <Button variant={variant} color={color} id="download">
            <Grid className='button-wrapper'>
                <span className='text' style={{display:'grid',placeItems:'center'}}>{buttonText}</span>
                <span className="icon"><VerticalAlignBottomIcon /></span>
            </Grid>
       </Button>
    )
}



