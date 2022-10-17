import styled from "styled-components";

export const TechModel = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 101;

  height: 100vh;
  width: 100vw;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  gap: 10px;
  background: rgba(18, 18, 20, 0.5);

  div {
    display: flex;
    flex-direction: column;

    width: 30%;
    min-width: 300px;

    background-color: var(--grey-3);

    border-radius: 4px;

    text-align: initial;

    div {
      display: flex;
      align-items: center;
      flex-direction: initial;
      justify-content: space-between;

      padding: 12px 20px;
      width: 100%;

      background-color: var(--grey-2);
      border-radius: 4px 4px 0 0;

      h2 {
        color: var(--gray-0);
      }

      span {
        color: var(--gray-1);

        font-size: 20px;
        font-weight: 600;

        cursor: pointer;
      }
    }

    form {
      display: flex;
      flex-direction: column;

      width: 100%;
      padding: 20px 20px 32px 20px;
      gap: 15px;

      border-radius: 0 0 4px 4px;

      label {
        font-size: 12px;
        color: var(--gray-0);
      }

      input {
        height: 40px;

        background-color: var(--grey-2);
        border: 1.2182px solid var(--gray-0);
        border-radius: 4px;

        color: var(--gray-0);
      }

      p {
        color: var(--gray-1);
        font-size: 12px;
      }

      select {
        height: 40px;

        background-color: var(--grey-2);
        color: var(--gray-0);

        border: 1.2182px solid var(--gray-0);
        border-radius: 4px;
      }

      button {
        height: 40px;
        border-radius: 4px;

        background-color: var(--color-primary);
        color: var(--gray-0);

        font-weight: 500;
        font-size: 16px;

        cursor: pointer;
      }
    }
  }
`;
