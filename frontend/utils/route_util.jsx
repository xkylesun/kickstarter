import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        !loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/" />
            )
    )} />
);

const Protected = ({ component: Component, path, loggedIn, exact }) => (
    <Route path={path} exact={exact} render={(props) => (
        loggedIn ? (
            <Component {...props} />
        ) : (
                <Redirect to="/login" />
            )
    )} />
);

const Payment = ({ component: Component, path, loggedIn, exact }) => {

    return (<Route 
                path={path} 
                exact={exact} 
                render={(props) => {
                    if (loggedIn){
                        if (true){
                            return <Component {...props} />
                        } else {
                            return <Redirect to="/" />
                        }
                    } else {
                        return <Redirect to="/login" />
                    }
                }
            }
        />)      
}


const mapStateToProps = state => (
    { loggedIn: Boolean(state.session.currentUserId) }
);

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));

export const PaymentRoute = withRouter(connect(mapStateToProps)(Payment));