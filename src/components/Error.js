import React from 'react'
import Alert from 'react-bootstrap/Alert';

function Error() {
  return (
    <div>
       {[
        'danger'
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          <Alert.Link >Something went wrong,</Alert.Link> please try again later
        </Alert>
      ))}
    </div>
  )
}

export default Error