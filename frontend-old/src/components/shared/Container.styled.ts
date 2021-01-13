import styled from 'styled-components'

interface Props {
  maxWidth?: string
}

export const Container = styled.div<Props>`
  max-width: ${props => props.maxWidth || '840px'};
  margin: auto;
  padding: 0 18px;
  position: relative;
  @media (max-width: 555px) {
    /* FIXME: */
    /* margin: 0 18px; */
  }
`
