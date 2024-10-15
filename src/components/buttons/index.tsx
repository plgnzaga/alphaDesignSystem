import { Button, ButtonPropsColorOverrides, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const ButtonComponent = (props:any) => {

    interface ButtonType {
        id?:number,
        color?:ButtonPropsColorOverrides | string,
        useCase?:string
    }
    const buttonVariants:ButtonType[] = [
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

    return (
        <>
            {/* <Button variant={props.variant} color={props.color} >{props.variant}</Button> */}
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Button</TableCell>
            <TableCell>Variant</TableCell>
            <TableCell>Color</TableCell>
            <TableCell>When to use</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {buttonVariants.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Button variant={props.variant} color={row?.color}>{props.variant}</Button>
              </TableCell>
              <TableCell>{props.variant}</TableCell>
              <TableCell>{row.color}</TableCell>
              {/* <TableCell>
              <Button variant={props.variant} buttontype="proceed">Proceed</Button>
              <Button variant={props.variant} buttontype="download">Download</Button>
              </TableCell> */}
              <TableCell>{row.useCase}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
export default ButtonComponent;