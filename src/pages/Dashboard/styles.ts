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
  height: '100%',
  padding: '25px 0px',
  gap: '1.7rem',
})

export const ContainerLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '65%',
  height: '100%',
  gap: '2rem',
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
  width: '35%',
  backgroundColor: '$white',
  borderRadius: '10px',
  boxShadow:
    '0px 2px 4px 0px rgba(85, 107, 130, 0.16), 0px 0px 2px 0px rgba(85, 107, 130, 0.16)',
  height: '100%',
})

export const ContainerVolume = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  backgroundColor: '$white',
  borderRadius: '10px',
  width: '100%',
  minHeight: '200px',
  height: '100%',
  boxShadow:
    '0px 2px 4px 0px rgba(85, 107, 130, 0.16), 0px 0px 2px 0px rgba(85, 107, 130, 0.16)',
})

export const TitleVolume = styled('p', {
  fontWeight: '700',
  fontSize: '21px',
  color: '$lowblack',
  padding: '20px 30px',
})

export const ContDiv = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '20px',
  gap: '1rem',
})
