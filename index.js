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
            <img src="${data.avatar_url}">
             <h2>${data.name}</h2>
            <p>${data.login}</p>
    <div>
        <div>
            <p>${data.bio ? `bio: ${data.bio}` : ''}</P> 
           <p>Seguidores:${data.followers} Seguindo:${data.following}</p>
            <P>Repositórios públicos: ${data.public_repos}</p> 
            <a href="${data.html_url}" target="_blank">Acesse o perfil</a>
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
        const data=await resposta.json()
        let ctx = ''
        data.forEach((repo) => {
        ctx += `
            <div class="repo">
                <h2>${repo.name}</h2>
                <hr>
                <p>${repo.allow_forking ? 'Permite fork' : 'Não permite fork'}</p>
                <p><a href="${repo.clone_url}">URL para clone</a></p>
                <p> Data de criação:${new date (repo.created_at).toLocaleString('pt-BR')}</p>
                <P>Último atualização:${new Date (repo.updated_at).toLocaleDateString('pt-BR')})</p>
                <p>Branch: ${repo.default_branch}</p>
                <p>${repo.description != null ? `Descrição:${repo.description}` : 'Sem descrição'}</p>
                <p>${repo.lnaguage!= null ? `inguagem: ${repo.lnaguage}` : ''}</p>
                <P>${repo.visibility === 'public' ? 'Repositório Público' : 'Repositório Privado'}</P>
            <div>
         `
         document.querySelector('.repos').innerHTML = ctx
        })
    }catch(err){
        console.log(err)
     }
}
button.addEventListener('click',()=>{
    document.querySelector('.infos').innerHTML = input
    infosfn(input.value)
    reposfn(input.value)
})