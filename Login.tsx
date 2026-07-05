import React, { useState } from 'react';

type User = {
  name: string;
  token: string;
};

export default function Login() {
  const [token, setToken] = useState('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleLogin = () => {
    const trimmedToken = token.trim();

    if (!trimmedToken) {
      setUser(null);
      setError('Enter a login token before continuing.');
      return;
    }

    setUser({ name: 'User', token: trimmedToken });
    setError(null);
  };

  if (user) {
    return (
      <main>
        <h1>Welcome, {user.name}</h1>
        <p>Token accepted.</p>
        <button type="button" onClick={() => setUser(null)}>
          Log out
        </button>
      </main>
    );
  }

  return (
    <main>
      <h1>Login</h1>
      <label htmlFor="login-token">Token</label>
      <input
        id="login-token"
        value={token}
        onChange={(event) => setToken(event.target.value)}
        placeholder="Paste your token"
      />
      {error ? <p role="alert">{error}</p> : null}
      <button type="button" onClick={handleLogin}>
        Log in
      </button>
    </main>
  );
}
