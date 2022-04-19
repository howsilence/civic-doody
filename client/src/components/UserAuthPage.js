import UserSignUp from './UserSignUp';
import UserLogin from './UserLogin';

function UserAuthPage({handleAddUser, onLogin, user}){




    return(
        <div>
            <UserSignUp handleAddUser={handleAddUser} user={user}/>
            
            <br></br>
            <UserLogin onLogin={onLogin} user={user} />
           
        </div>
    )
}

export default UserAuthPage;