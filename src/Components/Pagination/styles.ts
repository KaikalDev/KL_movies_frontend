import styled from 'styled-components'

export const PaginationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    gap: 2px;
    justify-content: center;
    padding: 8px;

    button {
      width: 30px;
      height: 40px;
      background-color: transparent;
      border: none;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }

    p {
      font-size: 20px;
    }

    ul {
      gap: 2px;
      display: flex;
    }
  }
`
