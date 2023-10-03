function calculateLovePercentage() {
    const yourName = document.getElementById("yourName").value;
    const partnerName = document.getElementById("partnerName").value;

    if (!yourName || !partnerName) {
        alert("Please enter both names.");
        return;
    }

    const lovePercentage = Math.floor(Math.random() * 101); // Generate a random percentage between 0 and 100

    const result = document.getElementById("result");
    result.innerHTML = `Your love percentage with ${partnerName} is ${lovePercentage}%! ❤️`;
}
