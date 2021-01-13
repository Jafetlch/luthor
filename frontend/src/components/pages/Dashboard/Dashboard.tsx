import React from 'react'
import { Container, Card, Text, Margin, Flex, Box } from '../../shared'
import { DashboardButtons } from './DashboardButtons'

export const Dashboard: React.FC = () => {
  const role: number = 2
  return (
    <Container padding>
      <Margin value="auto" width="340px">
        <Card rounded="top" width="100%">
          <Flex flexFlow="column" alignItems="center">
            <Text fontSize="24px" fontWeight="500">
              Jafet LCh.
            </Text>
            {role !== 5 && (
              <Text fontSize="14px" fontWeight="300">
                150218
              </Text>
            )}
            <Box height="20px" />
            <DashboardButtons role={role} status="hola" />
          </Flex>
        </Card>
      </Margin>
    </Container>
  )
}
