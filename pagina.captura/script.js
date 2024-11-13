// Exemplo básico para contagem regressiva
const countdown = () => {
    const countDate = new Date("June 27, 2024 20:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector(".countdown").innerHTML = `
        <div><span>${textDay}</span> Dias</div>
        <div><span>${textHour}</span> Horas</div>
        <div><span>${textMinute}</span> Minutos</div>
        <div><span>${textSecond}</span> Segundos</div>
    `;
};

setInterval(countdown, 1000);
