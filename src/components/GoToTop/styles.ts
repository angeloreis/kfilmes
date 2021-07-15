import styled from 'styled-components'

export const WrapperDiv = styled.div`
  display: flex;
  position: fixed;
  bottom: 20px;
  right: 30px;
  z-index: 99;
  border-radius: 100px;
  background: #b02c1f;
  width: 45px;
  height: 45px;

  :hover {
    background-color: #4e0903;
  }
`

export const ClickButton = styled.div`
  display: flex;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: auto;
  cursor: pointer;
  color: #fff;
`

export const ArrowUp = styled.span`
  font-size: medium;
  font-weight: bold;
`
