import React, {useEffect,useState} from 'react'
import InputField from '../../components/InputField'

const Login = () => {

    const[user,setUser] = useState({
        username: '',
        password: '',
    })
   

   

    const loginUser = (e) => {
        e.preventDefault();
        
        console.log(user);
    }


    useEffect(() => {
        window.scrollTo(0,0)

        document.querySelector('title').text = 'AcademiaSteph21 | Login'

    }, [])
    return (
        <div className="login-screen">
            <form className="w-4/5 md:w-4/5 lg:w-1/2" onSubmit={loginUser}>
                 <label className="w-full mb-5 text-5xl text-center">Login</label>
                 <InputField labelText='Username' parentClasses="w-full" name="username" id="username" type='text' placeholder="Enter Username or Email" onChange={(e) =>  setUser({...user, username: e.target.value})}/>
                 <InputField labelText='Password' parentClasses="w-full" name="password" id="password" type='password' placeholder="Enter  Password" onChange={(e) =>  setUser({...user,password: e.target.value})}/>
                 <button type="submit" className="w-full font-bold sm:w-1/2 lg:w-1/3 btn-pri" >Login</button>
            </form>
        </div>
    )
}

export default Login
