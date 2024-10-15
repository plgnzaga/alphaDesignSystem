import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';


const AlertComponent = (props:any) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant={props.variant} color="success">This is {props.variant} success Alert.</Alert>
      <Alert variant={props.variant} color="info">This is {props.variant} info Alert.</Alert>
      <Alert variant={props.variant} color="warning">This is {props.variant} warning Alert.</Alert>
      <Alert variant={props.variant} color="error">This is {props.variant} error Alert.</Alert>
    </Stack>
  );
}
export default AlertComponent;