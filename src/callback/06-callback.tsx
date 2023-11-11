import React, {ChangeEvent, MouseEvent} from "react";

const callback = () => {
    alert('Hi')
    return 12;
}
window.setTimeout(callback, 1000)

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        alert('User have been deleted')
        console.log(event.currentTarget.name)
    }
    const saveUser = () => {
        alert('User have been saved')
    }
    const onNameChanged = () => {
        console.log('name change')
    }
    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('age changed: ' + event.currentTarget.value)
    }
    const focusHandler = () => {
        console.log('focus lost')
    }

    return <div>
        <textarea onChange={onNameChanged}
                  onBlur={focusHandler}>Alex</textarea>
        <input onChange={onAgeChanged} type={'number'}/>
        <button onClick={deleteUser}>Delete</button>
        <button onClick={deleteUser} name={'delete'}>X</button>
        <button onClick={deleteUser} name={'save'}>X</button>
        <button onClick={saveUser}>Save</button>
    </div>
}