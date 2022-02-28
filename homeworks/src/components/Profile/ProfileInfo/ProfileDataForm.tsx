import React from "react";
import {ProfileType} from "./ProfileInfo";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileDataType} from "../../../redux/profile-reducer";
import {createField, Input, Textarea} from "../../common/FormsConstrols";

type ProfileDataFormType = {
    profile: ProfileDataType
    // isOwner: boolean

}


const ProfileDataForm:React.FC<InjectedFormProps<{}, ProfileDataFormType> & ProfileDataFormType> = ({profile, handleSubmit}) => {

        return (
        <form onSubmit={handleSubmit}>
           <div> <button> save </button> </div>
            <div>
               <b> Full name </b>:  {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b> Looking for a job </b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                 <b> My professional skills </b> : {createField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
            </div>

            <div>
                 <b> About me</b> : {createField('About me', 'aboutme', [], Textarea)}
            </div>
        </form>
    )
}



const ProfileDataFormReduxForm = reduxForm<{}, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm



