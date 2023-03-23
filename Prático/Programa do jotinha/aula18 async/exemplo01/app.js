document.addEventListener("DOMContentLoaded", async () => {
  const timestamp = (new Date()).getTime();
  const apiKey = '2c4379d46563b1d28e236427d9e5a09e';
  const privateKey = '639ea7cc8966d67951005bc76aaf82e7c36b9a4c';
  const hash = timestamp + privateKey + apiKey;
  const hashMd5 = MD5.generate(hash);

  const content = document.getElementById('content');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  let characters = [];
  let currentIndex = 0;

  const response = await fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${apiKey}&ts=${timestamp}&hash=${hashMd5}`);
  const res = await response.json();
  characters = res.data.results;
  displayCharacter(currentIndex);

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + characters.length) % characters.length;
    displayCharacter(currentIndex);
  });

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % characters.length;
    displayCharacter(currentIndex);
  });

  function displayCharacter(index) {
    const hero = characters[index];
    content.innerHTML = `
      <div class="box">
        <h1><b>${hero.name}</h1></b>
        <img class="imagem" src="${hero.thumbnail.path}.${hero.thumbnail.extension}">
        <ul>
          <p><b>Revistas</b></p>
          <li>${hero.comics.items[0].name}</li>
          <li>${hero.comics.items[1].name}</li>
        </ul>
        <ul>
          <p><b>Séries</b></p>
          <li>${hero.series.items[0].name}</li>
          <li>${hero.series.items[1].name}</li>
        </ul>
      </div>`;
  }
});
