function updateCalendar() {
  const now = new Date();

  const date = now.getDate(); 
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June",
                  "July", "August", "September", "October", "November", "December"];

  const dayName = days[now.getDay()];     
  const monthName = months[now.getMonth()];

  document.getElementById("day").textContent = date;
  document.getElementById("month").textContent = monthName;
  document.getElementById("weekday").textContent = dayName;
}

updateCalendar();
