import { Box, Chip, Grid, Stack } from "@mui/material"
import Grid2 from "@mui/material/Unstable_Grid2";

interface ChipType {
    id?:number,
    color?:string,
    useCase?:string
  }
  const chipVariants:ChipType[] = [
    {
        id:1,
        color:"primary",
        useCase:''
    },
    {
        id:2,
        color:"secondary",
        useCase:''
    },
    {
        id:3,
        color:'success',
        useCase:''
    },
    {
        id:4,
        color:'warning',
        useCase:''
    },
    {
        id:5,
        color:'error',
        useCase:''
    },
    {
        id:6,
        color:'info',
        useCase:''
    },
    {
        id:7,
        color:'light',
        useCase:''
    },
    {
        id:8,
        color:'dark',
        useCase:''
    }
  ]

const ChipComponent = (props:any) => {
    return (
        <Grid2 sx={{maxWidth:'100px'}}>
            <Stack spacing={2} >
            {chipVariants.map((item) => 
                <Box>
                    <Chip label={props?.variant} variant={props?.variant} color={item.color} sx={{textTransform:'capitalize'}} size="medium"/>
                </Box>
            )}
            </Stack>
        </Grid2>
    )
}

export default ChipComponent;