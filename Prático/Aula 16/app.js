const timestamp = (new Date()).getTime()
const publicKey = 'd0d76a60dcc1d76a2227bc2debaca41c'
const privateKey = '92eab95f3d5ee3fc201dbf74e7d984192599f316'
const hash = timestamp + privateKey + publicKey
const hashMd5 = MD5.generate(hash)

const promise = fetch(`https://gateway.marvel.com:443/v1/public/characters?apikey=${publicKey}&ts=${timestamp}&hash=${hashMd5}`)

promise.then(response => {
    console.log(response)
    let content = document.getElementById('content')

    response.json().then(res => {
        console.log(res)
        res.data.results.forEach(hero => {
            content.innerHTML = content.innerHTML + `<div class="box">
                <img src="${hero.thumbnail.path}.${hero.thumbnail.extension}" class="imagem">
                <h1> ${hero.name}</h1>
                
                <ul><p>Revistas</p>
                <li>${hero.comics.items[0].name}</li>
                <li>${hero.comics.items[1].name}</li>
                </ul>
                
                <ul><p>Séries</p>
                <li>${hero.comics.items[0].name}</li>
                <li>${hero.comics.items[1].name}</li>
                </ul>
            </div>`

        })

    })
})



//  .cath(error => {
 // console.log('Erro: ' + error)
//})