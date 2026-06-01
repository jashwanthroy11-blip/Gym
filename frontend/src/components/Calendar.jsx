import { useMemo, useState } from 'react';

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const sampleEvents = {
  1: ['Leg day: squats + lunges', 'Meal prep: chicken + quinoa'],
  3: ['Cardio interval training', 'Stretching session'],
  7: ['Yoga recovery', 'Hydration check-in'],
  12: ['Upper body strength', 'Protein shake reminder'],
  18: ['Track run pace', 'Mobility drills'],
  24: ['Rest day', 'Weekly progress review'],
};

const Calendar = () => {
  const today = new Date();
  const [currentDate, setCurrentDate] = useState(new Date(today.getFullYear(), today.getMonth(), 1));

  const monthLabel = useMemo(
    () => currentDate.toLocaleString('default', { month: 'long', year: 'numeric' }),
    [currentDate]
  );

  const days = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const totalCells = firstDay + daysInMonth;
    return Array.from({ length: totalCells }, (_, index) => {
      const dayNumber = index - firstDay + 1;
      return dayNumber > 0 ? dayNumber : null;
    });
  }, [currentDate]);

  const navigateMonth = (offset) => {
    setCurrentDate((prev) => new Date(prev.getFullYear(), prev.getMonth() + offset, 1));
  };

  const selectedEvents = sampleEvents[today.getDate()] || ['No scheduled activities for today.'];

  return (
    <section className="space-y-md">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="font-headline-md text-headline-md text-on-background">Training Calendar</h2>
          <p className="text-sm text-white/50">Stay on track with your monthly workout schedule and upcoming sessions.</p>
        </div>
        <div className="inline-flex gap-2 rounded-full border border-white/10 bg-white/5 p-2">
          <button
            type="button"
            onClick={() => navigateMonth(-1)}
            className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Prev
          </button>
          <button
            type="button"
            onClick={() => navigateMonth(1)}
            className="rounded-full px-4 py-2 text-sm text-white/80 transition hover:bg-white/10"
          >
            Next
          </button>
        </div>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.8fr_1fr]">
        <div className="glass-card rounded-3xl p-6">
          <div className="mb-4 flex items-center justify-between">
            <span className="text-sm uppercase tracking-[0.35em] text-white/40">{monthLabel}</span>
            <div className="rounded-full bg-slate-950 px-3 py-1 text-xs uppercase text-slate-400">Today: {today.toLocaleDateString()}</div>
          </div>
          <div className="grid grid-cols-7 gap-2 text-center text-xs text-white/60">
            {WEEKDAYS.map((day) => (
              <div key={day} className="font-semibold">{day}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-2 mt-3 text-center text-sm">
            {days.map((day, index) => {
              const isToday = day === today.getDate() && currentDate.getMonth() === today.getMonth() && currentDate.getFullYear() === today.getFullYear();
              const hasEvent = day && sampleEvents[day];
              return (
                <div
                  key={`${currentDate.getMonth()}-${index}`}
                  className={`min-h-[4rem] rounded-3xl border border-white/10 px-2 py-3 transition ${
                    day ? 'bg-white/5 hover:bg-white/10' : 'bg-transparent'
                  } ${isToday ? 'border-primary-container bg-primary-container/10' : ''}`}
                >
                  {day ? (
                    <div className="flex h-full flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <span className={`text-sm ${isToday ? 'text-primary-container font-semibold' : 'text-white'}`}>{day}</span>
                        {hasEvent && <span className="h-2 w-2 rounded-full bg-primary-container" />}
                      </div>
                      {hasEvent && <p className="mt-2 text-[10px] text-white/40">{sampleEvents[day][0].slice(0, 16)}...</p>}
                    </div>
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="glass-card rounded-3xl p-6">
          <h3 className="text-lg font-semibold text-white">Today’s Schedule</h3>
          <p className="mt-2 text-sm text-white/50">Quick glance at your planned sessions and recovery tasks.</p>
          <div className="mt-5 space-y-4">
            {selectedEvents.map((event, idx) => (
              <div key={idx} className="rounded-3xl border border-white/10 bg-white/5 p-4">
                <p className="font-medium text-white">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calendar;
