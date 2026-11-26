
import background from '../Images/background.png'
import Registerbg from '../Images/Registerbg.png'
import Logo from '../Images/Logo.png'
import { useState } from 'react'
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {

  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const Navigate = useNavigate();


  const LoginHandler = async (e) => {
    e.preventDefault()
    let res = await axios.post('http://Localhost:4000/api/auth/login',
      {
        email: Email,
        password: Password
      }
    )
    if (res.status === 200) {
      if (!res.data.token) {
        return toast.error("Token Not Found")
      }
      localStorage.setItem("Token", res.data.token)
      toast.success("Login SuccessFully")
      setEmail("");
      setPassword("")
      window.location.href = '/';
    }

  }

  return (
    <div className='Login w-[100%] h-[100vh] flex flex-col lg:flex-row'>
      <ToastContainer />
      {/* LEFT SIDE */}
      <div className="Login-left hidden lg:block lg:w-[60%] h-[100vh] relative">

        <img
          src={background}
          className='w-[100vw] h-[100vh]'
          alt=""
        />

        <img
          src={Registerbg}
          className='h-[100vh] absolute top-0 right-0'
          alt=""
        />

      </div>


      {/* RIGHT SIDE */}
      <div className="Login-right w-[100%] lg:w-[40%] h-[100vh] px-5 lg:px-0">

        {/* LOGO */}
        <div className="Login-right-top flex justify-center lg:justify-end w-[90%] mx-auto my-5">

          <img src={Logo} alt="" />

        </div>


        {/* REGISTER FORM */}
        <div className="Login-right-Mid">

          <h1 className='text-2xl font-semibold'>
            Log In Your Account
          </h1>


          <div className="inputs">



            {/* EMAIL */}
            <div className="input my-10">

              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                className='
                    outline-none
                    border
                    border-gray-300
                    rounded-md
                    w-[100%]
                    lg:w-[60%]
                    pl-2
                    py-1
                  '
                type="email"
                placeholder='Email'
                required
              />

            </div>


            {/* PASSWORD */}
            <div className="input my-5">

              <input
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                className='
                    outline-none
                    border
                    border-gray-300
                    rounded-md
                    w-[100%]
                    lg:w-[60%]
                    pl-2
                    py-1
                  '
                type="password"
                placeholder='Password'
                required
              />

            </div>




            {/* BUTTON */}
            <div className="Button">

              <button
                onClick={LoginHandler}
                className='
                    bg-[#309689]
                    text-white
                    w-[100%]
                    lg:w-[60%]
                    py-1
                    font-semibold
                  '
              >
                Log In
              </button>

            </div>

          </div>

        </div>

        <div className="Login-right-Btm">
          <p className='text-[#309689] pt-60 pl-20'>Terms and Conditions | Privacy Policy | Security Policy</p>

        </div>

        <div className="mt-6 text-center lg:text-left">
          <p className="text-[#309689]">
            Don't have an account?{' '}
            <Link
              to="/register"
              className="text-[#309689] font-semibold hover:underline"
            >
              Sign Up
            </Link>
          </p>
        </div>


      </div>

    </div>
  )
}

export default Login