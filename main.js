const star = '&#11088;'
const eye = '&#128065;'
const noemoji = '&#xFE0E;'

window.onload = (_event) => {
window.fetch("https://api.github.com/users/xVermillionx", {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    const avatar = document.getElementById("avatar");
    const name = document.getElementById("name");
    avatar.src = data.avatar_url; 
    name.innerText = data.login;
    // data.html_url
  })
  .then((_err) => {})

window.fetch("https://api.github.com/users/xVermillionx/repos?sort=pushed", {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    let pick = ['name', 'html_url', 'stargazers_count', 'watchers_count', 'fork'];
    let newdata = data.map((e) => Object.fromEntries(Object.entries(e).filter(r => r || pick.includes(r[0])))) // .sort((a,b) => a.fork)

    let repolist = document.getElementById('repos');
    let forklist = document.getElementById('forks');
    let misclist = document.getElementById('misc');
    for(e of newdata) {
      // if(e.fork) continue;
      let div = document.createElement('div');
      div.className = "tile";
      let a = document.createElement("a");
      a.href = e.html_url;
      a.innerText = e.name;
      b = a.cloneNode()
      c = a.cloneNode()
      b.innerHTML = `${e.stargazers_count}`;
      c.innerHTML = `${e.watchers_count}`;
      div.appendChild(a);
      div.appendChild(b);
      div.appendChild(c);
      let li = document.createElement('li');
      li.appendChild(div);
      if(e.fork){
        forklist.appendChild(li);
      }else{
        repolist.appendChild(li);
      }
      // misclist.appendChild(li);
    }
    console.log('Success: ', newdata)
  })
  .catch((err) => console.log('Error: ', err))
}

