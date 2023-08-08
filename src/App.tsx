import { BrowserRouter } from 'react-router-dom'
import { globalStyles } from './styles/global'
import { Router } from './Router'

globalStyles()

export function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  )
}
