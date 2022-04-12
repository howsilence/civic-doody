import UserSignUp from './UserSignUp';
import UserLogin from './UserLogin';

function UserAuthPage({handleAddUser, user, onLogin}){




    return(
        <div>
           <UserLogin onLogin={onLogin} />
           <UserSignUp handleAddUser={handleAddUser}/> 
        </div>
    )
}

export default UserAuthPage;