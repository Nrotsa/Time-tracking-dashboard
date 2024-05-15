const diverse = {
  daily: {
    hoursWork: "5hrs",
    lastWork: "Last Day - 7hrs",
    hoursPlay: "1hr",
    lastPlay: "Last Day - 2hrs",
    hoursStudy: "0hrs",
    lastStudy: "Last Day - 1hr",
    hoursExercise: "1hr",
    lastExercise: "Last Day - 1hr",
    hoursSocial: "1hr",
    lastSocial: "Last Day - 3hrs",
    hoursSelf: "0hrs",
    lastSelf: "Last Day - 1hr",
  },
  weekly: {
    hoursWork: "32hrs",
    lastWork: "Last Week - 36hrs",
    hoursPlay: "10hrs",
    lastPlay: "Last Week - 10hrs",
    hoursStudy: "4hrs",
    lastStudy: "Last Week - 7hrs",
    hoursExercise: "4hrs",
    lastExercise: "Last Week - 5hr",
    hoursSocial: "5hrs",
    lastSocial: "Last Week - 10hrs",
    hoursSelf: "2hrs",
    lastSelf: "Last Week - 2hr",
  },
  monthly: {
    hoursWork: "103hrs",
    lastWork: "Last Month - 128hrs",
    hoursPlay: "23hrs",
    lastPlay: "Last Month - 29hrs",
    hoursStudy: "13hrs",
    lastStudy: "Last Month - 19hrs",
    hoursExercise: "11hrs",
    lastExercise: "Last Month - 18hr",
    hoursSocial: "21hrs",
    lastSocial: "Last Month - 23hrs",
    hoursSelf: "7hrs",
    lastSelf: "Last Month - 11hr",
  },
};

const elementsToChange = [
  "hoursWork",
  "lastWork",
  "hoursPlay",
  "lastPlay",
  "hoursStudy",
  "lastStudy",
  "hoursExercise",
  "lastExercise",
  "hoursSocial",
  "lastSocial",
  "hoursSelf",
  "lastSelf",
];
const dailySelect = document.querySelector("#Daily-button");
const weeklySelect = document.querySelector("#Weekly-button");
const monthlySelect = document.querySelector("#Monthly-button");
dailySelect.addEventListener("click", () => {
  elementsToChange.forEach((id) => {
    document.getElementById(id).textContent = diverse.daily[id];
  });
  dailySelect.classList.add("active");
  weeklySelect.classList.remove("active");
  monthlySelect.classList.remove("active");
});

weeklySelect.addEventListener("click", () => {
  elementsToChange.forEach((id) => {
    document.getElementById(id).textContent = diverse.weekly[id];
  });
  weeklySelect.classList.add("active");
  dailySelect.classList.remove("active");
  monthlySelect.classList.remove("active");
});

monthlySelect.addEventListener("click", () => {
  elementsToChange.forEach((id) => {
    document.getElementById(id).textContent = diverse.monthly[id];
  });
  monthlySelect.classList.add("active");
  weeklySelect.classList.remove("active");
  dailySelect.classList.remove("active");
});
