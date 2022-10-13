import styled from "styled-components";

export const ContainerRegister = styled.main`
  max-width: 500px;
  margin: 0 auto;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0 20px 0;

    h1 {
      color: var(--color-primary);
    }

    a {
      padding: 10px;
      background-color: var(--grey-3);
      color: var(--gray-0);
      border-radius: 4px;
    }
  }
`;

export const FormRegister = styled.form`
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  padding: 25px;
  gap: 15px;

  h2 {
    color: var(--gray-0);
  }

  span {
    color: var(--grey-1);
  }

  p {
    color: var(--grey-1);
  }

  label {
    align-self: baseline;
    color: var(--gray-0);
  }

  input {
    height: 40px;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    background-color: var(--gray-1);
  }

  select {
    height: 40px;
    border: 1.2182px solid #f8f9fa;
    border-radius: 4px;
    background-color: var(--gray-1);
  }

  button {
    margin-top: 10px;
    height: 40px;
    border-radius: 4px;
    color: var(--gray-0);
    background-color: var(--color-primary-Negative);
    font-weight: 600;
  }
`;
