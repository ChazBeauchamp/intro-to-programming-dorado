// console.log("work");

// Getting dates
today = new Date();
thisYear = today.getFullYear();

// DOM
const footer = document.querySelector("footer");

// Create copyright paragraph and add it to footer
const copyright = document.createElement("p");
copyright.innerHTML = `Chaz Beauchamp ${thisYear}`;

footer.appendChild(copyright);

// Create array of skills
const skills = ["HTML", "JavaScript", "CSS"];

const skillsSection = document.querySelector("#skills");

const skillsList = skillsSection.querySelector("ul");

for (let i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerHTML = skills[i];
  skillsList.appendChild(skill);
}

const messageForm = document.querySelector('[name="leave_message"]');

// Form Submission

messageForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Track submitted values

  const senderName = event.target.name.value;

  const senderEmail = event.target.email.value;

  const senderMessage = event.target.message.value;

  console.log(senderName);

  console.log(senderEmail);

  console.log(senderMessage);

  // Displaying messages in list

  const messageSection = document.querySelector("#messages");

  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="${event.target.email.value}">${event.target.name.value}</a><span> wrote: ${event.target.message.value} </span>`;

  // Make remove button

  const removeButton = document.createElement("button");

  removeButton.innerText = "remove";

  removeButton.setAttribute("type", "button");

  removeButton.addEventListener("click", (event) => {
    const entry = removeButton.parentNode;

    entry.remove();
  });

  // Adding remove button to each new message and adding each new message to the list

  newMessage.appendChild(removeButton);

  messageList.appendChild(newMessage);

  messageForm.reset();
});
