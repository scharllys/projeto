const input= document.querySelector('.input')
const button= document.querySelector('.button')

const infosfn = async(nome) =>{
    try{
    const resposta = await fetch(`https://api.github.com/users/${nome}`)
    const data = await resposta.json()
    let ctx = document.createElement('div') 
    ctx = `
    <div class="ctx">
    <div>
        <img src="">
        <h2>${data.nome}</h2>
        <p>${data.login}</p>
    <div>
    <div>   
     <p> Bio: ${data.bio}</p>
     <p>Seguidores:${data.followers} Seguindo:${data.following}</p>
     <P>Repositórios públicos: ${data.public_repos}</p> 
    <a>href="${data.html_url}" target="_blank">Acesse o perfil</a>
    </div>
    </div>
     `
    document.querySelector('.infos').innerHTML = ctx
    console.log(data.nome)
    }catch(err){
     console.log(err)
    }
}
const reposfn = async(nome) =>{
    try{
        const resposta = await fetch(`https://api.github.com/users/${nome}/repos`)
        console.log(err)
        const data=await resposta.json()
        console.log(data)
    }catch(err){

     }
}
button.addEventListener('click',()=>{
    document.querySelector('.infos').innerHTML = input
    infosfn(input.value)
})