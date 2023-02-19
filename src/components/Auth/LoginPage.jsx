import { useState } from "react"
import { useDispatch } from "react-redux"
import { setIsAuth } from "../../app/redux/auth"

const Auth = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useState('')
    const [pass, setPass] = useState('')
    const data = {
        email: login,
        password: pass
    }
    const handleSubmit = (e) => {
        if (e.type === "click" || e.key === "Enter") {
            dispatch(setIsAuth(data))
        }
    }
    return (
        <div className={'login_wrapper'}>
            <div className={'login_wrapper_items'}>
                <div className={'discription'}>
                    Please sign in or sign up to view this page.
                </div>
                <input
                    className={'loginArea'}
                    onChange={(e) => setLogin(e.target.value)}
                    onKeyDown={handleSubmit}
                    type={"email"}
                    placeholder={'Email or phone number'} />
                <div className={'password_wrapper'}>
                    <input
                        className={'passArea'}
                        onChange={(e) => setPass(e.target.value)}
                        onKeyDown={handleSubmit}
                        type={ "password" }
                        placeholder={'Password'} />
                </div>
                <button className={'button'} onClick={handleSubmit}>
                    Log in
                </button>
            </div>
        </div>
    )
}

export default Auth