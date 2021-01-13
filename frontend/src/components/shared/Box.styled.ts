import styled from 'styled-components'

interface Props {
  width?: string
  height?: string
}

export const Box = styled.div<Props>(props => ({
  width: props.width,
  height: props.height
}))
