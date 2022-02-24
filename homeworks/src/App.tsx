import React from "react";
import './App.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Route} from 'react-router-dom';
import {DialogsContainer} from "./components/Navbar/Dialogs/DialogsContainer";

import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import { Login } from "./components/Login/Login";


export type AppPropsType = {
    //store: StoreType
    // state: stateType
    // store: Store
    // profilePage: profilePageType
    //addPost: (postMessage: string) => void
    //updateNewPostText: Function
    // dispatch: (action: any) => void
   }


const App = () => {
    return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <DialogsContainer/>}/>

                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer  />}/>

<h1>Hello</h1>

                    <Route path='/login'
                        render={ () => <Login/>}/>
                </div>
            </div>
        // </BrowserRouter>
    );
}



// export default compose<ComponentType>(
//     withRouter,
//     connect (mapStateToProps, reducers)) (App)

export default App
