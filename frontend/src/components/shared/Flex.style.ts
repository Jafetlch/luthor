import styled from 'styled-components'
import { AlignItems, JustifyContent } from '../../models/css.model'

interface Props {
  flexFlow?: 'row' | 'column'
  justifyContent?: JustifyContent
  alignItems?: AlignItems
}

export const Flex = styled.div<Props>(props => ({
  display: 'flex',
  flexFlow: props.flexFlow,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent,
  width: '100%',
  height: '100%'
}))
