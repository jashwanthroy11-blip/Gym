import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import api from '../services/api';

const TrainerDashboard = () => {
  const { user, logout } = useAuth();
  const [members, setMembers] = useState([]);

  useEffect(() => {
    api.get('/trainer/members').then((res) => setMembers(res.data)).catch(console.error);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-sky-400">Trainer Dashboard</p>
            <h1 className="mt-3 text-3xl font-semibold">Hi {user?.name}</h1>
            <p className="mt-2 text-slate-400">Review assigned members, build workout plans, and track progress.</p>
          </div>
          <button
            onClick={logout}
            className="rounded-2xl bg-rose-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-rose-400"
          >
            Logout
          </button>
        </header>

        <section className="grid gap-4 lg:grid-cols-2">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Assigned Members</h2>
            <p className="mt-3 text-slate-400">Keep tabs on your members’ progress and training goals in one place.</p>
            <div className="mt-6 space-y-4">
              {members.length ? (
                members.map((member) => (
                  <div key={member._id} className="rounded-3xl bg-slate-950/80 p-4">
                    <p className="font-semibold text-slate-100">{member.name}</p>
                    <p className="text-sm text-slate-400">Goals: {member.goals || 'Not set'}</p>
                  </div>
                ))
              ) : (
                <p className="text-slate-500">No assigned members yet.</p>
              )}
            </div>
          </article>
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <h2 className="text-xl font-semibold">Workout Planning</h2>
            <p className="mt-3 text-slate-400">Create guided plans, assign diet details, and log workouts weekly.</p>
            <div className="mt-6 space-y-4 text-sm text-slate-400">
              <p>• Add workout routines for each member</p>
              <p>• Track calories burned and gym attendance</p>
              <p>• Provide personalized diet plans</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default TrainerDashboard;
