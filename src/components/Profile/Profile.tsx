import { useSelector } from "react-redux"
import { RootState } from "../../app/redux/store"

const Profile = () => {
    const data = useSelector((state: RootState) => state.profile)
    
    return (
        <div className="profile">
            <div>
                <img src={data.photo} alt="" />
            </div>
            <div>
                <div>
                    First name: {data.firstName}
                </div>
                <div>
                    Second name: {data.secondName}
                </div>
                <div>
                    Username: {data.username}
                </div>
            </div>
        </div>
    )
}

export default Profile