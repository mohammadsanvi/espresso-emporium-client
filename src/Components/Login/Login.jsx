import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../Context/authContext';
import { Helmet } from 'react-helmet-async';

const Login = () => {
  const { singInUser } = use(AuthContext);
  

  const handleLogin = e => {
    e.preventDefault();
    const form = e.target;
    // const fromData = new FormData(form);
    // const newFromData = Object.fromEntries(fromData.entries());
    // console.log(newFromData);
    const email = form.email.value;
    const password = form.password.value;

    // singin to firebase

    singInUser(email, password)
      .then(result => {
        console.log(result.user)
        // update user singin to dtabase

        const singInfo = {
          email,
          lastSignInTime: result.user?.metadata?.lastSignInTime
        }
        // update lastSignInTime in the database
        fetch('https://espresso-emporium-server-one-iota.vercel.app/users', {
          method: 'PATCH',
          headers: {
            'content-type': 'application/json'
          },
          body:JSON.stringify(singInfo)
        })
          .then(res => res.json)
          .then(data => {
            console.log("after updated patch", data)
          })
          .catch(error => {
          console.log(error)
        })
      })
      .catch(error => {
      console.log(error)
    })



}
    return (
      <div className="bg-[url('https://i.postimg.cc/QCQCv3tb/3.png')] bg-cover bg-center min-h-screen flex justify-start items-center mb-10">
         <Helmet>
                <title>
                  Espresso Emporium | Login
                </title>
              </Helmet>
  
    <div className="card text-white w-full max-w-lg shrink-0 shadow-2xl mx-auto border mt-20">
    <h1 className='text-2xl font-bold text-center mt-10 text-footer-t'>Login</h1>
      <div className="card-body">
        <form onSubmit={handleLogin} className="fieldset">
          <label className="label">Email</label>
          <input name='email' type="email" className="input w-full" placeholder="Email" />
          <label className="label">Password</label>
          <input name='password' type="password" className="input w-full mb-2" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <input type="submit" value='Login' className="btn btn-neutral mt-4" />
        </form>
        <p className='text-white text-sm'>Have No an account ? Please <Link className='text-blue-600 font-bold underline' to="/register">Register</Link></p>
      </div>
  </div>
</div>
    );
};

export default Login;