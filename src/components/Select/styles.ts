import { styled } from '../../styles'

export const ContainerSelect = styled('div', {
  position: 'relative',
  width: '100%',
  height: '28px',
  padding: '0px 0px',
})

export const StyledSelect = styled('div', {
  backgroundColor: 'white',
  width: '100%',
  height: '100%',
  border: '1px solid #BBB',
  fontSize: '13px',
  borderRadius: '4px',
  padding: '0px 5px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const Dropdown = styled('div', {
  position: 'absolute',
  maxHeight: '60px',
  width: '100%',
  border: '1px solid #BBB',
  borderRadius: '4px',
  backgroundColor: 'white',
  zIndex: 1000,
  overflowY: 'scroll',
})

export const ContOption = styled('div', {
  fontSize: '13px',
  padding: '7px 10px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '$green',
    color: 'white',
  },
})
