import styled from 'styled-components'
import { FontFamily } from '../../models/css.model'

interface Props {
  fontFamily?: FontFamily
  fontSize?: string
  fontWeight?: string
  color?: string
}

export const Text = styled.div<Props>`
  font-family: ${props => props.fontFamily || 'Roboto'};
  font-size: ${props => props.fontSize || '26px'};
  font-weight: ${props => props.fontWeight || '400'};
  color: ${props => props.color || props.theme.text.main};
`
