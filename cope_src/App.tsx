import React from "react";
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Navbar/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
import {PostDataType, stateType} from "./redux/state";


export type AppPropsType = {
    state: stateType
    addPost: (postMessage: string) => void
    updateNewPostText: Function
   }


const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={() => <Dialogs dialogs={props.state.dialogs}
                                                  message={props.state.message}
                           />}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.posts}
                                                                  addPost={props.addPost}
                                                                  newPostText={props.state.newPostText}
                                                                  updateNewPostText={props.updateNewPostText}
                    />}/>

                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
