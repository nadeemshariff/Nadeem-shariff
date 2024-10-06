document
        .getElementById("generate")
        .addEventListener("click", function () {
          const min = parseInt(document.getElementById("min").value);
          const max = parseInt(document.getElementById("max").value);

          if (isNaN(min) || isNaN(max)) {
            document.getElementById("result").value =
              "Please enter valid numbers";
            return;
          }

          if (min >= max) {
            document.getElementById("result").value =
              "Maximum must be greater than minimum";
            return;
          }

          const randomNumber =
            Math.floor(Math.random() * (max - min + 1)) + min;
          document.getElementById("result").value = randomNumber;

          // Add time limit and display
          const timeLimit = 5; // 5 seconds
          let timeLeft = timeLimit;
          document.getElementById(
            "timeLeft"
          ).textContent = `Time left: ${timeLeft}s`;

          const timer = setInterval(() => {
            timeLeft--;
            document.getElementById(
              "timeLeft"
            ).textContent = `Time left: ${timeLeft}s`;

            if (timeLeft <= 0) {
              clearInterval(timer);
              document.getElementById("result").value = "";
              document.getElementById("timeLeft").textContent = "Time's up!";
            }
          }, 1000);
        });

      document.getElementById("result").addEventListener("input", function () {
        this.value = this.value.replace(/[^0-9]/g, "");
      });

      // Add a new element to display the time left
      const timeLeftElement = document.createElement("div");
      timeLeftElement.id = "timeLeft";
      timeLeftElement.className = "mt-4 text-center text-lg font-bold";
      document.querySelector(".bg-indigo-400").appendChild(timeLeftElement);


    //   document.getElementById("generate").addEventListener("click", function () {
    //     const minInput = document.getElementById("min");
    //     const maxInput = document.getElementById("max");
    //     const resultInput = document.getElementById("result");
    //     const timeLeftElement = document.getElementById("timeLeft");
      
    //     const min = parseInt(minInput.value);
    //     const max = parseInt(maxInput.value);
      
    //     if (isNaN(min) || isNaN(max)) {
    //       resultInput.value = "Please enter valid numbers";
    //       return;
    //     }
      
    //     if (min >= max) {
    //       resultInput.value = "Maximum must be greater than minimum";
    //       return;
    //     }
      
    //     const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    //     resultInput.value = randomNumber;
      
    //     // Add time limit and display
    //     const timeLimit = 5; // 5 seconds
    //     let timeLeft = timeLimit;
    //     updateTimeLeft();
      
    //     const timer = setInterval(() => {
    //       timeLeft--;
    //       updateTimeLeft();
      
    //       if (timeLeft <= 0) {
    //         clearInterval(timer);
    //         resultInput.value = "";
    //         timeLeftElement.textContent = "Time's up!";
    //       }
    //     }, 1000);
      
    //     function updateTimeLeft() {
    //       timeLeftElement.textContent = `Time left: ${timeLeft}s`;
    //     }
    //   });
      
    //   document.getElementById("result").addEventListener("input", function () {
    //     this.value = this.value.replace(/[^0-9]/g, "");
    //   });
      
    //   // Add a new element to display the time left
    //   const timeLeftElement = document.createElement("div");
    //   timeLeftElement.id = "timeLeft";
    //   timeLeftElement.className = "mt-4 text-center text-lg font-bold";
    //   document.querySelector(".bg-indigo-400").appendChild(timeLeftElement);