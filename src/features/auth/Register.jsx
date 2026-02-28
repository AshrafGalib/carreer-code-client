import Lottie from 'lottie-react';
import React, { use } from 'react';
import LottieRegister from "../../assets/register.json";
import { AuthContext } from '../../contexts/AuthContext';


const Register = () => {

    const { createUser } = use(AuthContext)
   // console.log(createUser)

    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target
        const formData = new FormData(form)
        const userData = Object.fromEntries(formData.entries())
       // console.log(userData)
        
       //create user in the Firebase
        createUser(userData.email, userData.password)
            .then((result) => {
                console.log(result.user);

            })
            .catch((error)=>{
                console.log(error)
            })
    }

    return (
        <div className="hero bg-base-200 mx-auto min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                {/* <div className="text-center lg:text-left">
      <Lottie animationData={LottieRegister} loop={true}></Lottie>
    </div> */}
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <div className="card-body">
                        <div className='flex items-center w-full'>

                            <Lottie className='flex-1 ' animationData={LottieRegister} loop={true}></Lottie>
                            <h1 className="text-4xl font-bold  flex-1">Register now!</h1>
                        </div>
                        <form onSubmit={handleRegister}>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <input type="email"
                                    name='email'
                                    className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <input type="password"
                                    name='password'
                                    className="input" placeholder="Password" />
                                <div><a className="link link-hover">Forgot password?</a></div>
                                <button className="btn btn-neutral mt-4">Register</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;