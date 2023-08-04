import { CheckboxIndicator, CheckboxItem, CheckboxRoot } from './styles'
import { Check } from '@phosphor-icons/react'
import { ReactNode } from 'react'

interface LabelProps {
  id: string
  children: ReactNode
  onValueChange: (value: boolean) => void
  checked?: boolean
}

export const CheckBox = ({
  id,
  children,
  onValueChange,
  checked,
}: LabelProps) => {
  const handleClick = () => {
    onValueChange(!checked)
  }

  return (
    <CheckboxItem onClick={handleClick}>
      <CheckboxRoot id={id} checked={checked} onCheckedChange={onValueChange}>
        <CheckboxIndicator>
          <Check size={12} color="#ffffff" />
        </CheckboxIndicator>
      </CheckboxRoot>
      {children}
    </CheckboxItem>
  )
}
