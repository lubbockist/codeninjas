function nextStep(step) {
    const age = parseInt(document.getElementById('age').value);
    const conditionalMessage = document.createElement('p');

    // Progress bar logic
    const totalSteps = 7; // Number of steps in the quiz
    const progress = (step / totalSteps) * 100; // Calculate percentage of progress
    document.querySelector('.progress-bar').style.width = `${progress}%`; // Update progress bar width

    // Add fade-in class to show each step smoothly
    document.querySelectorAll('.fade-in').forEach(function(element) {
        element.classList.remove('active');
    });
    document.getElementById('step' + step).classList.add('active');

    // Check if the age is out of range and stop the quiz if so
    if (step === 2 && (age < 5 || age > 14)) {
        if (age < 5) {
            document.getElementById('result').innerHTML = `
                <p>Sorry, but our programs start at age 5. We can't wait to see your child once they are old enough!</p>
            `;
        } else if (age > 14) {
            document.getElementById('result').innerHTML = `
                <p>Our programs are designed for kids up to age 14, but we understand that special requests are sometimes needed. Please give us a call at 806-370-0022, and we'd love to discuss options for your child.</p>
            `;
        }
        return;
    }

    // Proceed to the next step
    document.getElementById('step' + (step - 1)).style.display = 'none';
    document.getElementById('step' + step).style.display = 'block';

    // Show conditional messages AFTER the user clicks "Next"
    if (step === 2) {
        conditionalMessage.innerText = 'Great! We have programs for children aged 5-14.';
        conditionalMessage.classList.add('conditional-message');
        document.getElementById('step2').appendChild(conditionalMessage);
    } else if (step === 3) {
        const skills = document.getElementById('skills').value;
        if (skills === 'yes') {
            conditionalMessage.innerText = 'Nice! Coding is easier when they’re familiar with reading and typing.';
        } else {
            conditionalMessage.innerText = 'No worries! We have programs to help build reading and typing skills.';
        }
        conditionalMessage.classList.add('conditional-message');
        document.getElementById('step3').appendChild(conditionalMessage);
    } else if (step === 4) {
        const codingInterest = document.getElementById('codingInterest').value;
        if (codingInterest === 'yes') {
            conditionalMessage.innerText = 'Awesome! Your child is ready for a coding challenge!';
        } else {
            conditionalMessage.innerText = 'No problem! We have more casual programs to explore coding at a relaxed pace.';
        }
        conditionalMessage.classList.add('conditional-message');
        document.getElementById('step4').appendChild(conditionalMessage);
    } else if (step === 5) {
        const learningStyle = document.getElementById('learningStyle').value;
        if (learningStyle === 'handsOn') {
            conditionalMessage.innerText = 'Nice! Hands-on activities can be really fun and engaging.';
        } else {
            conditionalMessage.innerText = 'Great! Screen-based learning opens up a world of coding possibilities.';
        }
        conditionalMessage.classList.add('conditional-message');
        document.getElementById('step5').appendChild(conditionalMessage);
    }
}

