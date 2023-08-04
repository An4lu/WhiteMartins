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
  padding: '12px 0px 8px 20px',
})

export const FirstLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: '2px',
  padding: '0px 0px 10px 0px',
})

export const ContainerSearch = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%',
  padding: '12px 20px',
  gap: '2rem',
})

export const SearchLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
})

export const SearchRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '90%',
})

export const CheckboxItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '7px 10px',
})

export const CheckboxCont = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '10px 0px',
  gap: '10px',
})

export const IconCont = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  gap: '10px',
})

export const ScrollContainer = styled('div', {
  height: '150px',
  overflowY: 'auto',
})

export const ContInput = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '10px',
})
