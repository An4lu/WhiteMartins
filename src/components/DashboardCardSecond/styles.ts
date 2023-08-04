import { styled } from '../../styles'

export const ContainerCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$white',
  borderRadius: '10px',
  padding: '20px',
  width: '100%',
  gap: '1rem',
  boxShadow:
    '0px 2px 4px 0px rgba(85, 107, 130, 0.16), 0px 0px 2px 0px rgba(85, 107, 130, 0.16)',
})

export const Title = styled('p', {
  fontWeight: '700',
  fontSize: '18px',
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

export const ContCont = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '8px',
  marginTop: '4px',
})

export const Min = styled('p', {
  fontSize: '35px',
  fontWeight: '500',
})
