import { styled } from '../../styles'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckboxRoot = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: '$white',
  width: 14,
  height: 14,
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 2,
  border: '1px solid $green',
  display: 'flex',
  outline: 'none',
  cursor: 'pointer',
  '&[data-state="checked"]': {
    backgroundColor: '$green',
    border: '1px solid $green',
  },
})

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
})
export const Flex = styled('div', { display: 'flex', marginRight: '70px' })

export const CheckboxItem = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  fontSize: '13px',
  fontWeight: '400',
  gap: '8px',
})
