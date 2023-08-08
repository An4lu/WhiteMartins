import { styled } from '../../styles'

export const ContainerCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$white',
  borderRadius: '10px',
  padding: '20px',
  width: '100%',
  gap: '1rem',
  boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.25)',
})

export const Title = styled('p', {
  fontWeight: '700',
  fontSize: '16px',
  color: '$textblack',
})

export const ContIcon = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  width: '100%',
})

export const ContState = styled('div', {
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

export const ContTime = styled('div', {
  display: 'flex',
  alignItems: 'end',
  gap: '8px',
  marginTop: '4px',
})

export const Min = styled('p', {
  fontSize: '35px',
  fontWeight: '500',
})

export const M = styled('div', {
  padding: '3px 0px',
})
