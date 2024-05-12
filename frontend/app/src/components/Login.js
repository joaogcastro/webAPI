function Login(){

    const handleLogin = async (e) => {
        e.preventDefault();

        console.log('Login clicked');
    }

    return(
      <div className="Login-form-wap">
            <h2>Login</h2>
            <form className='Login-form'>
              <input type ="email" name="email" palceholder="Email" required/>
              <input type="password" name="password" placeholder="Password" required/>
              <button type="submit" className='btn-login'
              onClick={(e) => handleLogin(e)}>Login</button>
            </form>
          </div>
    );
  }

  export default Login;