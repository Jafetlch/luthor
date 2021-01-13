import styled from 'styled-components'

interface Props {
  radius?: string
  background?: string
  image?: string
  fill?: string
}

export const Avatar = styled.div<Props>`
  width: 100px;
  height: 100px;
  border-radius: ${props => props.radius || '5px'};
  margin-bottom: 10px;
  background: ${props =>
    props.background ? props.background : `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    fill: ${props => props.fill};
  }
`
