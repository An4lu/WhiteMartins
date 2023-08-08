import { StylesConfig } from 'react-select'
import { styled } from '../../styles'

interface Option {
  value: string
}

export const ContainerSelect = styled('div', {
  width: '100%',
  gap: '10px',
  padding: '10px 0px',
})

export const colorStyles: StylesConfig<Option> = {
  control: (provided) => ({
    ...provided,
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    border: '1px solid #BBB',
    fontSize: '14px',
    borderRadius: '4px',
    cursor: 'pointer',
    zIndex: '99.9',
    // maxHeight: '65px',
    // overflowY: 'auto',
  }),
  menu: (provided) => ({
    ...provided,
    height: '65px',
    overflowY: 'auto',
  }),
  multiValueLabel: (styles) => ({
    ...styles,
    color: 'white',
    fontFamily: 'Inter',
    fontSize: '14px',
  }),
  option: (styles, { isSelected }) => ({
    ...styles,
    backgroundColor: 'transparent',
    cursor: 'pointer',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '$green',
      color: '$white',
    },
    color: isSelected ? '#333333' : '#333333',
  }),
}
