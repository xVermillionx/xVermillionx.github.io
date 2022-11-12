const star = '&#11088;'
const eye = '&#128065;'
const noemoji = '&#xFE0E;'

window.onload = (_event) => {
window.fetch("https://api.github.com/users/xVermillionx/repos", {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((response) => response.json())
  .then((data) => {
    let pick = ['name', 'html_url', 'stargazers_count', 'watchers_count'];
    let newdata = data.map((e) => Object.fromEntries(Object.entries(e).filter(r => pick.includes(r[0]))))
    for(e of newdata) {
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
      let repolist = document.getElementById('repos');
      let li = document.createElement('li');
      li.appendChild(div);
      repolist.appendChild(li);
    }
    console.log('Success: ', newdata)
  })
  .catch((err) => console.log('Error: ', err))
}

