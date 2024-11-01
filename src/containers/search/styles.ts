import styled from 'styled-components'
import { ReactComponent as Icon } from '../../assets/icon/search.svg'
import { breakpoints, Fonts } from '../../styles'

export const IconSearch = styled(Icon)`
  width: 25px;
  height: 25px;
  fill: #000;
`

export const ContainerSearch = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 52px;
    font-family: ${Fonts.Noto};
  }

  .input {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2px 8px;
    background-color: #fff;
    border-radius: 50px;

    button {
      background-color: transparent;
      border: transparent;
      cursor: pointer;
    }

    input {
      border: none;
      border-bottom: 2px solid transparent;
      border-radius: 50px;
      outline: none;
      padding: 10px;
      flex: 1;
    }
  }

  .filter {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
    gap: 8px;

    input {
      &:last-child {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #000;
        width: 25%;
        text-align: center;
        font-size: 18px;

        &:disabled {
          border-bottom: 2px solid transparent;
        }
      }
    }
  }
`

export const HeaderSearch = styled.header`
  position: static;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100vw;
  display: flex;
  gap: 8px;
  justify-content: space-between;
  padding: 8px 24px;

  div {
    display: flex;
    gap: 8px;
    &:first-child {
      flex: 1;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #eee;
  }

  form {
    flex: 1;
    display: flex;
    gap: 12px;
    align-items: center;

    .Search {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 2px 8px;
      background-color: #fff;
      border-radius: 50px;

      input {
        border: none;
        border-bottom: 2px solid transparent;
        border-radius: 50px;
        outline: none;
        padding: 10px;
        height: 100%;
        flex: 1;
      }

      button {
        background-color: transparent;
        border: transparent;
        cursor: pointer;
      }
    }
  }

  .filter {
    display: flex;
    align-items: center;
    gap: 8px;

    input {
      &:last-child {
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #000;
        width: 25%;
        text-align: center;
        font-size: 18px;

        &:disabled {
          border-bottom: 2px solid transparent;
        }
      }
    }
  }

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
  }
`
