import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Signup = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'member' });
  const [error, setError] = useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const result = await signup(form);
      navigate(`/${result.user.role}`);
    } catch (err) {
      setError(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12">
      <div className="w-full max-w-md space-y-8 rounded-3xl bg-slate-900/90 p-10 shadow-soft ring-1 ring-white/10">
        <div>
          <h1 className="text-3xl font-semibold">Create your gym account</h1>
          <p className="mt-2 text-slate-400">Start managing workouts, members, and subscriptions.</p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          {error && <p className="rounded-xl bg-rose-500/10 p-3 text-sm text-rose-300">{error}</p>}
          <div>
            <label className="mb-2 block text-sm text-slate-300">Full name</label>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-2xl bg-slate-950 px-4 py-3"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Email</label>
            <input
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-2xl bg-slate-950 px-4 py-3"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-slate-300">Password</label>
            <input
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-2xl bg-slate-950 px-4 py-3"
            />
          </div>
          <button className="w-full rounded-2xl bg-sky-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">
            Create account
          </button>
        </form>
        <p className="text-center text-sm text-slate-500">
          Already have an account? <Link to="/login" className="text-sky-400 hover:text-sky-300">Sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
