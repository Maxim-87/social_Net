import s from './ProfileInfo.module.css'
import React, {useState} from "react";
import {ProfilePropsType} from "../Profile";
import {Preload} from "../../Navbar/common/Preloader/Preload";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../images/user.png";
import {ProfileDataType} from "../../../redux/profile-reducer";


export const ProfileInfo = (props: ProfilePropsType) => {

    const [profileMode, setProfileMode] = useState(false)

    const editData = () => {
        setProfileMode(true)
    }

    if (!Object.keys(props.profile).length) {
        return <Preload/>
    }


    const selectPhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.target.files && e.target.files.length && props.savePhotoThunk(e.target.files[0])
        // if (e.target.files) {
        //     if (e.target.files.length) {
        //         props.savePhoto(e.target.files[0])
        //     }
        // }
    }

    return (
        <div>
            <div className={s.descripton}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type='file' onChange={selectPhoto}/>}
                {profileMode ? <ProfileDataForm profile={props.profile}/> : <ProfileData profile={props.profile}
                                                                                         isOwner={props.isOwner}
                                                                                         editData={editData}/>}
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>

            </div>
        </div>
    )
}

type ProfileType = {
    profile: ProfileDataType
    isOwner: boolean
    editData: () => void
}

type ProfileDataFormType = {
    profile: ProfileDataType
}

const ProfileData = (props: ProfileType) => {
    return (
        <div>
            {props.isOwner && <button onClick={props.editData}> edit </button>}
            <div>
                Full name : <b> {'Pechyonkin Maxim'} </b>
            </div>
            <div>
                Looking for a job: <b> {props.profile.lookingForAJob ? "no" : 'yes'} </b>
            </div>
            <div>
                My professional skills: <b> {'TypeScript/JS, React, Redux'} </b>
            </div>
        </div>
    )
}

const ProfileDataForm = (props: ProfileDataFormType) => {
    return (
        <div>
           Change Form
        </div>
    )
}

