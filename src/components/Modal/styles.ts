import { styled } from '../../styles'

export const Overlay = styled('div', {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 980,
})

export const Dialog = styled('div', {
  backgroundColor: '$white',
  borderRadius: '8px',
  minHeight: '200px',
  width: '550px',
  position: 'relative',
})

export const FirstLine = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
  padding: '13px 40px',
  width: '100%',
  height: '100%',
})

export const TextPlaca = styled('span', {
  fontSize: '27px',
  fontWeight: '700',
  color: '#333',
})

export const Line = styled('div', {
  display: 'flex',
  backgroundColor: '$grayline',
  padding: '1px',
})

export const TitleLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '12px 40px',
})

export const ContainerText = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  paddingTop: '10px',
  gap: '5px',
  fontSize: '20px',
  fontWeight: '600',
  color: '#333',
})

export const ContainerItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '10px',
  padding: '10px 33px',
  fontSize: '14px',
})

export const TitleDesc = styled('p', {
  display: 'flex',
  flexDirection: 'row',
  fontWeight: '500',
  color: '$graytitle',
})

export const Description = styled('p', {
  marginLeft: '5px',
  color: '#333',
})

export const SecondLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'absolute',
  zIndex: 999,
  marginTop: '-434px',
  marginLeft: '340px',
})

export const ContainerStatus = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '5px',
  padding: '10px 5px',
  fontWeight: '700',
})

export const ContainerPlaca = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '175px',
  height: '90px',
  gap: '5px',
  color: '$white',
  fontSize: '34px',
  fontWeight: '500',
  border: '2px solid $green',
  borderRadius: '4px',
  backgroundColor: '#333333',
  marginBottom: '12px',
})

export const PlacaItem = styled('div', {
  fontSize: '14px',
  padding: '2px 0px',
})
