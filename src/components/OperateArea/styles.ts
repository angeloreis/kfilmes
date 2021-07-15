import styled from 'styled-components'

export const ListMain = styled.ul`
  list-style-image: url('/img/triangleArrowLeft.svg');
  list-style-position: outside;
  text-align: left;

  margin-bottom: 60px;
  padding-left: 50px;
`

export const TitleOperate = styled.div`
  margin-top: 60px;
`

export const ListItem = styled.li`
  font-size: xxx-large;
  font-weight: bolder;
  alignment-baseline: center;

  :hover {
    color: #919da6;
    cursor: pointer;
    transition: color 0.5s;
  }
`
