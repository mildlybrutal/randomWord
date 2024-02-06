document.addEventListener("DOMContentLoaded", function () {
    const clickButton = document.querySelector("#clicker");
    const randomWordDisplay = document.querySelector("#random-word");

    clickButton.addEventListener("click", function () {
        const apiKey = "d11hETUiPqZi1+x+dlBCSQ==5offOApHwgjx2C4F"; // Replace with your actual API key

        fetch("https://api.api-ninjas.com/v1/randomword", {
            method: "GET",
            headers: {
                "X-Api-Key": apiKey,
                "Content-Type": "application/json",
            },
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then((data) => {
            
            randomWordDisplay.textContent = data.word;
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
    });
});
