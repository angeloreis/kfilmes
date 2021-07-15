import styled from 'styled-components'

export const WrapperMenu = styled.nav`
  height: 100px;
  padding-left: 20px;
  width: 100%;
`

export const MenuNavegacao = styled.div`
  float: unset;
`

export const MenuBase = styled.ul`
  text-align: center;
  list-style-type: none;
  padding-right: 60px;
`

export const MenuItem = styled.li`
  display: inline-block;
  text-decoration: none;

  padding-left: 20px;
  padding-right: 20px;

  font-size: 1.8rem;

  :hover {
    cursor: pointer;
    border-bottom: 2px solid #b02c1f;
    transition: border-bottom 0.3s;
  }
`
