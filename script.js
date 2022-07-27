
setInterval(() => {
    date = new Date();
    hour_time = date.getHours();
    min_time = date.getMinutes();
    sec_time = date.getSeconds();
    // h_rotation = (30*hour_time) + (min_time/2);
    // m_rotation = 6*min_time;
    // s_rotation = 6*sec_time;
    
    document.getElementById('hide').style.display = "block";

    const hour = document.querySelector('.hour');
    const min = document.querySelector('.min');
    const sec = document.querySelector('.sec');

    hour.style.transform = `rotateZ(${(30 * hour_time) + (min_time / 2)}deg)`;
    min.style.transform = `rotateZ(${6 * min_time}deg)`;
    sec.style.transform = `rotateZ(${6 * sec_time}deg)`;

    // Digital clock
    am_pm = "AM";
    const dig_time = document.querySelector('.dig_time');
    if (hour_time > 12) {
        am_pm = "PM";
        hour_time = hour_time - 12;
    }
    if (hour_time < 10) {
        hour_time = "0" + hour_time;
    }
    if (min_time < 10) {
        min_time = "0" + min_time;
    }
    if (sec_time < 10) {
        sec_time = "0" + sec_time;
    }

    dig_time.textContent = hour_time + ":" + min_time + ":" + sec_time + " " + am_pm;

    // date
    Day = date.getDay();
    Month = date.getMonth();
    Date_num = date.getDate();
    Year = date.getFullYear();

    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let daysoftheweek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const dig_date = document.querySelector('.dig_date');
    dig_date.textContent = daysoftheweek[Day] + ", " + months[Month] + " " + Date_num + " " + Year;

}, 1000)

