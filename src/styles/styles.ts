import styled from 'styled-components'

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: url('/img/bg-default.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
`

export const Wrapper = styled.div`
  color: #fff;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;

  margin-left: 200px;
  margin-right: 90px;
`

export const layoutMainSub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`

export const layoutAboutUs = styled.div`
  width: 100%;
  text-align: center;
`

export const dividerLayout = styled.hr`
  margin: 30px 0 30px 0;
  border: 0;
  border-top: 1px dashed #ccc;
`

export const layoutOperateArea = styled.div`
  background: url('img/bg-operate-area.png') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  width: 100%;

  text-align: center;
`
