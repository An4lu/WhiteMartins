import { NavLink } from 'react-router-dom'
import { styled } from '../../styles'

export const StyledFlex = styled('div', {
  maxWidth: '1275px',
  width: '100%',
  margin: '0 auto',
})

export const ContainerNavbar = styled('div', {
  width: '100%',
  height: '65px',
  backgroundColor: 'white',
  boxShadow: '0px 0px 7px 3px rgba(0, 0, 0, 0.25)',
  zIndex: '600',
  top: '0',
  left: '0',
  position: 'relative',
})

export const ContainerBottomNavbar = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  backgroundColor: 'white',
  boxShadow: '0px 0px 7px 3px rgba(0, 0, 0, 0.25)',
  zIndex: '500',
  position: 'relative',
})

export const NavList = styled('ul', {
  listStyle: 'none',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'row',
  gap: '35px',
})

export const StyledNavLink = styled(NavLink, {
  display: 'flex',
  alignItems: 'center',
  height: '100%',
  color: '$black',
  padding: '10px',
  gap: '5px',
  cursor: 'pointer',
  textDecoration: 'none',
  borderColor: '$black',
  transition: 'background-color 0.2s, color 0.3s',
  position: 'relative',
  '&:hover': {
    color: '$green',
  },
  '&.active': {
    color: '$green',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      bottom: 0,
      width: '100%',
      height: '3px',
      backgroundColor: '$green',
    },
  },
})

export const Text = styled('span', {
  fontSize: '14px',
  fontWeight: 'normal',
  lineHeight: '24px',
})

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '145px',
  marginLeft: '25px',
})
