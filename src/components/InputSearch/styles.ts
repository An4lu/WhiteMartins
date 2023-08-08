import { styled } from '../../styles'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  width: '100%',
  height: '30px',
  borderRadius: '2px',
  border: '2px solid #ccc',
  marginBottom: '10px',
})

export const StyledInput = styled('input', {
  width: '100%',
  height: '100%',
  fontSize: '12px',
  outline: 'none',
  border: 'none',
  padding: '6px',
  flex: 1,
  color: '#333',
})

export const IconContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  padding: '4px',
})
