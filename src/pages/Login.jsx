import React, { useState } from "react";
import { Link} from "react-router-dom";

import GoogleImg from "../assets/google.png";
import axios from "axios";
import { message } from "antd";


import Back from "../components/Common/BackButton";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
 
  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        "http://localhost:5000/api/users/login",
        {
          email: email,
          password: password,
        }
      );
   
      localStorage.setItem('user',JSON.stringify(response));
    
      message.success("Login success");
      setEmail("");
      setPassword("");
      
      window.location.href = "/"

       
    } catch (error) {
      
      message.error("Login failed : " + error);
    }
  };

  
  

  return (
    <div className="container mx-auto p-5 md:p-0">
      
      <div className="py-2 px-0">
        <Back/>
      </div>

      
      <div className="max-w-sm mx-auto bg-white px-10 py-10 rounded-2xl shadow-2xl">
        <div className="text-center mb-8">
          <h1 className="font-bold text-3xl text-primary">Login</h1>
        </div>

        <form>
          <div class="relative my-5">
            <input
              type="email"
              value={email}
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-black focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:outline-none peer-focus:text-black [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={(e) => setEmail(e.target.value)}

            />
            <label
              for="floatingInput"
              class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-black peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >
              Email address
            </label>
          </div>

          <div class="relative mt-5 mb-8">
            <input
              type="password"
              value={password}
              class="peer m-0 block h-[58px] w-full rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-4 text-base font-normal leading-tight text-neutral-700 transition duration-200 ease-linear placeholder:text-transparent focus:border-primary focus:pb-[0.625rem] focus:pt-[1.625rem] focus:text-neutral-700 focus:shadow-te-primary focus:outline-none peer-focus:text-primary  [&:not(:placeholder-shown)]:pb-[0.625rem] [&:not(:placeholder-shown)]:pt-[1.625rem]"
              id="floatingPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <label
              for="floatingPassword"
              class="pointer-events-none absolute left-0 top-0 origin-[0_0] border border-solid border-transparent px-3 py-4 text-neutral-500 transition-[opacity,_transform] duration-200 ease-linear peer-focus:-translate-y-2 peer-focus:translate-x-[0.15rem] peer-focus:scale-[0.85] peer-focus:text-primary peer-[:not(:placeholder-shown)]:-translate-y-2 peer-[:not(:placeholder-shown)]:translate-x-[0.15rem] peer-[:not(:placeholder-shown)]:scale-[0.85] motion-reduce:transition-none "
            >
              Password
            </label>
            <p className="text-xs cursor-pointer hover:underline mt-2 mb-5">
              Forget password
            </p>
          </div>

          <button
            onClick={handleLogin}
            type="button"
            class="my-4 block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-lg font-medium  leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
          >
            Sign In
          </button>
          
          <h4 className="text-center my-4 font-semibold">Or</h4>

          <button class="px-4 py-2 my-5 border flex items-center justify-center gap-2 border-slate-200  w-full rounded-lg text-slate-700  hover:border-slate-400  hover:text-slate-900  hover:shadow transition duration-150">
            <img class="w-6 h-6" src={GoogleImg} alt="google logo" />
            <span>Login with Google</span>
          </button>

          <div className="flex justify-between">
            <p className="justify-start text-sm">Do not have an Account? </p>
            <p className="items-end text-sm hover:underline">
              <Link to="/Registration">Create Account</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );

};

export default Login;
