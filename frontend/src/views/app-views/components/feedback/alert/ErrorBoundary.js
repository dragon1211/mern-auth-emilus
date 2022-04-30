import React, { Component, useState  } from 'react'
import { Button, Alert } from 'antd';

const { ErrorBoundary } = Alert;

const ThrowError = () => {
  const [error, setError] = useState();

  const onClick = () => {
    setError(new Error('An Uncaught Error'));
  };

  if (error) {
    throw error;
  }

  return (
    <Button type="danger" onClick={onClick}>
      Click me to throw a error
    </Button>
  );
};

export class AlertErrorBoundary extends Component {
	render() {
		return (
			<ErrorBoundary>
				<ThrowError />
			</ErrorBoundary>
		)
	}
}

export default AlertErrorBoundary
