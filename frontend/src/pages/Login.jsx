import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const result = await login(email, password);
      navigate(`/${result.user.role}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-3xl bg-slate-900/90 p-10 shadow-soft ring-1 ring-white/10">
        <div>
          <h1 className="text-3xl font-semibold">Gym Management Login</h1>
          <p className="mt-2 text-slate-400">Secure access for Admin, Trainer, and Member dashboards.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <p className="rounded-xl bg-rose-500/10 p-3 text-sm text-rose-300">{error}</p>}
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl bg-slate-950 px-4 py-3"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl bg-slate-950 px-4 py-3"
            />
          </div>
          <button className="w-full rounded-2xl bg-sky-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">
            Sign in
          </button>
        </form>
        <p className="text-center text-sm text-slate-500">
          Don’t have an account? <Link to="/signup" className="text-sky-400 hover:text-sky-300">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
