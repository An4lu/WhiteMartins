import { styled } from '../../styles'

export const StyledFlex = styled('div', {
  maxWidth: '1250px',
  width: '100%',
  margin: '0 auto',
  marginTop: '36px',
})

export const FirstLine = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  marginTop: '17px',
  gap: '2rem',
  alignItems: 'center',
})

export const SecondLine = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  padding: '25px 0px',
  gap: '3rem',
})

export const ContainerLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '70%',
  height: '100%',
})

export const FirstRow = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  gap: '1rem',
})

export const ContainerRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '30%',
  backgroundColor: '$white',
  borderRadius: '10px',
  boxShadow:
    '0px 2px 4px 0px rgba(85, 107, 130, 0.16), 0px 0px 2px 0px rgba(85, 107, 130, 0.16)',
  height: '100%',
})
