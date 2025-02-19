 function appendToDisplay(value) {
            let display = document.getElementById("display");
            if (display.value === "0") display.value = "";
            display.value += value;
        }

        function clearDisplay() {
            document.getElementById("display").value = "0";
        }

        function deleteLast() {
            let display = document.getElementById("display");
            display.value = display.value.slice(0, -1) || "0";
        }

        function calculateResult() {
            try {
                document.getElementById("display").value = eval(document.getElementById("display").value);
            } catch {
                document.getElementById("display").value = "Error";
            }
        }