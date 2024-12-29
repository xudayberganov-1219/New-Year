function updateCountdown() {
    const newYear = new Date('2025-01-01T00:00:00'); // Yangi yilga sanani belgilash
    const now = new Date();
    const difference = newYear - now;

    // Hisoblash
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // DOM elementlarga natijani chiqarish
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Har 1 soniyada taymerni yangilash
setInterval(updateCountdown, 1000);

// Dastlabki taymerni yangilash
updateCountdown();

// Qor donalarini yaratish
function createSnowflakes() {
    const snowflakeCount = 200; // Ko'proq qor donalari soni
    const container = document.body;

    for (let i = 0; i < snowflakeCount; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        
        // Qor donasining tasodifiy joylashuvini berish
        snowflake.style.left = Math.random() * 100 + 'vw'; // Ekranning kengligi bo'ylab
        snowflake.style.animationDuration = Math.random() * (30 - 10) + 10 + 's'; // Animatsiyaning davomiyligi
        snowflake.style.animationDelay = Math.random() * 5 + 's'; // Kechikish

        // Snowflake elementni qo'shish
        container.appendChild(snowflake);
    }
}

createSnowflakes();
