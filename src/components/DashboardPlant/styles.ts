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

export const FirstLinee = styled('div', {
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
  gap: '3rem',
})

export const SearchLeft = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '50%',
})

export const SearchRight = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '80%',
})

export const CheckboxItem = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '5px 10px',
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

export const ContCheck = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  marginBottom: '10px',
})

export const TitleCheck = styled('h4', {
  display: 'flex',
  gap: '10px',
  borderBottom: '1px solid #D9D9D9',
  paddingBottom: '10px',
  width: '98%',
  margin: '10px 0px',
})

export const ContainerAdress = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  padding: '0px 10px',
})

export const DivCheck = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
})

export const ItemCheck = styled('div', {
  color: '$green',
})

export const TitleSecond = styled('p', {
  fontSize: '15px',
  padding: '0px 8px',
  color: '$textBlack',
})

export const Item2Check = styled('div', {
  color: '$textBlack',
})
