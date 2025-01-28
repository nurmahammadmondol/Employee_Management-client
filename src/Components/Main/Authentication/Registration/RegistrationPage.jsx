import React, { useContext, useState } from 'react';
import Lottie from 'lottie-react';
import LottieFileRegistration from '../../../../assets/LottieFile/Animation -Registration.json';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { updateProfile } from 'firebase/auth';
import { auth } from '../../../Firebase.config/Firebase.config';
import useAxionPublic from '../../../Axios/useAxionPublic';
import Swal from 'sweetalert2';

const RegistrationPage = () => {
  const PublicAxios = useAxionPublic();
  const navigate = useNavigate();

  const { CreateUserEmailPassword, CreateUserGoogle } = useContext(AuthContext);
  const [UserRole, setUserRole] = useState(null);

  const handleRegistrationFromSubmit = async e => {
    e.preventDefault();

    const form = e.target;
    const Name = form.name.value;
    const Email = form.email.value;
    const Password = form.password.value;
    const BankAccount = form.bankAccount.value;
    const PhotoFile = form.photo.files[0]; // ফাইলটি সঠিকভাবে নেওয়া হচ্ছে।

    // ImageBB API Key
    const imageBBKey = 'd5d576271db0269b1aedda4e03a5a230';
    const formData = new FormData();
    formData.append('image', PhotoFile);

    try {
      // ImageBB API-তে ফাইল আপলোড
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${imageBBKey}`,
        {
          method: 'POST',
          body: formData,
        }
      );
      const data = await response.json();

      if (data.success) {
        const PhotoURL = data.data.display_url; // ছবির URL

        // Create User Profile Object
        const UserProfile = {
          displayName: Name,
          photoURL: PhotoURL, // ImageBB থেকে পাওয়া ছবির URL
        };

        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{6,}$/;

        if (!passwordRegex.test(Password)) {
          // এখানে .test() ব্যবহার করা হয়েছে
          console.log(Password); // পাসওয়ার্ড শর্ত পূরণ না করলে এখানে আসবে

          Swal.fire({
            icon: 'error',
            title: 'Invalid Password',
            text: 'পাসওয়ার্ড অবশ্যই ৬ অক্ষরের হতে হবে, অন্তত ১টি বড় অক্ষর এবং ১টি বিশেষ অক্ষর থাকতে হবে!',
          });

          return;
        } else {
          console.log('Password is valid!'); // শর্ত পূরণ হলে এখানে আসবে
          // Create User with Email and Password
          CreateUserEmailPassword(Email, Password)
            .then(result => {
              // Update Profile
              updateProfile(auth.currentUser, UserProfile)
                .then(() => {
                  console.log(result.user);

                  Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Account created successfully.',
                    showConfirmButton: false,
                    timer: 1500,
                  });

                  navigate('/');
                  const UserInfo = {
                    Name: result.user?.displayName,
                    Email: result.user?.email,
                    Photo: result.user?.photoURL,
                    UserRole: UserRole,
                    BankAccount: BankAccount,
                  };

                  PublicAxios.post('/User', UserInfo)
                    .then(res => {
                      console.log(res.data);
                      navigate('/');
                    })
                    .catch(error => {
                      console.log(error.message);
                    });
                })
                .catch(error => {
                  console.log('Profile Update Error:', error.message);
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: `${error.message}`,
                    footer:
                      '<a href="/RegistrationPage">Why do I have this issue?</a>',
                  });
                });
            })
            .catch(error => {
              console.log('User Creation Error:', error.message);
              Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: `${error.message}`,
                footer:
                  '<a href="/RegistrationPage">Why do I have this issue?</a>',
              });
            });
        }
      } else {
        console.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleUserRole = e => {
    setUserRole(e.target.value);
  };

  const handleGoogleRegistration = () => {
    CreateUserGoogle()
      .then(result => {
        console.log(result.user);
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Account created successfully.',
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
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: `${error.message}`,
              footer:
                '<a href="/RegistrationPage">Why do I have this issue?</a>',
            });
          });
      })
      .catch(error => {
        console.log(error.message);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${error.message}`,
          footer: '<a href="/RegistrationPage">Why do I have this issue?</a>',
        });
      });
  };

  return (
    <div className="py-20">
      <h4 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mt-5 ">
        Registration a New Account
      </h4>

      <div className="w-11/12 md:w-10/12 mx-auto md:flex items-center gap-5">
        <div className="card w-full md:w-1/2">
          <form onSubmit={handleRegistrationFromSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
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
            </div>

            <div>
              <label className="label">
                <span className="label-text">User Role</span>
              </label>

              <select
                onChange={handleUserRole}
                value={UserRole}
                className="select select-bordered w-full"
                required
              >
                <option disabled selected>
                  The role of users will be...
                </option>
                <option value="Employee">Employee</option>
                <option value="HR">HR</option>
              </select>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Bank Account No</span>
              </label>
              <input
                type="text"
                name="bankAccount"
                placeholder="Account Number"
                className="border p-2 rounded"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">User Photo</span>
              </label>
              <input
                type="file"
                name="photo"
                className="file-input file-input-bordered w-full "
              />
            </div>

            <div className="form-control">
              <label className="cursor-pointer label">
                <input
                  type="checkbox"
                  className="checkbox checkbox-[#4478a7]"
                />
                <span className="label-text">
                  Accept all our terms and conditions.
                </span>
              </label>
            </div>

            <div className="form-control mt-6">
              <button className="btn bg-cyan-400 text-white">
                Registration
              </button>
            </div>
          </form>

          <div className="divider ">Or</div>

          <div className="card-body">
            <button
              onClick={handleGoogleRegistration}
              className="w-full btn bg-cyan-400 text-white"
            >
              <i class="fa-brands fa-google fa-bounce fa-xl"></i>Registration
              with Google
            </button>

            <h6 className="text-end mt-5">
              Have an account ?
              <Link to="/LoginPage">
                <span className=" ml-2  font-bold rancho-regular text-cyan-400">
                  Log In
                </span>
              </Link>
            </h6>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <Lottie animationData={LottieFileRegistration}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
