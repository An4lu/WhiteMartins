import { styled } from '../../styles'

export const ContainerVolume = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  backgroundColor: '#EAEAEA',
  borderRadius: '3px',
  width: '380px',
  height: '100px',
  gap: '0.5rem',
  borderBottom: '3px solid #E3E3E3',
})

export const DivLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '130px',
  height: '70px',
  marginLeft: '20px',
})

export const DivRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-end',
  margin: '12px 20px',
  width: '200px',
  height: '70px',
})

export const Letter = styled('h1', {
  display: 'flex',
  fontSize: '60px',
  color: '$textblack',
  fontWeight: 'bold',
  marginBottom: '-9px',
})

export const Text = styled('p', {
  fontSize: '18px',
  fontWeight: 'bold',
  color: '#BBB',
})

export const ContState = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'end',
  width: '200px',
})

export const ContTime = styled('div', {
  display: 'flex',
  alignItems: 'end',
  justifyContent: 'end',
  gap: '8px',
  marginTop: '5px',
  variants: {
    state: {
      green: {
        color: 'green',
      },
      yellow: {
        color: '#DA9E58',
      },
      red: {
        color: '#BA3535',
      },
    },
  },
  defaultVariants: {
    state: 'green',
  },
})

export const Min = styled('p', {
  fontSize: '35px',
  fontWeight: '500',
})

export const M = styled('div', {
  padding: '6px 0px',
})

export const ContText = styled('div', {
  display: 'flex',
  gap: '8px',
  marginTop: '4px',
  fontSize: '11px',
  color: '$graytitle',
})
