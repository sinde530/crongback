import { useCallback, useState } from 'react';

import styled from '@emotion/styled';

const Container = styled.div({
  width: '100%',
  margin: '0 auto',
});

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');

  const [mismatch, setMismatch] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);
  const [signUpError, setSignUpError] = useState('');

  console.log(setSignUpSuccess);
  console.log(setSignUpError);

  const onClickName = useCallback((e:any) => {
    setName(e.target.value);
  }, []);

  const onClickEmail = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const onClickPassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
      setMismatch(e.target.value !== passwordCheck);
    },
    [passwordCheck],
  );
  const onClickPasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
      setMismatch(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback((e:any) => {
    e.preventDefault();
    if (!mismatch) {
      console.log('Error');
    }
  }, [name, email, password, passwordCheck]);

  return (
    <Container>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="name"
            value={name}
            onChange={onClickName}
          />
        </div>

        <div>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={onClickEmail}
          />
        </div>

        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={onClickPassword}
          />
        </div>

        <div>
          <input
            type="password"
            name="passwordCheck"
            placeholder="passwordCheck"
            value={passwordCheck}
            onChange={onClickPasswordCheck}
          />
        </div>
        {mismatch && <p>비밀번호가 일치하지 않습니다.</p>}
        {!name && <p>이름을 입력해주세요.</p>}
        {signUpError && <p>{signUpError}</p>}
        {signUpSuccess && <p>회원가입이 되었습니다! 로그인해주세요.</p>}
        <div>
          <button type="submit">submit</button>
        </div>
      </form>
    </Container>
  );
}
