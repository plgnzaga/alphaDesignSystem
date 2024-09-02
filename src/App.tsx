import './App.css'
import { ThemeProvider } from '@mui/material'
import alphaTheme from './theme/theme'

function App() {

  return (
    <>
      <ThemeProvider theme={alphaTheme}>
      <div>
      </div>
      </ThemeProvider>
    </>
  )
}

export default App
