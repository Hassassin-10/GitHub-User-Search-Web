console.log("Hello World");

const Github_Details = document.querySelector("#GitHub-details");
const userInput = document.querySelector("#userSearch");
const searchBtn = document.querySelector("#searchBtn"); 

searchBtn.addEventListener("click", () => {
    console.log(userInput.value);
    getUserDetails(userInput.value);
});    

const getUserDetails = async (username) => {
    const url = `https://api.github.com/users/${username}`;

    const response = await fetch(url);
    
    if(!response.ok){
        alert("User does not Exist on GitHub");
    }
    console.log(response);

    const data = await response.json();
    console.log(data); // data.name, data.bio, data.location, data.avatar_url etc

    Github_Details.innerHTML = `
        <img style="border-radius:50%" src="${data.avatar_url}" alt="${data.name}" />
        <h2>${data.name}</h2>
        <p>${data.bio}</p>
        <p>${data.location}</p>
        <p>comapny: ${data.company}</p>
        <p>followers: ${data.followers}</p>
        <p>repositries: ${data.public_repos}</p>
        <a href="${data.html_url}" target="_blank">View Profile</a>
    `;
}
