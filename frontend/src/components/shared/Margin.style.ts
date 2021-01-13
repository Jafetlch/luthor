import styled from 'styled-components'

interface Props {
  value: string
  width?: string
  height?: string
}

export const Margin = styled.div<Props>(props => ({
  margin: props.value,
  width: props.width,
  height: props.height
}))
