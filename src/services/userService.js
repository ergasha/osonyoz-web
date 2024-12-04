
import AxiosService from './axios'

class User {
    async check_user(user_id){
        try {
            AxiosService.post('/add-user',{'user_id':user_id})
    
        }catch (err){
            console.log(err);
            
        }
    }


}

export default User;