import React, {ComponentType} from "react";
import {Suspense} from "react";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route, withRouter} from 'react-router-dom';
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {Login} from './components/Login/Login';
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import {Preload} from "./components/Navbar/common/Preloader/Preload";
import {RootAppStoreType} from "./redux/redux-store";

export type AppType = {
    initializeApp: () => void
    initialized: boolean
}

const DialogsContainer = React.lazy(() => import('./components/Navbar/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component<AppType, {}> {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        if (!this.props.initialized) {
            return <Preload/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Suspense fallback={<Preload/>}>
                        <Route path='/dialogs'
                               render={() => <DialogsContainer/>}/>

                        <Route path='/profile/:userId?'
                               render={() => <ProfileContainer/>}/>
                    </Suspense>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>

                    <Route path='/login'
                           render={() => <Login/>}/>

                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: RootAppStoreType) => ({
    initialized: state.app.initialized
})

export default compose<ComponentType>(withRouter, connect(mapStateToProps, {initializeApp}))(App)
