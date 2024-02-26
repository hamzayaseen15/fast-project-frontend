import React from 'react';
import { Link } from 'react-router-dom';
import '../../src/style.css';

function Homepage() {
  return (
    <div className="container">
      <h2>Welcome to Our Neighborhood Safety Platform</h2>
      <p>Explore our features and stay connected with your community!</p>
      <Link to="/login-signup">
        <button className="btn btn-primary">Get Started</button>
      </Link>
    </div>
  );
}
export default Homepage;
