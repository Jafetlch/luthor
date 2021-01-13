import styled from 'styled-components'

interface Props {
  width?: string
  rounded?: 'normal' | 'top'
}

export const Card = styled.div<Props>(props => ({
  width: props.width,
  background: props.theme.card.background,
  borderRadius:
    props.rounded === 'normal'
      ? '10px'
      : props.rounded === 'top'
      ? '10px 10px 0 0'
      : undefined,
  padding: '20px',
  display: 'flex',
  position: 'relative',
  boxShadow: props.theme.boxShadow.normal
}))
