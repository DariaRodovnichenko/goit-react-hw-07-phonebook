import styled, { css } from 'styled-components';

import { Form, ErrorMessage, Field } from 'formik';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 20px;
  margin-bottom: 20px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const StyledField = styled(Field)`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;

  ${props =>
    props.hasError &&
    css`
      border-color: #ff4d4d;
    `}

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const ErrorMsg = styled(ErrorMessage)`
  color: red;
`;

export const SubmitBtn = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;
