import { useCallback, useState } from 'react';

import { Link } from 'react-router-dom';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onClickEmail = useCallback((e:any) => {
    setEmail(e.currentTarget.value);
  }, []);

  const onClickPassword = useCallback((e:any) => {
    setPassword(e.currentTarget.value);
  }, []);

  const onSubmit = useCallback((e:any) => {
    e.preventDefault();
  }, [email, password]);

  return (
    <div>
      <h2>Login </h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="email"
            onChange={onClickEmail}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={password}
            placeholder="password"
            onChange={onClickPassword}
          />
        </div>
        <div>
          <button type="submit">Login</button>
          <Link to="/signup">회원가입 하기</Link>
        </div>
      </form>
    </div>
  );
}
