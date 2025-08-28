 // heart Count part 

        let totalHearts = 0;

        const heartIcons = document.querySelectorAll(".heart-icon");
        const heartCountSpan = document.getElementById("heart-count");

        heartIcons.forEach(icon => {
            icon.addEventListener("click", () => {
                totalHearts++;
                heartCountSpan.textContent = totalHearts;

                // visual indication (optional)
                icon.classList.add("text-red-600");
                icon.classList.remove("text-gray-400");
            });
        });

// callButtons & callHistory part 

        let coins = 100; 

        // DOM Elements
        const coinCountSpan = document.getElementById("coin-count");
        const callButtons = document.querySelectorAll(".fa-phone");
        const callHistory = document.getElementById("call-history");
        const clearButton = document.getElementById("clear-history");

        // Update coin display
        function updateCoins() {
            coinCountSpan.textContent = coins;
        }

        // Add to Call History
        function addToHistory(serviceName, serviceNumber) {
            const historyItem = document.createElement("div");
            historyItem.className = "p-[16px] bg-gray-200 rounded-xl";
            historyItem.innerHTML = `
      <p class="text-base font-semibold">${serviceName}</p>
      <div class="flex justify-between text-xs text-gray-500">
        <span>${serviceNumber}</span>
        <span>${new Date().toLocaleTimeString()}</span>
      </div>
    `;
            callHistory.prepend(historyItem);
        }

        // Handle Call Button Click
        callButtons.forEach(icon => {
            icon.closest("button").addEventListener("click", () => {
                const card = icon.closest(".bg-white");
                const serviceName = card.querySelector("h2").textContent.trim();
                const serviceNumber = card.querySelector("p.text-2xl").textContent.trim();

                if (coins < 20) {
                    alert("Not enough coins to make a call.");
                    return;
                }

                coins -= 20;
                updateCoins();

                alert(`📞 Calling ${serviceName} at ${serviceNumber}`);
                addToHistory(serviceName, serviceNumber);
            });
        });

        //  History will clear
        clearButton.addEventListener("click", () => {
            callHistory.innerHTML = "";
        });

        // coin count on page load 
        updateCoins();



        //   copy section 


        document.addEventListener("DOMContentLoaded", function () {
            let copyCount = 0;

           
            const copyIcons = document.querySelectorAll(".fa-copy");

            
            const copyCountSpan = document.getElementById("copy-count");

            
            copyIcons.forEach(icon => {
                icon.closest("button").addEventListener("click", () => {
                    
                    const card = icon.closest(".bg-white");

                    
                    const serviceNumber = card.querySelector("p.text-2xl").textContent.trim();

                    
                    navigator.clipboard.writeText(serviceNumber)
                        .then(() => {
                            copyCount++;

                       
                            if (copyCountSpan) {
                                copyCountSpan.textContent = copyCount;
                            }

                           
                            alert(`Copied: ${serviceNumber}`);
                        })
                        .catch(err => {
                            alert("Failed to copy the number.");
                            console.error(err);
                        });
                });
            });
        });