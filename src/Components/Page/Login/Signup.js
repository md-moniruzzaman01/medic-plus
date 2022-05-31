import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';

import { useForm } from "react-hook-form";

import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import LoadingScreen from '../../SharedSection/LoadingScreen';
const Signup = () => {
    const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithEmailAndPassword,user,loading,error,] = useSignInWithEmailAndPassword(auth);
      let signInError;
      if (loading|| gloading) {
        return <LoadingScreen></LoadingScreen> 
      }
      if (error || gerror) {
        signInError = <p className='text-red-500 '>{error?.message ||gerror?.message}</p>
      }
      if (user || guser) {
          console.log(user || guser);
      }
    const onSubmit = data => {

        console.log(data)
        console.log(data.email)
        console.log(data.password)

        signInWithEmailAndPassword(data.email,data.password)
       
    }
    return (
        <div className='h-screen flex justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="text-center text-2xl font-bold">Sign Up</h2>
                    {/* input form */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* email filed */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label"><span class="label-text">What is your Name?</span></label>
                            <input type="email" {...register("name", {
                                required:{value: true,message:'Name is Required'}
                            })} placeholder="Your Name " class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            {errors.name?.type === 'required' && <span class="label-text-alt text-red-500">{errors.name?.message}</span>}
                            
                             </label>
                        </div>
                        {/* email filed */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label"><span class="label-text">What is your email?</span></label>
                            <input type="email" {...register("email", {
                                required:{value: true,message:'Email is Required'},
                                pattern: {value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,message: 'provide a valid email'}
                            })} placeholder="your email " class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            {errors.email?.type === 'required' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                            {errors.email?.type === 'pattern' && <span class="label-text-alt text-red-500">{errors.email.message}</span>}
                             </label>
                        </div>
                            {/* password fild */}
                        <div class="form-control w-full max-w-xs">
                            <label class="label"><span class="label-text">your password</span></label>
                            <input type="password" {...register("password", {
                                required:{value: true,message:'password is Required'},
                                minLength: {value:6,message: 'password must have 6 ceracter'}
                            })} placeholder="your password " class="input input-bordered w-full max-w-xs" />
                            <label class="label">
                            {errors.password?.type === 'required' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            {errors.password?.type === 'minLength' && <span class="label-text-alt text-red-500">{errors.password.message}</span>}
                            </label>
                        </div>
                    
                        {/* signin error */}
                        <div>{signInError }</div>
                        {/* submite form btn */}
                        <input className='btn w-full max-w-xs' value='Login'  type="submit" />
                    </form>
                    <p>Already have an account?  
                        <Link className='text-custom-primary' to="/login">Login</Link> 
                    </p>

                    <div class="divider">OR</div>
                    <button
                        onClick={() => signInWithGoogle()}
                        class="btn btn-outline">Continue with google</button>
                </div>
            </div>
        </div>
    );
};

export default Signup;