import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      Login Page
      {' '}
      <Link to="/singup">SignUp</Link>
    </div>
  );
}
