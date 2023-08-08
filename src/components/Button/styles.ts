import { styled } from '../../styles'

export const StyledButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  height: '100%',
  fontWeight: '500',
  fontSize: '14px',
  padding: '6px 14px',
  backgroundColor: '$green',
  color: '$white',
  border: '2px solid',
  borderColor: ' $green',
  borderRadius: '4px',
  gap: '10px',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
  '&:hover': {
    backgroundColor: '$white',
    color: '$green',
    border: '2px solid',
    boxSizing: 'border-box',
    borderColor: ' $green',
    borderRadius: '4px',
  },
})
