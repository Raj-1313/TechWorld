import { Box } from '@chakra-ui/react'
import { Button, Result } from 'antd'
import React from 'react'
import { Link } from 'react-router-dom'

const NoDataFound = () => {
  return (
    <Box m='auto' bg='white'>
      <Result  
  title="Sorry Data Is Not Available Currently"
  extra={
    <Link to='/'> <Button type="primary" key="console">
      Home
    </Button> </Link>
  }
  />
    </Box>
  )
}

export default NoDataFound
