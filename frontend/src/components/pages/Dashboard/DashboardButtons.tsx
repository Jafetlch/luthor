import React from 'react'
import { Button } from '../../shared'

interface Props {
  role: number
  status: string
}

export const DashboardButtons: React.FC<Props> = ({ role, status }) => {
  return <Button>Hola</Button>
}
