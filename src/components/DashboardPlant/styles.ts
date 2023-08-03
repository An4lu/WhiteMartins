import { styled } from '../../styles'

export const ContainerCard = styled('div', {
  display: 'flex',
  backgroundColor: '$white',
  borderRadius: '10px',
  width: '100%',
  minHeight: '279px',
  height: '100%',
  gap: '1rem',
  boxShadow:
    '0px 2px 4px 0px rgba(85, 107, 130, 0.16), 0px 0px 2px 0px rgba(85, 107, 130, 0.16)',
})

export const Title = styled('p', {
  fontWeight: '700',
  fontSize: '20px',
  color: '$green',
  padding: '15px 0px 8px 20px',
})

export const FirstLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '5px',
})
