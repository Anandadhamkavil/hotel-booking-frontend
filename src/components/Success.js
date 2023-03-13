import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Success({message}) {
  return (
    <div>
        {[
        'success'
      ].map((variant) => (
        <Alert key={variant} variant={variant} >
          <Alert.Link style={{textDecoration:'none'}}>{message}</Alert.Link>
        </Alert>
      ))}
    </div>
  )
}

export default Success