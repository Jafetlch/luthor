import styled from 'styled-components'

interface Props {
  value: string
}

export const Padding = styled.div<Props>`
  padding: ${props => props.value};
`
