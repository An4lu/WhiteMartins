import React, { useState, useEffect } from 'react'
import ReactSelect from 'react-select'

interface Option {
  value: string
  label: string
}

interface SelectProps {
  onValueChange: (value: string) => void
  id: string
  options: Option[]
}

const Select: React.FC<SelectProps> = (props) => {
  const { options, onValueChange, id } = props
  const [selectOptions, setSelectOptions] = useState(options)

  useEffect(() => {
    setSelectOptions(options)
  }, [options])

  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      onValueChange(selectedOption.value)
    }
  }

  return (
    <ReactSelect
      isSearchable={false}
      onChange={handleChange}
      options={selectOptions}
      placeholder=""
      id={id}
    />
  )
}

export default Select
