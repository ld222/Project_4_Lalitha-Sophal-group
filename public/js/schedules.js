const schedules = document.getElementById('schedules');
const dayError = document.querySelector('.errorMessage.day');
const startTimeError = document.querySelector('.errorMessage.starttime');
const endTimeError = document.querySelector('.errorMessage.endtime');

schedules.addEventListener('submit', async (e) => {   
    e.preventDefault();
    const day = schedules.day.value;
    const starttime = schedules.starttime.value;
    const endtime = schedules.endtime.value;

    dayError.textContent = '';
    startTimeError.textContent = '';
    endTimeError.textContent = '';

    try {

         const res = await fetch('/schedules', {
             method: 'POST',
             body: JSON.stringify({day, starttime, endtime}),
             headers: { 'Content-Type': 'application/json'}
        })
        
        const data = await res.json();

        if(data.errors) {
            dayError.textContent = data.errors.day;
            startTimeError.textContent = data.errors.starttime;
            endTimeError.textContent = data.errors.endtime

        }
        if(data.schedules) {
             location.assign('/schedules');
        }
    }
    catch(err) {
        console.log(err);
    }

});

