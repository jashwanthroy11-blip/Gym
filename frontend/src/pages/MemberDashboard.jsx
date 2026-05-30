import React from 'react';
import { Link } from 'react-router-dom';

const MemberDashboard = () => {
  return (
    <div className="antialiased min-h-screen pb-24 bg-[#0a0a0a] text-e2e2e2 font-body-md selection:bg-primary-container selection:text-on-primary-container">
      {/* Top App Bar */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#0a0a0a]/80 backdrop-blur-[20px] border-b border-white/10 flex justify-between items-center px-5 h-16">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full border-2 border-primary-container overflow-hidden">
            <img 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCb6az7vmHbQsGCYfKvO5Oyf2Lt50XxGYy9-n3W5ZPn8M27h_KZVxbcKn9uPA1zXk9buNQ6CrXslED_EfqDQeNvfzeERsXUth_7JC3LdSTjJe9slHwXhf4UcmjjhrVLsklpZxTPS955ye1f9lrsZKHJ3n587GjRuoadbyJwr90TehquvMTNF1D38qZahubvbEhS6_ePe4DGbMShmHzdn7vsFYlsC21GkLSHIFuoDJA4ZMK-s3Gsz8qsK_ErW5udZTZLXhzlSquitQ"
              alt="User Profile"
            />
          </div>
          <h1 className="font-headline-lg text-headline-md text-primary-container italic tracking-tighter uppercase">HIGH-VELOCITY</h1>
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/settings"
            className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white"
          >
            Settings
          </Link>
          <button className="text-white/60 hover:text-primary-container transition-colors active:scale-95 duration-200">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        </div>
      </header>

      <main className="pt-24 px-container-margin max-w-5xl mx-auto space-y-lg">
        {/* Weekly Streak Section */}
        <section className="space-y-md">
          <div className="flex justify-between items-end">
            <h2 className="font-headline-md text-headline-md text-on-background">WEEKLY STREAK</h2>
            <div className="flex items-center gap-1 text-primary-container font-stat-value text-headline-md">
              <span>7</span>
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
            </div>
          </div>
          
          <div className="glass-card rounded-xl p-md flex justify-between items-center">
            {['MON', 'TUE', 'WED'].map(day => (
              <div key={day} className="flex flex-col items-center gap-sm">
                <span className="font-label-caps text-label-caps text-white/40">{day}</span>
                <div className="w-10 h-10 rounded-full flex items-center justify-center border border-primary-container bg-primary-container/10">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                </div>
              </div>
            ))}
            <div className="flex flex-col items-center gap-sm">
              <span className="font-label-caps text-label-caps text-white/40 text-primary-container">THU</span>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-primary-container neon-glow">
                <span className="material-symbols-outlined text-on-primary" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
              </div>
            </div>
            {['FRI', 'SAT', 'SUN'].map(day => (
              <div key={day} className="flex flex-col items-center gap-sm opacity-40">
                <span className="font-label-caps text-label-caps">{day}</span>
                <div className="w-10 h-10 rounded-full border border-white/20"></div>
              </div>
            ))}
          </div>
        </section>

        {/* KPI Grid (Bento Style) */}
        <section className="grid grid-cols-2 md:grid-cols-3 gap-md">
          <div className="glass-card rounded-xl p-lg flex flex-col justify-between aspect-square md:aspect-auto">
            <span className="material-symbols-outlined text-primary-container text-3xl">fitness_center</span>
            <div>
              <p className="font-label-caps text-label-caps text-white/40">TOTAL WORKOUTS</p>
              <h3 className="font-stat-value text-display-xl text-white">24</h3>
            </div>
          </div>
          <div className="glass-card rounded-xl p-lg flex flex-col justify-between aspect-square md:aspect-auto">
            <span className="material-symbols-outlined text-primary-container text-3xl">bolt</span>
            <div>
              <p className="font-label-caps text-label-caps text-white/40">CALORIES BURNED</p>
              <h3 className="font-stat-value text-display-xl text-white">12.8K</h3>
            </div>
          </div>
          <div className="glass-card rounded-xl p-lg flex flex-col justify-between col-span-2 md:col-span-1">
            <span className="material-symbols-outlined text-primary-container text-3xl">schedule</span>
            <div>
              <p className="font-label-caps text-label-caps text-white/40">ACTIVE MINUTES</p>
              <h3 className="font-stat-value text-display-xl text-white">842</h3>
            </div>
          </div>
        </section>

        {/* Personal Bests */}
        <section className="space-y-md">
          <h2 className="font-headline-md text-headline-md text-on-background">PERSONAL BESTS</h2>
          <div className="space-y-sm">
            {[
              { title: "Bench Press", updated: "2 days ago", icon: "fitness_center", stat: "125 KG", change: "+5kg PR" },
              { title: "5K Run", updated: "1 week ago", icon: "directions_run", stat: "19:42", change: "-0:15 PR" },
              { title: "Deadlift", updated: "3 weeks ago", icon: "fitbit_weighlifting", stat: "180 KG", change: "STABLE" }
            ].map((pb, idx) => (
              <div key={idx} className="flex items-center justify-between p-md border-b border-white/10 hover:bg-white/5 transition-colors group">
                <div className="flex items-center gap-md">
                  <div className="w-12 h-12 rounded bg-white/5 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white/40 group-hover:text-primary-container transition-colors">{pb.icon}</span>
                  </div>
                  <div>
                    <p className="font-headline-md text-body-lg text-white">{pb.title}</p>
                    <p className="font-label-caps text-[10px] text-white/40 uppercase">Last updated: {pb.updated}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-stat-value text-headline-md text-primary-container">{pb.stat}</p>
                  <p className="font-label-caps text-[10px] text-white/20">{pb.change}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Floating AI Coach Button */}
      <button className="fixed right-container-margin bottom-24 w-14 h-14 rounded-full bg-primary-container text-on-primary shadow-lg neon-glow flex items-center justify-center active:scale-90 transition-transform z-40">
        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>smart_toy</span>
      </button>

      {/* Bottom Navigation Bar */}
      <nav className="fixed bottom-0 left-0 w-full z-50 bg-[#0a0a0a]/90 backdrop-blur-[20px] border-t border-white/10 flex justify-around items-center px-2 py-3 h-20 rounded-t-lg shadow-[0_-4px_20px_rgba(57,255,20,0.05)]">
        {[
          { icon: 'fitness_center', label: 'Workout', active: true },
          { icon: 'monitoring', label: 'Progress', active: false },
          { icon: 'restaurant', label: 'Nutrition', active: false },
          { icon: 'person', label: 'Profile', active: false }
        ].map((item, idx) => (
          <Link key={idx} to="#" className={`flex flex-col items-center justify-center transition-all active:scale-90 duration-150 ${item.active ? 'text-[#39FF14] relative after:content-[""] after:absolute after:-bottom-1 after:w-1 after:h-1 after:bg-[#39FF14] after:rounded-full' : 'text-white/40 hover:text-white'}`}>
            <span className="material-symbols-outlined">{item.icon}</span>
            <span className="font-['Lexend'] text-[10px] font-medium uppercase tracking-widest mt-1">{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default MemberDashboard;
