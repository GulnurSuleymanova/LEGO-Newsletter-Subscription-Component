
        let submit = document.getElementById('submit');
        let onecard = document.getElementById('onecard');
        let userEmail = document.getElementById('userEmail');

        function subscribe() {
            let emailInput = document.getElementById('emailInput').value.trim();

            if (!emailInput || !emailInput.includes("@") || !emailInput.includes(".")) {
                alert("Please enter a valid email address.");
                return;
            }
            userEmail.textContent = emailInput;
            submit.hidden = false;
            onecard.hidden = true;
        }

        function dismissMessage() {
            onecard.hidden = false;
            submit.hidden = true;
                    document.getElementById('emailInput').value = "";

        }
