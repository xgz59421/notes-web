import React from 'react'
import { useHistory, useLocation, useParams, useRouteMatch } from 'react-router-dom';

function AppRouter(props) {
  console.log(props);
  console.log(useHistory());
  console.log(useLocation());
  console.log(useRouteMatch());
  console.log(useParams());
  return (
    <div>AppRouter 查看log</div>
  )
}

export default AppRouter
