import Lottie from 'lottie-react';
import React, { useContext } from 'react';
import LottieFileLogin from '../../../../assets/LottieFile/Animation -Login (2).json';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import useAxionPublic from '../../../Axios/useAxionPublic';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const PublicAxios = useAxionPublic();
  const navigate = useNavigate();
  const { CreateUserGoogle, LoginWithEmailPassword } = useContext(AuthContext);

  const handleLoginFormSubmit = e => {
    e.preventDefault();

    const form = e.target;
    const Email = form.email.value;
    const Password = form.password.value;

    LoginWithEmailPassword(Email, Password)
      .then(result => {
        console.log(result.user);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your account has been successfully logged in.',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');
      })
      .catch(error => {
        console.log(error.message);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  const handleGoogleLogin = () => {
    CreateUserGoogle()
      .then(result => {
        console.log(result.user);

        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your account has been successfully logged in.',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate('/');

        const UserInfo = {
          Name: result.user?.displayName,
          Email: result.user?.email,
          Photo: result.user?.photoURL,
          UserRole: 'Employee',
        };

        PublicAxios.post('/User', UserInfo)
          .then(res => {
            console.log(res.data);
          })
          .catch(error => {
            console.log(error.message);
          });
      })
      .catch(error => {
        console.log(error.message);
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: `${error.message}`,
          showConfirmButton: false,
          timer: 2000,
        });
      });
  };

  return (
    <div className="py-20">
      <h4 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold my-5 ">
        LogIn Your Account
      </h4>

      <div className="w-11/12 md:w-10/12 mx-auto md:flex items-center md:gap-10 lg:gap-16 ">
        <div className="w-full md:w-1/2">
          <div className="card w-full">
            <form onSubmit={handleLoginFormSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  // type={passwordShow ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-cyan-400 text-white">Login</button>
              </div>
            </form>

            <div className="divider ">Or</div>

            <div className="card-body">
              <button
                onClick={handleGoogleLogin}
                className="w-full btn bg-cyan-400 text-white"
              >
                <i class="fa-brands fa-google fa-bounce fa-xl"></i>Login with
                Google
              </button>

              <h6 className="text-end mt-5">
                Don't have an account ?
                <Link to="/RegistrationPage">
                  <span className=" ml-2  font-bold rancho-regular text-cyan-400">
                    Registration
                  </span>
                </Link>
              </h6>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <Lottie animationData={LottieFileLogin}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
