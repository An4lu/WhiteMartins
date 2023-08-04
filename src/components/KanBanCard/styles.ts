import { styled } from '../../styles'

export const StyledCard = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '195px',
  height: '100%',
  minHeight: '120px',
  backgroundColor: '$grayback',
  borderRadius: '3px',
  borderTop: '2px solid $green',
  padding: '10px',
  boxShadow:
    'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px',
})

export const TextContainer = styled('span', {
  color: '$graytitle',
  fontSize: '17px',
  fontWeight: '600',
  marginTop: '7px',
})
