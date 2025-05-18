import React from "react";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../Context/authContext";
import Swal from "sweetalert2";
import { Result } from "postcss";
import { Helmet } from "react-helmet-async";
// import { auth } from '../../Firebase Init/firebase.init';

const Register = () => {
  const { createUser } = use(AuthContext);
  console.log(createUser);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const fromData = new FormData(form);
    const { email, password, ...restFromData } = Object.fromEntries(
      fromData.entries()
    );

    // console.log(email, password, userProfile);

    // create user in the firebase
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const userProfile = {
          email,
          ...restFromData,
          creationTime: result.user?.metadata.creationTime,
          lastSignInTime: result.user?.metadata.lastSignInTime,
        };

        // save profile into db

        fetch("https://espresso-emporium-server-one-iota.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);

            if (data.insertedId) {
              Swal.fire({
                title: "Account Created Succesfully",
                icon: "success",
                draggable: true,
              });
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `Something went wrong! ${error.message}`,
          footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
  };
  return (
    <div className="bg-[url('https://i.postimg.cc/QCQCv3tb/3.png')] bg-cover bg-center min-h-screen flex justify-start items-center mb-10">
       <Helmet>
              <title>
                Espresso Emporium | Register
              </title>
            </Helmet>
      <div
        className="card bg-gary-200
        -100 w-full max-w-lg shrink-0 shadow-2xl mx-auto border mt-20 text-white"
      >
        <h1 className="text-2xl font-bold text-center mt-10">
          Register Now
        </h1>
        <div className="card-body">
          <form onSubmit={handleRegister} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Your Name"
            />
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input w-full"
              placeholder="Email"
            />
            <label className="label">Photo Url</label>
            <input
              name="photo"
              type="text"
              className="input w-full"
              placeholder="Enter Your Photo URl"
            />
            <label className="label">Mobile</label>
            <input
              name="mobile"
              type="text"
              className="input w-full"
              placeholder="Enter Your Mobile No"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input w-full mb-2"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <input
              type="submit"
              value="Login"
              className="btn btn-neutral mt-4"
            />
          </form>
          <p className='text-white text-sm'>
            Have No an account ? Please{" "}
            <Link className="text-blue-600 font-bold underline" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
