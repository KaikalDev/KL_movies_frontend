import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const SectionResults = styled.section`
  display: flex;
  justify-content: space-around;

  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    align-items: center;
    justify-content: center;
  }

  .SideBar {
    position: fixed;
    top: 20vh;
    right: 0;
    width: 30vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ul {
    display: grid;
    width: 60vw;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.desktop}) {
    .SideBar {
      display: none;
    }

    ul {
      width: 100vw;
      justify-items: center;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    ul {
      display: flex;
      flex-direction: column;
      gap: 8px;
      align-items: center;
      justify-content: center;
    }
  }
`
