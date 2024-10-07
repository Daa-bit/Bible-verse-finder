document.getElementById('submit').addEventListener('click', function() {
    const birthdayInput = document.getElementById('birthday').value;
    
    if (!birthdayInput) {
        alert('Please enter your birthday.');
        return;
    }

    const birthday = new Date(birthdayInput);
    const today = new Date();

    // Calculate age in years
    const age = today.getFullYear() - birthday.getFullYear();
    const monthDiff = today.getMonth() - birthday.getMonth();
    const dayDiff = today.getDate() - birthday.getDate();
    
    const finalAge = (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) ? age - 1 : age;

    // Calculate days lived
    const daysLived = Math.floor((today - birthday) / (1000 * 60 * 60 * 24));

    // Calculate heartbeats (assuming an average heart rate of 80 bpm)
    const averageHeartRate = 80; // beats per minute
    const heartbeats = finalAge * 365.25 * 24 * 60 * averageHeartRate;

    // Fun fact
    const funFacts = [
        "You've lived through multiple technological revolutions!",
        "You have a unique perspective shaped by your experiences!",
        "You are part of a global community of billions!",
        "Every year, the world celebrates your existence!",
        "You have a wealth of knowledge that no one else has!",
    ];
    const randomFact = funFacts[Math.floor(Math.random() * funFacts.length)];

    // Display the stats
    document.getElementById('age').textContent = `You are ${finalAge} years old.`;
    document.getElementById('daysLived').textContent = `You've lived for approximately ${daysLived} days.`;
    document.getElementById('heartbeats').textContent = `Your heart has beaten approximately ${Math.floor(heartbeats).toLocaleString()} times.`;
    document.getElementById('funFact').textContent = randomFact;

    document.getElementById('stats').classList.remove('hidden');
});
