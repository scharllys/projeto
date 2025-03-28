const input= document.querySelector('.input')
const button= document.querySelector('.button')

const infosfn = async(nome) =>{
    try{
    const resposta = await fetch(`https://api.github.com/users/${nome}`)
    const data = await resposta.json()
    console.log(data)
    }catch(err){
     console.log(err)
    }
}
const reposfn = async(nome) =>{
    try{
        const resposta = await fetch(`https://api.github.com/users/${nome}/repos`)
        const data = await resposta.json()
        console.log(data)
    }catch(err){
        console.log(err)
    }
}

button.addEventListener('click',()=>{
    document.querySelector('.infos').innerHTML = input
    reposfn(input.value)
    infosfn(input.value)
})
