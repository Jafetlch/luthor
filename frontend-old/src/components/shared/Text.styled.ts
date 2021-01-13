import styled from 'styled-components'

interface Props {
  fontFamily: string
  fontSize: string
  fontWeigth: string
  color: string
}

export const Text = styled.div<Props>`
  font-family: ${props => props.fontFamily || 'Roboto'};
  font-size: ${props => props.fontSize || '26px'};
  font-weight: ${props => props.fontWeigth || '400'};
  color: ${props => props.color || '#000'};
`
