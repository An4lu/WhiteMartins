import { styled } from '../../styles'

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

export const LogoContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '145px',
  marginLeft: '25px',
})

export const ContainerBottomNavbar = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '45px',
  backgroundColor: 'white',
  boxShadow: '0px 0px 7px 3px rgba(0, 0, 0, 0.25)',
  zIndex: '500',
  position: 'relative',
})
