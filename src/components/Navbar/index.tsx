import { ContainerBottomNavbar, LogoContainer, ContainerNavbar } from './styles'
import logo from '../../assets/img/icon_whitemartins.png'

export const Navbar = () => {
  return (
    <>
      <ContainerNavbar>
        <LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>
      </ContainerNavbar>
      <ContainerBottomNavbar></ContainerBottomNavbar>
    </>
  )
}
