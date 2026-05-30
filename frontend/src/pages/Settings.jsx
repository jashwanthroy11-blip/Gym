import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const Settings = () => {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-5xl space-y-8">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Account Settings</p>
            <h1 className="mt-3 text-3xl font-semibold">Manage your profile and preferences</h1>
            <p className="mt-2 text-slate-400">Update your personal details, security settings, and notification preferences in one place.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              to={`/${user?.role || ''}`}
              className="rounded-2xl border border-slate-700 px-5 py-3 text-sm text-slate-300 transition hover:border-slate-500 hover:bg-slate-800"
            >
              Back to Dashboard
            </Link>
            <button
              onClick={logout}
              className="rounded-2xl bg-rose-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-400"
            >
              Logout
            </button>
          </div>
        </header>

        <section className="grid gap-6 xl:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Personal Information</h2>
              <p className="mt-2 text-slate-400">Your profile data is used to personalize the app experience and sign you in securely.</p>
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <p className="text-slate-400">Name</p>
                  <p className="mt-1 rounded-2xl bg-slate-950/70 px-4 py-3">{user?.name || 'N/A'}</p>
                </div>
                <div>
                  <p className="text-slate-400">Email</p>
                  <p className="mt-1 rounded-2xl bg-slate-950/70 px-4 py-3">{user?.email || 'N/A'}</p>
                </div>
              </div>
              <div className="grid gap-2 sm:grid-cols-2">
                <div>
                  <p className="text-slate-400">Role</p>
                  <p className="mt-1 rounded-2xl bg-slate-950/70 px-4 py-3 uppercase">{user?.role || 'member'}</p>
                </div>
                <div>
                  <p className="text-slate-400">Member since</p>
                  <p className="mt-1 rounded-2xl bg-slate-950/70 px-4 py-3">{new Date(user?.createdAt || Date.now()).toLocaleDateString()}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft space-y-6">
            <div>
              <h2 className="text-xl font-semibold">Security & Preferences</h2>
              <p className="mt-2 text-slate-400">Easily adjust your password, notifications, and app behavior.</p>
            </div>
            <div className="space-y-4 text-sm text-slate-300">
              <div className="rounded-3xl bg-slate-950/70 p-4">
                <p className="text-slate-400">Password</p>
                <p className="mt-2 text-slate-200">••••••••</p>
                <button className="mt-4 rounded-2xl border border-slate-700 px-4 py-3 text-sm text-slate-200 transition hover:border-slate-500">
                  Change password
                </button>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-4">
                <p className="text-slate-400">Notifications</p>
                <p className="mt-2 text-slate-200">Email updates, workout reminders, and app alerts are enabled.</p>
                <button className="mt-4 rounded-2xl border border-slate-700 px-4 py-3 text-sm text-slate-200 transition hover:border-slate-500">
                  Manage notifications
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Settings;
