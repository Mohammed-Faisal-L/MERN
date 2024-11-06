import React from 'react'
import { useRouteError } from 'react-router-dom'

function ErrorPage() {
  const error = useRouteError();
  return (
    <div>
        <h1>Oops You Are In The Wrong Page !!!</h1>
        <h3>{error.status}</h3>
        <p>{error.statusText}</p>
        <p>{error.error.message}</p>
    </div>
  )
}

export default ErrorPage