import * as S from './styles'

const Main = ({
  title = 'React Advanced',
  description = 'Typescript, ReactJS, NextJS and Styled Components'
}) => (
  <>
    <S.Logo
      src="/img/logo-medio.png"
      alt="image of Atom and written right: React Advanced course"
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="A developer guy in front a computer"
    />
  </>
)

export default Main
