import styled from 'styled-components'

interface Props {
  width?: string
  padding?: boolean
}

export const Container = styled.div<Props>`
  max-width: ${props => props.width || '840px'};
  margin: 0 auto;
  padding: ${props => (props.padding ? '0 16px' : undefined)};
  position: relative;
`
