import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-12 text-slate-100">
    <div className="max-w-xl rounded-3xl border border-slate-800 bg-slate-900/90 p-10 text-center shadow-soft">
      <p className="text-sm uppercase tracking-[0.3em] text-sky-400">404 Error</p>
      <h1 className="mt-4 text-4xl font-semibold">Page not found</h1>
      <p className="mt-4 text-slate-400">The page you are looking for does not exist. Return to your dashboard.</p>
      <Link className="mt-8 inline-flex rounded-2xl bg-sky-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-sky-400" to="/login">
        Go to Login
      </Link>
    </div>
  </div>
);

export default NotFound;
