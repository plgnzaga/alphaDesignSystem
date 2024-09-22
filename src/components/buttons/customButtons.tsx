import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const CustomButtonsComponent = (props:any) => {

    type ButtonType = {
        id:number,
        name:string,
        useCase:string
    }
    const buttonTypes:ButtonType[] = [
        {
            id:1,
            name:'Proceed',
            useCase:'Used to continue to the next step in a process or workflow'
        },
        {
            id:2,
            name:'Download',  
            useCase:'Used to save a digital asset, such as a document or data dump'
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
            <TableCell>Type</TableCell>
            <TableCell>When to use</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {buttonTypes.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Button variant={'contained'} buttonType={row.name.toLowerCase()}>{`${row.name.charAt(0).toUpperCase()}${row.name.slice(1)}`}</Button>
              </TableCell>
              <TableCell>{`${row.name.toLowerCase()}`}</TableCell>
              <TableCell>{row.useCase}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </>
    )
}
export default CustomButtonsComponent;