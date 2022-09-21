import { HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

class InputProps {
  type?: HTMLInputTypeAttribute;
  width?: number;
  errors?: object | string;
  touched?: object | boolean;
  handleBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  border?: string;
  margin?: string;
  backgroundColor?: string;
}

const InputStyled = styled.input<InputProps>`
  border: ${props => props.border};
  border-radius: 10px;
  padding: 10px 15px;
  width: ${props => `${props.width}%`};
  margin: ${props => props.margin};
  outline: none;
  background-color: ${props => props.backgroundColor};
  &:focus {
    border-width: 2px;
  }
`;

export default function Input({
  type,
  width,
  errors,
  touched,
  handleBlur,
  handleChange,
  placeholder,
  border,
  margin,
  backgroundColor,
}: InputProps) {
  
  return (
    <InputStyled
      type={type || 'text'}
      width={width}
      errors={errors || {}}
      touched={touched}
      handleBlur={handleBlur}
      placeholder={placeholder}
      border={border || 'none'}
      margin={margin}
      backgroundColor={backgroundColor || 'transparent'}
    />
  );
}