// Submission handler for final quiz logic
document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting/reloading the page

    // Get values from the form
    const age = parseInt(document.getElementById('age').value);
    const skills = document.getElementById('skills') ? document.getElementById('skills').value : '';
    const timeCommitment = document.getElementById('timeCommitment') ? document.getElementById('timeCommitment').value : '';
    const codingInterest = document.getElementById('codingInterest') ? document.getElementById('codingInterest').value : '';
    const learningStyle = document.getElementById('learningStyle') ? document.getElementById('learningStyle').value : '';
    const roboticsInterest = document.getElementById('roboticsInterest') ? document.getElementById('roboticsInterest').value : '';
    const socialPreference = document.getElementById('socialPreference') ? document.getElementById('socialPreference').value : '';

    let result = '';

    // Logic for 5-7-year-olds
    if (age >= 5 && age <= 7) {
        // Default to JR unless they choose short-term or social events
        if (timeCommitment === 'shortTerm') {
            result = `
                <p>We recommend <strong>JR CAMPS</strong>. These week-long camps are packed with fun, hands-on STEM learning. Your child can explore coding, robotics, circuits, and more!</p>
                <a href="https://www.codeninjas.com/tx-lubbock/camps" target="_blank">
                    <button class="enroll-btn"><i class="fas fa-sign-in-alt"></i> Sign Up for JR CAMPS – Secure Your Spot Today!</button>
                </a>
            `;
        } else if (socialPreference === 'social') {
            result = `
                <p>We recommend <strong>Parent's Night Out</strong>! This is a fun, social event for your child to enjoy games and movies with friends.</p>
                <a href="https://www.codeninjas.com/tx-lubbock/parents-night-out" target="_blank">
                    <button class="enroll-btn"><i class="fas fa-sign-in-alt"></i> Sign Up for Parent's Night Out</button>
                </a>
            `;
        } else {
            result = `
                <p>We recommend <strong>JR</strong> for your child. This ongoing program will introduce coding and STEM concepts in a fun and supportive group setting. It’s perfect for young ninjas to start learning foundational skills.</p>
                <a href="https://www.codeninjas.com/tx-lubbock/jr" target="_blank">
                    <button class="enroll-btn"><i class="fas fa-sign-in-alt"></i> Sign Up for JR – Limited Spots Available!</button>
                </a>
            `;
        }
    }

    // Logic for 8-14-year-olds
    else if (age >= 8 && age <= 14) {
        if (skills === 'no') {
            result = `
                <p>We recommend <strong>JR</strong> to help your child build reading and typing skills. This program is designed to give them a strong foundation for future coding projects!</p>
                <a href="https://www.codeninjas.com/tx-lubbock/jr" target="_blank">
                    <button class="enroll-btn"><i class="fas fa-sign-in-alt"></i> Sign Up for JR – Limited Spots Available!</button>
                </a>
            `;
        } else if (learningStyle === 'handsOn') {
            result = `
                <p>We recommend <strong>STEMgineers CLUB</strong>. This hands-on program allows them to explore space, robotics, and circuits through exciting, project-based learning.</p>
                <a href="https://www.codeninjas.com/tx-lubbock/clubs" target="_blank">
                    <button class="enroll-btn"><i class="fas fa-sign-in-alt"></i> Sign Up for STEMgineers CLUB</button>
                </a>
            `;
        } else if (codingInterest === 'yes' && timeCommitment === 'longTerm') {
            result = `
                <p>We recommend <strong>CREATE</strong>. This long-term program will teach your child to code through building video games, progressing from block coding to advanced languages like JavaScript and C#. It's perfect for serious coders!</p>
                <ul>
                    <li>Flexible schedule – drop in anytime</li>
                    <li>Game development and coding challenges</li>
                    <li>Progress from block coding to advanced coding</li>
                </ul>
                <a href="https://www.codeninjas.com/tx-lubbock/create" target="_blank">
                    <button class="enroll-btn"><i class="fas fa-sign-in-alt"></i> Sign Up for CREATE – Enroll Now!</button>
                </a>
            `;
        } else if (timeCommitment === 'shortTerm') {
            result = `
                <p>We recommend <strong>CAMPS</strong>. These week-long camps introduce your child to exciting STEM topics like Minecraft, Roblox, and robotics in a short, hands-on program!</p>
                <a href="https://www.codeninjas.com/tx-lubbock/camps" target="_blank">
                    <button class="enroll-btn"><i class="fas fa-sign-in-alt"></i> Sign Up for CAMPS – Reserve Your Spot!</button>
                </a>
            `;
        }

        // Logic for FIRST LEGO League Club
        if (roboticsInterest === 'yes' && age >= 9 && age <= 13) {
            result += `
                <p>We recommend <strong>FIRST LEGO League Club</strong>. This program allows your child to compete in exciting team-based robotics challenges!</p>
                <a href="https://www.codeninjas.com/tx-lubbock/clubs" target="_blank">
                    <button class="enroll-btn"><i class="fas fa-sign-in-alt"></i> Sign Up for FIRST LEGO League Club</button>
                </a>
            `;
        }

        // Logic for Parent's Night Out
        if (socialPreference === 'social') {
            result += `
                <p>We recommend <strong>Parent's Night Out</strong>! This is a fun, social event for your child to enjoy games and movies with friends.</p>
                <a href="https://www.codeninjas.com/tx-lubbock/parents-night-out" target="_blank">
                    <button class="enroll-btn"><i class="fas fa-sign-in-alt"></i> Sign Up for Parent's Night Out</button>
                </a>
            `;
        }
    }

    // Add the tour link and contact info at the bottom
result += `
<p><strong>What parents are saying:</strong></p>
<blockquote>
    "My child loves Code Ninjas! They've learned so much while having fun!"
</blockquote>
<p>Need more information? <a href="https://www.codeninjas.com/tx-lubbock/schedule-tour" target="_blank">Schedule a tour</a>, call us at <strong>806-370-0022</strong>, or email us at <a href="mailto:lubbocktx@codeninjas.com">lubbocktx@codeninjas.com</a> to sign up or with any questions!</p>
`;

    // Clear the form and display the result
    document.getElementById('quizForm').style.display = 'none';  // Hide the form
    document.querySelector('.progress-bar').style.display = 'none';  // Hide the progress bar
    document.getElementById('result').innerHTML = result;  // Display the result
});
