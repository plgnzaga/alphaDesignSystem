import { Box, Chip, Grid, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
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

            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell colSpan={2}>Importance:prop</TableCell>
                    </TableRow>
                </TableHead>
                <TableHead>
                    <TableRow>
                        <TableCell sx={{color:'gray'}}>Default</TableCell>
                        <TableCell sx={{color:'gray'}}>High</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {chipVariants.map((item) => 
                    <TableRow>
                        <TableCell><Chip label={props?.variant} variant={props?.variant} color={item.color} sx={{textTransform:'capitalize'}} size="medium"/></TableCell>
                        <TableCell><Chip label={props?.variant} variant={props?.variant} color={item.color} sx={{textTransform:'capitalize'}} size="medium" importance="high"/></TableCell>
                    </TableRow>
                )}
                </TableBody>
            </Table>
        </Grid2>
    )
}

export default ChipComponent;