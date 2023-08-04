import { Outlet } from 'react-router-dom'
import { LayoutContainer } from './styles'
import { Navbar } from '../../components/Navbar'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Navbar />
      <Outlet />
    </LayoutContainer>
  )
}
