import React, { useState, useRef } from 'react'
import { ContainerSelect, StyledSelect, ContOption, Dropdown } from './styles'
import { CaretDown } from '@phosphor-icons/react'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  onValueChange: (value: string) => void
  id: string
  options: Option[]
  defaultValue?: string | null
}

const Select: React.FC<SelectProps> = ({
  options,
  onValueChange,
  id,
  defaultValue,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOption, setSelectedOption] = useState(defaultValue || '')
  const ref = useRef(null)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  const handleChange = (value: string) => {
    setSelectedOption(value)
    onValueChange(value)
    setIsOpen(false)
  }

  return (
    <ContainerSelect ref={ref} id={id}>
      <StyledSelect onClick={handleToggle}>
        <div>
          {options.find((option) => option.value === selectedOption)?.label ||
            ''}
        </div>
        <div>
          <CaretDown
            size={22}
            color="#BBBBBB"
            style={{ transform: isOpen ? 'rotate(180deg)' : '' }}
          />
        </div>
      </StyledSelect>
      {isOpen && (
        <Dropdown>
          {options.map((option, index) => (
            <ContOption key={index} onClick={() => handleChange(option.value)}>
              {option.label}
            </ContOption>
          ))}
        </Dropdown>
      )}
    </ContainerSelect>
  )
}
export default Select
