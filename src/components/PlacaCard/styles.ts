import { styled } from '@stitches/react'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '$white',
  borderRadius: '2px',
  width: '100%',
  height: '100%',
  margin: '10px 0px',
  padding: '3px',
  borderBottom: '1px solid $green',
  cursor: 'pointer',
})

export const FirstLine = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  padding: '9px',
  width: '100%',
  color: '$lowblack',
})

export const TextPlaca = styled('span', {
  fontWeight: 'bold',
  fontSize: '16px',
})

export const TempoPlaca = styled('span', {
  fontSize: '10px',
})

export const SecondLine = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  color: '$graydescription',
  fontSize: '10px',
  padding: '10px',
  gap: '2px',
  width: '100%',
})

export const TextDriver = styled('span', {})

export const Status = styled(
  'div',
  {
    gap: '2px',
    fontSize: '9px',
    color: '$white',
    fontWeight: '300',
    borderRadius: '4px',
    padding: '4px',
    backgroundColor: '#5899DA',
  },
  {
    variants: {
      status: {
        'Aguardando Cadastro': {
          backgroundColor: '#5899DA',
        },
        Aguardando: {
          backgroundColor: '#DA9E58',
        },
      },
    },
  },
)

export const LastLine = styled('div', {
  display: 'flex',
  justifyContent: 'end',
  width: '100%',
})
