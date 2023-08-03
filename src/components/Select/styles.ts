import { StylesConfig } from 'react-select'

interface Option {
  label: string
  value: string
}

export const colorStyles: StylesConfig<Option> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'white',
    width: '457px',
    height: '46px',
    borderRadius: '4px',
    borderStyle: 'none',
    cursor: 'pointer',
    zIndex: '99.9',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
    fontFamily: 'Inter',
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    ':hover': {
      backgroundColor: '#D3AB3C',
      color: 'white',
    },
    color: isSelected ? '#111827' : '#111827',
  }),
}
