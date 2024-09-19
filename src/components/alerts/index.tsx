import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">This is a success Alert.</Alert>
      <Alert severity="info">This is an info Alert.</Alert>
      <Alert severity="warning">This is a warning Alert.</Alert>
      <Alert severity="error">This is an error Alert.</Alert>

      <Alert variant="filled" severity="success">
  This is a filled success Alert.
</Alert>
<Alert variant="filled" severity="info">
  This is a filled info Alert.
</Alert>
<Alert variant="filled" severity="warning">
  This is a filled warning Alert.
</Alert>
<Alert variant="filled" severity="error">
  This is a filled error Alert.
</Alert>
    </Stack>
  );
}
