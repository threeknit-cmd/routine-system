function buildDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function calculateCompletionPercentage(done, total) {
  if (!total) return 0;
  return Math.round((done / total) * 100);
}

function calculateStreak(timeline, userProgress) {
  let streak = 0;
  let currentStreak = 0;

  timeline.forEach((day) => {
    const dayData = userProgress[day.key];
    const tasks = dayData?.tasks || [];
    const isCompleted = tasks.length > 0 && tasks.every((task) => task.completed);

    if (isCompleted) {
      currentStreak += 1;
      streak = Math.max(streak, currentStreak);
    } else {
      currentStreak = 0;
    }
  });

  return streak;
}

function getMetricColor(percent) {
  if (percent < 40) return '#ef4444';
  if (percent < 75) return '#eab308';
  return '#10b981';
}

function getConsistencyLabel(percent) {
  if (percent >= 80) return 'Sangat Produktif 🔥';
  if (percent >= 50) return 'Cukup Stabil ⚡';
  return 'Butuh Fokus 🎯';
}

export {
  buildDateKey,
  calculateCompletionPercentage,
  calculateStreak,
  getMetricColor,
  getConsistencyLabel
};
