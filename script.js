const usernameRef = document.getElementById("username");
const buttonRef = document.getElementById("submit");
const nameRef = document.getElementById("name");
const avatarRef = document.getElementById("avatar");
const public_reposRef = document.getElementById("public_repos");

buttonRef.addEventListener("click", function () {
    // nameRef.innerText = usernameRef.value
    fetch(`https://api.github.com/users/${usernameRef.value}`)
        .then((res) => res.json())
        .then((data) => {
            avatarRef.setAttribute("src", data.avatar_url);
            avatarRef.style.display = "block";
            nameRef.innerText = data.name;
            usernameRef.value = ""
            public_reposRef.innerText = `Repos: ${data.public_repos}`;
        });
})