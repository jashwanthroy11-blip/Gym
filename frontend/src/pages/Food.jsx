import { Link } from 'react-router-dom';

const meals = [
  { time: 'Breakfast', item: 'Oats with berries', calories: 420, protein: '18g' },
  { time: 'Lunch', item: 'Grilled chicken salad', calories: 540, protein: '42g' },
  { time: 'Snack', item: 'Greek yogurt + almonds', calories: 220, protein: '14g' },
  { time: 'Dinner', item: 'Salmon, quinoa & greens', calories: 610, protein: '38g' }
];

const Food = () => {
  return (
    <div className="min-h-screen bg-slate-950 px-4 py-8 text-slate-100">
      <div className="mx-auto max-w-6xl space-y-6">
        <header className="flex flex-col gap-4 rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300">Food Tracker</p>
            <h1 className="mt-3 text-3xl font-semibold">Nutrition & meal planning</h1>
            <p className="mt-2 text-slate-400">Track meals, calories, macros, and smart food choices to stay on target.</p>
          </div>
          <Link
            to="/member"
            className="rounded-2xl border border-slate-700 px-5 py-3 text-sm text-slate-300 transition hover:border-slate-500 hover:bg-slate-800"
          >
            Back to Dashboard
          </Link>
        </header>

        <section className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Today’s summary</p>
                <h2 className="mt-3 text-2xl font-semibold">Daily macro target</h2>
              </div>
              <div className="rounded-full bg-slate-950/80 px-4 py-2 text-sm text-emerald-300">Balanced intake</div>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Calories</p>
                <p className="mt-3 text-3xl font-semibold text-white">1790</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Protein</p>
                <p className="mt-3 text-3xl font-semibold text-white">112g</p>
              </div>
              <div className="rounded-3xl border border-slate-800 bg-slate-950/80 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Carbs</p>
                <p className="mt-3 text-3xl font-semibold text-white">164g</p>
              </div>
            </div>
          </article>

          <article className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Meal guidance</p>
            <h3 className="mt-3 text-xl font-semibold">Smart choices for recovery</h3>
            <ul className="mt-5 space-y-4 text-slate-300">
              <li>• Prioritize lean protein and colorful vegetables.</li>
              <li>• Keep snacks high-protein and low added sugar.</li>
              <li>• Hydrate before and after workouts.</li>
            </ul>
          </article>
        </section>

        <section className="rounded-3xl border border-slate-800 bg-slate-900/80 p-6 shadow-soft">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Meal log</p>
              <h2 className="mt-3 text-2xl font-semibold">What you ate today</h2>
            </div>
            <button className="rounded-2xl bg-emerald-500 px-5 py-2 text-sm font-semibold text-slate-950 transition hover:bg-emerald-400">
              Add meal
            </button>
          </div>
          <div className="mt-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80">
            <table className="min-w-full text-left text-sm text-slate-200">
              <thead className="bg-slate-900/80 text-slate-400">
                <tr>
                  <th className="px-4 py-4">Meal</th>
                  <th className="px-4 py-4">Item</th>
                  <th className="px-4 py-4">Calories</th>
                  <th className="px-4 py-4">Protein</th>
                </tr>
              </thead>
              <tbody>
                {meals.map((meal) => (
                  <tr key={meal.time} className="border-t border-slate-800/80 hover:bg-white/5">
                    <td className="px-4 py-4 font-medium text-white">{meal.time}</td>
                    <td className="px-4 py-4 text-slate-300">{meal.item}</td>
                    <td className="px-4 py-4">{meal.calories}</td>
                    <td className="px-4 py-4">{meal.protein}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Food;
