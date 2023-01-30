import React from 'react'
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Result
    status="500"
    title="500"
    subTitle="Sorry, the page you visited does not exist."
    extra={ <Link to='/'> <Button type="primary">Back Home</Button> </Link>}
  />
  )
}

export default Error
