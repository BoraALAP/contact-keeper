import React, {useState} from 'react'

const Login = () => {
  const [user, setUser] = useState({
    userName: '',
    password: ''
  })

  const onSubmit = e => {
    e.preventDefault()
    console.log(user); 
  }

  const onChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const { userName, password } = user

  return (
    <div className="form-container">
      <h1>Account <span className="text-primary">Login</span></h1>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label htmlFor="userName">Name</label>
          <input type="text" name="userName" value={userName} onChange={onChange}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" value={password} onChange={onChange}/>
        </div>
        <input type="submit" value="Login" className="btn btn-primary btn-block" />
      </form>
    </div>
  )
}

export default Login
