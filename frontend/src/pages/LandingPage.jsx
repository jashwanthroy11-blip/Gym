import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Dumbbell, Calendar, Target, ChevronRight, Zap, Shield, Users } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="border-b border-white/10 bg-slate-950/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Dumbbell className="w-8 h-8 text-cyan-400" />
              <span className="text-xl font-bold tracking-wider text-white">IRON<span className="text-cyan-400">TRACK</span></span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/login" className="text-sm font-medium hover:text-cyan-400 transition-colors">Log in</Link>
              <Link 
                to="/signup" 
                className="bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-sm font-bold py-2 px-4 rounded-full transition-all shadow-[0_0_15px_rgba(6,182,212,0.4)] hover:shadow-[0_0_25px_rgba(6,182,212,0.6)]"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-sm font-medium mb-8">
              <Zap className="w-4 h-4" />
              <span>The Next Generation Gym Platform</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-6">
              Forge Your <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Ultimate Physique
              </span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-10 leading-relaxed">
              Elevate your fitness journey with AI-driven insights, advanced macro tracking, and dynamic workout planning. Built for members, trainers, and admins.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link 
                to="/signup" 
                className="w-full sm:w-auto flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-lg font-bold py-3 px-8 rounded-full transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transform hover:-translate-y-1"
              >
                Start Free Trial <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Everything You Need to Succeed</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive tools designed to eliminate the guesswork and maximize your results.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<Activity />}
              title="Progress Tracking"
              description="Log your daily workouts, monitor personal records, and visualize your gains over time with intuitive charts."
            />
            <FeatureCard 
              icon={<Target />}
              title="Macro Calculator"
              description="Calculate precise calorie and macronutrient targets using the Mifflin-St Jeor formula tailored to your goals."
            />
            <FeatureCard 
              icon={<Calendar />}
              title="Workout Planner"
              description="Build and schedule your weekly routines. Keep your training structured and never miss a beat."
            />
            <FeatureCard 
              icon={<Users />}
              title="Trainer Integration"
              description="Connect with certified trainers to receive custom plans, feedback, and direct coaching right in the app."
            />
            <FeatureCard 
              icon={<Shield />}
              title="Admin Controls"
              description="Powerful gym management features for admins to handle memberships, classes, and facility operations."
            />
            <FeatureCard 
              icon={<Zap />}
              title="Real-time Analytics"
              description="Get instant feedback on your performance and nutrition with dynamic dashboards and reporting."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-cyan-950/20"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform?</h2>
          <p className="text-xl text-slate-300 mb-10">Join thousands of athletes who are already optimizing their training with IronTrack.</p>
          <Link 
            to="/signup" 
            className="inline-flex items-center justify-center bg-white text-slate-900 hover:bg-slate-100 text-lg font-bold py-4 px-10 rounded-full transition-all transform hover:scale-105"
          >
            Create Your Account
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Dumbbell className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-bold text-white tracking-wider">IRON<span className="text-cyan-400">TRACK</span></span>
          </div>
          <p className="text-slate-500 text-sm">© {new Date().getFullYear()} IronTrack Fitness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors group">
      <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all">
        {React.cloneElement(icon, { className: 'w-6 h-6' })}
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
      <p className="text-slate-400 leading-relaxed">{description}</p>
    </div>
  );
};

export default LandingPage;
