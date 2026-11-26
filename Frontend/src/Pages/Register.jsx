
import background from '../Images/background.png'
import Registerbg from '../Images/Registerbg.png'
import Logo from '../Images/Logo.png'
import axios from 'axios'
import { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { Link } from 'react-router-dom'

const Register = () => {
  const [Name, setName] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Image, setImage] = useState('');

  const RegisterHandler = async (e) => {
    const formdata = new FormData();
    formdata.append('username', Name);
    formdata.append('email', Email);
    formdata.append('password', Password);
    formdata.append('image', Image);
    e.preventDefault();

    let res = await axios.post('http://Localhost:4000/api/auth/register', formdata,
      {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }
    )
    if (res.status === 200 || res.status === 201) {
      toast.success('User Registered Successfully', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
      setName("")
      setEmail("")
      setPassword("")
      setImage("")
      document.getElementById('Profileimage').value = "";

    }
    else {
      toast.error('Registration Failed', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",

      });
    }
  }
  return (
    <div className='Register w-[100%] h-[100vh] flex flex-col lg:flex-row'>
      <ToastContainer />
      {/* LEFT SIDE */}
      <div className="Register-left hidden lg:block lg:w-[60%] h-[100vh] relative">

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
      <div className="Register-right w-[100%] lg:w-[40%] h-[100vh] px-5 lg:px-0">

        {/* LOGO */}
        <div className="register-right-top flex justify-center lg:justify-end w-[90%] mx-auto my-5">

          <img src={Logo} alt="" />

        </div>


        {/* REGISTER FORM */}
        <div className="register-right-Mid">

          <h1 className='text-2xl font-semibold'>
            Register Your Account
          </h1>


          <div className="inputs">

            {/* NAME */}
            <div className="input my-10">

              <input
                value={Name}
                onChange={(e) => setName(e.target.value)}
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
                type="text"
                placeholder='Name'
                required
              />

            </div>


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


            {/* PROFILE */}
            <label htmlFor="">
              Profile
            </label>

            <div className="input my-1">

              <input
                id='Profileimage' onChange={(e) => setImage(e.target.files[0])}
                type="file"
                placeholder='Name'
                required
              />

            </div>


            {/* BUTTON */}
            <div className="Button">

              <button
                onClick={RegisterHandler}
                className='
                  bg-[#309689]
                  text-white
                  w-[100%]
                  lg:w-[60%]
                  py-1
                  font-semibold
                '
              >
                Register
              </button>

            </div>

          </div>

        </div>

        <div className="register-right-Btm">
          <p className='text-[#309689] pt-60 pl-20'>Terms and Conditions | Privacy Policy | Security Policy</p>
        </div>
        <div className="mt-6 text-center lg:text-left">
          <p className="text-[#309689]">
            Already have an account?{' '}
            <Link
              to="/login"
              className="text-[#309689] font-semibold hover:underline"
            >
              Login
            </Link>
          </p>
        </div>
      </div>

    </div>
  )
}

export default Register