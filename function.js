function changeLight(color) {

            // Select all traffic lights

            let red = document.getElementById("redLight");
            let yellow = document.getElementById("yellowLight");
            let green = document.getElementById("greenLight");

            // Select status elements

            let statusText = document.getElementById("statusText");
            let statusMessage = document.getElementById("statusMessage");

            // Select car

            let car = document.getElementById("car");

            // Turn off all lights first

            red.classList.remove("active");
            yellow.classList.remove("active");
            green.classList.remove("active");

            // Switch Case Logic

            switch (color) {

                case "red":

                    red.classList.add("active");

                    statusText.innerText = "STOP! 🛑";
                    statusMessage.innerText = "Red light is ON. All traffic must stop.";

                    car.style.left = "10%";

                    break;


                case "yellow":

                    yellow.classList.add("active");

                    statusText.innerText = "GET READY! ⚠️";
                    statusMessage.innerText = "Yellow light is ON. Prepare to move.";

                    car.style.left = "10%";

                    break;


                case "green":

                    green.classList.add("active");

                    statusText.innerText = "GO! 🟢";
                    statusMessage.innerText = "Green light is ON. Traffic can move.";

                    car.style.left = "85%";

                    break;


                default:

                    statusText.innerText = "Invalid Signal";
                    statusMessage.innerText = "Please select a valid traffic light.";

            }

        }
 