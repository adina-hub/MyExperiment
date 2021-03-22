import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function UserRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth()
    console.log(currentUser);
    return (
        <Route {...rest} render={props => {
            return currentUser && !currentUser.admin ? <Component {...props} /> : <Redirect to="/signin" />
        }}>

        </Route>
    )
}
