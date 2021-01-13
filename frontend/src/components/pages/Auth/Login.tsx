import React from 'react'
import { Container, Margin, Card, Text, Flex, Box } from '../../shared'
import { InputText } from '../../utils/Input/Input'

export const Login: React.FC = ({ children }) => {
  return (
    <Container width="390px">
      <Margin value="80px 0 0">
        <Card rounded="top">
          <Flex flexFlow="column" alignItems="center">
            <Text fontSize="20px">Sign In</Text>
            <Box height="20px" />
            <InputText value="Email Address" />
          </Flex>
        </Card>
      </Margin>
    </Container>
  )
}
