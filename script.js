function toggleDetails(playerId) {
    const playerDetails = document.getElementById(playerId);
    if (playerDetails.style.display === "block") {
        playerDetails.style.display = "none";
    } else {
        playerDetails.style.display = "block";
    }
}

