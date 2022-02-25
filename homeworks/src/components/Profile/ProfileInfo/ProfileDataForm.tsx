import React from "react";
import {ProfileType} from "./ProfileInfo";
import {InjectedFormProps, reduxForm} from "redux-form";
import {ProfileDataType} from "../../../redux/profile-reducer";
import {createField, Input, Textarea} from "../../common/FormsConstrols";

type ProfileDataFormType = {
    profile: ProfileDataType
    // isOwner: boolean
    editData: () => void
}


const ProfileDataForm:React.FC<InjectedFormProps<{}, ProfileDataFormType> & ProfileDataFormType> = ({profile, editData}) => {

        return (
        <form>
           <div> <button onClick={editData}> save </button> </div>
            <div>
               <b> Full name </b>:  {createField('Full name', 'fullName', [], Input)}
            </div>
            <div>
                <b> Looking for a job </b>: {createField('', 'lookingForAJob', [], Input, {type: 'checkbox'})}
            </div>
            <div>
                My professional skills: <b> {'TypeScript/JS, React, Redux'} </b>
            </div>
        </form>
    )
}



const ProfileDataFormReduxForm = reduxForm<{}, ProfileDataFormType>({form: 'edit-profile'})(ProfileDataForm)

export default ProfileDataFormReduxForm



