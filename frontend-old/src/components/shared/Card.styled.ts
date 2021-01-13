import styled from 'styled-components'

interface Props {
  width?: string
  borderRadius?: boolean
  margin?: string
  flexDirection?: 'column' | 'row'
  alignItems?: 'start' | 'end' | 'center'
  justifyContent?: string
}

export const Card = styled.div<Props>`
  width: ${props => props.width};
  background: #fff;
  border-radius: ${props => (props.borderRadius ? '10px 10px 0 0' : '10px')};
  margin: ${props => props.margin || 'auto'};
  padding: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.07);
  display: flex;
  flex-direction: ${props => props.flexDirection || 'row'};
  align-items: ${props => props.alignItems || 'center'};
  justify-content: ${props => props.justifyContent};
  position: relative;
`
