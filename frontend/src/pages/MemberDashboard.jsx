import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

const MemberDashboard = () => {
  const { user, logout } = useAuth();
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    api.get('/member/profile').then((res) => setProfile(res.data)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Member Dashboard</p>
            <h1 className="mt-3 text-3xl font-semibold">Welcome, {user?.name}</h1>
            <p className="mt-2 text-slate-400">Your workout, progress, subscription, and payment activity in one dashboard.</p>
          </div>
          <button
            onClick={logout}
            className="rounded-2xl bg-rose-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-400"
          >
            Logout
          </button>
        </header>

        <section className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Subscription</h2>
            <p className="mt-3 text-slate-400">{profile?.subscriptionPlan?.name || 'No plan selected'}</p>
            <p className="mt-2 text-slate-500">Status: {profile?.subscriptionStatus || 'inactive'}</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Workout Plan</h2>
            <p className="mt-3 text-slate-400">{profile?.workoutPlan || 'No workout plan assigned yet.'}</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Diet Plan</h2>
            <p className="mt-3 text-slate-400">{profile?.dietPlan || 'No diet plan assigned yet.'}</p>
          </article>
        </section>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Recent Progress</h2>
            <div className="mt-4 space-y-3 text-slate-400">
              {profile?.progress?.length ? (
                profile.progress.slice(-3).reverse().map((entry, index) => (
                  <div key={index} className="rounded-2xl bg-slate-950/80 p-4">
                    <p>{new Date(entry.date).toLocaleDateString()}</p>
                    <p>Weight: {entry.weight || '—'} kg</p>
                    <p>BMI: {entry.bmi || '—'}</p>
                  </div>
                ))
              ) : (
                <p>No progress logged yet.</p>
              )}
            </div>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Payment History</h2>
            <div className="mt-4 space-y-3 text-slate-400">
              {profile?.payments?.length ? (
                profile.payments.slice(-3).reverse().map((payment, index) => (
                  <div key={index} className="rounded-2xl bg-slate-950/80 p-4">
                    <p>{new Date(payment.date).toLocaleDateString()}</p>
                    <p>Amount: ${payment.amount}</p>
                    <p>Status: {payment.status}</p>
                  </div>
                ))
              ) : (
                <p>No payments recorded yet.</p>
              )}
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default MemberDashboard;
