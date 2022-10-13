import styled from "styled-components";

export const HeaderDashboard = styled.header`
  padding: 15px 20% 15px 20%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--grey-2);

  h1 {
    color: var(--color-primary);
  }

  button {
    padding: 10px 20px;
    border-radius: 4px;
    background-color: var(--grey-3);
    color: var(--gray-0);
    cursor: pointer;
  }
`;

export const SectionUser = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 30px 20% 30px 20%;
  border-bottom: 1px solid var(--grey-2);

  h2 {
    color: var(--gray-0);
  }

  span {
    color: var(--gray-1);
  }
`;

export const SectionData = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 30px 20% 30px 20%;
  align-items: flex-start;

  h2 {
    color: var(--gray-0);
  }

  p {
    color: var(--gray-1);
  }
`;
