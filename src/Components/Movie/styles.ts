import styled from 'styled-components'

export const ContainerMovie = styled.button`
  border: none;
  padding: 8px;
  margin: 8px;
  gap: 8px;
  max-width: min-content;
  background-color: #fff;
  cursor: pointer;

  h3 {
    width: 60%;
    flex: 1;
  }

  span {
    display: flex;
    gap: 12px;
    align-items: center;
    color: #000;
  }

  div {
    width: 100%;
    text-align: center;
  }

  img {
    max-height: 250px;
  }
`
