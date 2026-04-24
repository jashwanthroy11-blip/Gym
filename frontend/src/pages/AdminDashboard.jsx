import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

const statsCards = [
  { key: 'totalMembers', label: 'Total Members' },
  { key: 'totalTrainers', label: 'Total Trainers' },
  { key: 'activePlans', label: 'Active Plans' },
  { key: 'revenue', label: 'Revenue' }
];

const AdminDashboard = () => {
  const { user, logout } = useAuth();
  const [stats, setStats] = useState({});

  useEffect(() => {
    api.get('/admin/stats').then((res) => setStats(res.data)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Admin Dashboard</p>
            <h1 className="mt-3 text-3xl font-semibold">Welcome back, {user?.name}</h1>
            <p className="mt-2 text-slate-400">Manage members, subscriptions, analytics, and team performance.</p>
          </div>
          <button
            onClick={logout}
            className="rounded-2xl bg-rose-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-400"
          >
            Logout
          </button>
        </header>

        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {statsCards.map((card) => (
            <article key={card.key} className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{card.label}</p>
              <p className="mt-4 text-4xl font-semibold text-slate-100">{stats[card.key] ?? '—'}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-4 lg:grid-cols-3">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Membership Management</h2>
            <p className="mt-3 text-slate-400">Add, edit, or remove members, view assigned trainers, and manage subscription statuses.</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Subscription Plans</h2>
            <p className="mt-3 text-slate-400">Create monthly and yearly plans with clear pricing and benefits for each member tier.</p>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Payments & Dues</h2>
            <p className="mt-3 text-slate-400">Track member payments, invoices, and automate reminders for upcoming renewals.</p>
          </article>
        </section>
      </div>
    </div>
  );
};

export default AdminDashboard;
