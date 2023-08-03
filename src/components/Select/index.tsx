import { useState, useEffect, forwardRef } from 'react'
import ReactSelect from 'react-select/creatable'
import { ContainerSelect, colorStyles } from './styles'

interface SelectProps {
  onValueChange: (value: string) => void
  id: string
  options: { value: string; label: string }[]
}

const Select = forwardRef<any, SelectProps>((props: SelectProps, ref: any) => {
  const { options, onValueChange, id } = props
  const [selectOptions, setSelectOptions] = useState(options)

  useEffect(() => {
    setSelectOptions(options)
  }, [options])

  function handleChange(selectedOption: any) {
    onValueChange(selectedOption.value)
  }

  return (
    <ContainerSelect>
      <ReactSelect
        ref={ref}
        isSearchable={false}
        onChange={handleChange}
        options={selectOptions}
        styles={colorStyles}
        placeholder=""
        id={id}
      />
    </ContainerSelect>
  )
})

Select.displayName = 'Select'

export default Select
