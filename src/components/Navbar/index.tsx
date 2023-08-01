import {
  ContainerBottomNavbar,
  LogoContainer,
  ContainerNavbar,
  NavList,
  StyledNavLink,
  StyledFlex,
  Text,
} from './styles'
import logo from '../../assets/img/icon_whitemartins.png'
import { Kanban, HardDrives } from '@phosphor-icons/react'

export const Navbar = () => {
  return (
    <>
      <ContainerNavbar>
        <LogoContainer>
          <img src={logo} alt="" />
        </LogoContainer>
      </ContainerNavbar>
      <ContainerBottomNavbar>
        <StyledFlex>
          <NavList>
            <li>
              <StyledNavLink to="/">
                <Kanban size={24} />
                <Text>Kanban</Text>
              </StyledNavLink>
            </li>
            <li>
              <StyledNavLink to="/dashboard">
                <HardDrives size={24} />
                <Text>Dashboard</Text>
              </StyledNavLink>
            </li>
          </NavList>
        </StyledFlex>
      </ContainerBottomNavbar>
    </>
  )
}
