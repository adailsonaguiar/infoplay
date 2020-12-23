import * as S from './styles'

const Heading = ({
  children,
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}) => (
  <S.Wrapper
    color={'white'}
    lineLeft={lineLeft}
    lineBottom={lineBottom}
    size={size}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
)

export default Heading
