// Código 3: Select.tsx

import React from 'react';
import ReactSelect from 'react-select';
import { ContainerSelect } from './styles';

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  onValueChange: (value: string) => void;
  id: string;
  options: Option[];
  defaultValue?: Option | null;
}

const Select: React.FC<SelectProps> = ({
  options,
  onValueChange,
  id,
  defaultValue,
}) => {
  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      onValueChange(selectedOption.value);
    }
  };

  return (
    <ContainerSelect>
      <ReactSelect
        isSearchable={false}
        onChange={handleChange}
        options={options}
        placeholder=""
        id={id}
        defaultValue={defaultValue}
      />
    </ContainerSelect>
  );
};

export default Select;
