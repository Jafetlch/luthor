import styled from 'styled-components'

export interface ButtonProps {
  width?: string
  height?: string
  background?: string
  color?: string
}

export const Button = styled.button<ButtonProps>`
  width: ${props => props.width || '100%'};
  height: ${props => props.height || '48px'};
  borderradius: 5px;
  background: ${props => props.background || props.theme.primary.main};
  border: none;
  color: ${props => props.color || props.theme.primary.text};
  cursor: pointer;
  fontsize: 0.875rem;
  fontweight: 500;
  a {
    color: ${props => props.color || props.theme.primary.text};
    text-decoration: none;
  }
`
