import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

interface AlertType {
  id?:number,
  color?:string,
  useCase?:string
}
const alertVariants:AlertType[] = [
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
  }
]

const AlertComponent = (props:any) => {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      {alertVariants.map((item) => 
        <Alert variant={props.variant} color={item.color}>This is {item.color} success Alert.</Alert>
      )}
    </Stack>
  );
}
export default AlertComponent;