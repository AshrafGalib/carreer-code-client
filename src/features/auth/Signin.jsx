import React, { use } from 'react';
import LottieSignin from "../../assets/Login.json";
import Lottie from 'lottie-react';
import { AuthContext } from '../../contexts/AuthContext';

const Signin = () => {
       
    const { signInUser}=use(AuthContext)
    
    const handleSignin=(e)=>{
          e.preventDefault()

          const form = e.target
          const formData = new FormData(form)
          const userData = Object.fromEntries(formData.entries())
          console.log(userData)

          //signIn user
          signInUser(userData.email,userData.password)
          .then(result=>{
            console.log(result.user)
          })
          .catch(error=>{
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

                            <Lottie className='flex-1 ' animationData={LottieSignin} loop={true}></Lottie>
                            <h1 className="text-4xl font-bold  flex-1">Sign In now!</h1>
                        </div>
                        <form onSubmit={handleSignin}>
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
                                <button className="btn btn-neutral mt-4">Sign In</button>
                            </fieldset>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signin;