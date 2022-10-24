import styled from "styled-components";

export const TechLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 65px;
  background-color: var(--grey-4);
  padding: 10px 20px;
  border-radius: 4px;

  h2 {
    color: var(--gray-0);
  }

  div {
    display: flex;
    width: 150px;
    justify-content: space-between;
    align-items: center;

    span {
      color: var(--gray-1);
    }

    img {
      cursor: pointer;
    }
  }

  :hover {
    background-color: var(--grey-2);
  }

  @media screen and (max-width: 410px) {
    flex-direction: column;
    height: auto;
  }
`;
