import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function LoginSignup() {
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [role, setRole] = useState('Admin');

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="container">
      <h2>{isLoginForm ? 'Login' : 'Sign Up'}</h2>
      {isLoginForm ? (
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary mx-2">Login</button>
          <Link to= '/'>
          <button className="btn btn-secondary">Back to Homepage</button>
          </Link>
        </form>
      ) : (
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <select id="role" className="form-control" value={role} onChange={handleRoleChange}>
              <option value="Admin">Admin</option>
              <option value="Resident">Resident</option>
              <option value="Local Law Enforcement">Local Law Enforcement</option>
              <option value="Community Organization">Community Organization</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary mx-2">Sign Up</button>
          <Link to= '/'>
          <button className="btn btn-secondary">Back to Homepage</button>
          </Link>
        </form>
      )}
      <button onClick={toggleForm} className="btn btn-link">
        {isLoginForm ? 'Don\'t have an account? Sign up here' : 'Already have an account? Log in here'}
      </button>
    </div>
  );
}
export default LoginSignup;