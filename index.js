// Write your code here!
const userInfo = {
  username: "flatUser123",
  description: "Hi, welcome to my webpage! Just a new user of this website!",
  theme: "red"
};

function displayUser(userInfo) {
  // Select header
  const header = document.querySelector("#main");

  // Update header text and style
  header.textContent = userInfo.username + "'s Personal Webpage";
  header.className = userInfo.theme;

  // Create description element
  const description = document.createElement("p");

  // Select body
  const body = document.querySelector("body");

  // Add content and style to description
  description.textContent = userInfo.description;
  description.className = userInfo.theme;

  // Append description to the page
  body.append(description);
}

// Call the function
displayUser(userInfo);