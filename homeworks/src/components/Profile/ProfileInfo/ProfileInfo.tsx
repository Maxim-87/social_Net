import s from './ProfileInfo.module.css'
import React, {useState} from "react";
import {ProfilePropsType} from "../Profile";
import {Preload} from "../../Navbar/common/Preloader/Preload";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userPhoto from "../../../images/user.png";
import {ProfileDataType} from "../../../redux/profile-reducer";
import ProfileDataFormReduxForm from "./ProfileDataForm";


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

    const onSubmit = (formData: any) => {
        debugger
        props.saveProfile(formData);
        setProfileMode(false);

    }

    return (
        <div>
            <div className={s.descripton}>
                <img src={props.profile.photos.large || userPhoto}/>
                {props.isOwner && <input type='file' onChange={selectPhoto}/>}
                {profileMode ? <ProfileDataFormReduxForm profile={props.profile}
                                                         onSubmit={onSubmit}
                                                         initialValues={props.profile}
                /> : <ProfileData profile={props.profile}
                                  isOwner={props.isOwner}
                                  editData={editData}/>}
                <ProfileStatusWithHooks status={props.status}
                                        updateStatus={props.updateStatus}/>

            </div>
        </div>
    )
}

export type ProfileType = {
    profile: ProfileDataType
    isOwner?: boolean
    editData: () => void
    saveProfile?: any
}

// export type ProfileDataFormType = {
//     profile: ProfileDataType
// }

const ProfileData = (props: ProfileType) => {
    return (
        <div>
            {props.isOwner && <button onClick={props.editData}> edit </button>}
            <div>
                <b> Full name </b>:  {props.profile.fullName}
            </div>
                <div>
                    <b> Looking for a job </b>:  {props.profile.lookingForAJob ? 'yes' : 'no'}
                </div>
            { props.profile.lookingForAJob &&
            <div>
                <b>   My professional skills </b>:  {props.profile.lookingForAJobDescription}
            </div>
            }
            <div>
                <b> About me </b>:  {props.profile.aboutMe}
            </div>

        </div>
    )
}



