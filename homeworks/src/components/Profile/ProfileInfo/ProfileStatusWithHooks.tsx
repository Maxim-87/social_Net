import React, {ChangeEvent, useEffect, useState} from 'react';

type ProfileStatusType = {
    status: string
    updateStatus: (status: string) => void
}

const ProfileStatusWithHooks = (props: ProfileStatusType) => {

    const [value, setValue] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(()=> {
        setStatus(props.status)
    }, [props.status])

    function activate () {
        setValue(true)
    }

    function deActivate () {
        setValue(false)
        props.updateStatus(status)
    }
    function onChangeStatus (e: ChangeEvent<HTMLInputElement>) {
        setStatus(e.currentTarget.value)


    }


    return (
        <div>
            {value === !false ?
            <div>
                <input autoFocus={true} onBlur={deActivate} value={status}
                       onChange={onChangeStatus}
                       onKeyPress={e => {if (e.charCode === 13){deActivate()}}}
                />
            </div> :
                <div>
                   <span onDoubleClick={activate}> <b> {props.status || '***'} </b></span>
                </div>
            }
        </div>

    )

}

export default ProfileStatusWithHooks