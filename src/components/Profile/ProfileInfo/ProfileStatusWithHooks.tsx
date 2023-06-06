import React, {ChangeEvent, useState} from "react";


export const ProfileStatusWithHooks =(props:any)=> {
    let [editMode,setEditMode] = useState<boolean>(false)
    let [status,setStatus] = useState<string>(props.status)
    const activateMode = () => {
        setEditMode(true)
    }
    const deactivateMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange =(event: ChangeEvent<HTMLInputElement>)=>{
        setStatus(event.currentTarget.value)
    }
        return (
            <div>
                { !editMode &&
                    <div>
                        <span
                            onDoubleClick={activateMode}
                        >
                            {props.status || "------"}
                        </span>
                    </div>}
                { editMode &&
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={deactivateMode}
                            onChange={onStatusChange}
                            value={status}
                        />
                    </div>}
            </div>

        )
}