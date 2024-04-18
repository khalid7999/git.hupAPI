
const username = ''




const searchbtn = document.getElementById('searchbtn');
const searchInput = document.getElementById('searchInput');
const userData = document.getElementById('userData');

async function getData(username) {
    const response = await fetch(`https://api.github.com/users/${username}`);
    const data = await response.json();
    console.log(data);
    
    userData.innerHTML = `
    <h2>${data.name}</h2>
    <p>Username: ${data.login}</p>
    <p>Followers: ${data.followers}</p>
    <p>Following: ${data.following}</p>
    <img src=${data.avatar_url} >
    `;
  
}

searchbtn.addEventListener("click", function () {
    const username = searchInput.value.trim(); 
    console.log(username);
    getData(username)
});





