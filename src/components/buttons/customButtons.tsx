import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"

const CustomButtonsComponent = (props: any) => {

  type ButtonType = {
    id: number,
    name: string,
    type: string,
    useCase: string
  }
  const buttonTypes: ButtonType[] = [
    {
      id: 1,
      name: 'Proceed',
      type: 'proceed',
      useCase: 'Used to continue to the next step in a process or workflow'
    },
    {
      id: 3,
      name: 'Go Back',
      type: 'goback',
      useCase: 'Used to return to the previous step in a process or workflow'
    },
    {
      id: 0,
      name: 'Next',
      type: 'next',
      useCase: 'Moving to the next step in a multi-step process'
    },
    {
      id: 0,
      name: 'Prev',
      type: 'prev',
      useCase: 'Moving back to the previous step in a multi-step process'
    },
    {
      id: 2,
      name: 'Download',
      type: 'download',
      useCase: 'Used to save a digital asset, such as a document or data dump'
    },
    {
      id: 3,
      name: 'Add',
      type: 'add',
      useCase: 'Use when adding an item or entity'
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
                  <Button variant={'contained'} buttonType={row.type}>{row.name}</Button>
                </TableCell>
                <TableCell>{`${row.type.toLowerCase()}`}</TableCell>
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