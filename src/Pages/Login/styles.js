import styled from "styled-components";

export const ContainerLogin = styled.main`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 100%;
  justify-content: center;
  gap: 10px;
  align-items: center;

  h1 {
    color: var(--color-primary);
  }
`;

export const Login = styled.div`
  width: 400px;
  background-color: var(--grey-3);
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
  border-radius: 4px;

  form {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    padding: 10px;

    h2 {
      color: var(--gray-0);
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

    button {
      height: 40px;
      border-radius: 4px;
      color: var(--gray-0);
      background-color: var(--color-primary-Focus);
      font-weight: 600;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;

    span {
      color: var(--gray-1);
    }

    a {
      border-radius: 4px;
      color: var(--gray-0);
      background-color: var(--gray-1);
      padding: 20px;
      padding: 20px 0px 20px 0px;
    }
  }
`;
