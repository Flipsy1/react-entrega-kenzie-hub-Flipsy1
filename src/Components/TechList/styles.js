import styled from "styled-components";

export const TechContainer = styled.ul`
  width: 100%;
  height: 450px;

  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 23px 26px;
  border-radius: 4px;

  background-color: var(--grey-3);

  overflow-y: auto;
`;

export const Empty = styled.div`
  width: 40%;
  height: 100px;
  display: flex;
  align-items: center;

  h3 {
    color: var(--color-primary-Negative);
    font-weight: 600;
    font-size: 20px;
  }
`;
