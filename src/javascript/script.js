const botaoTrailer = document.querySelector('.botao-trailer')
const modal = document.querySelector('.modal')
const fecharModal = document.querySelector('.fechar-modal')
const video = document.getElementById('video')
const linkDoVideo = video.src

botaoTrailer.addEventListener('click', () => {
    console.log('clicou');
    modal.classList.add('aberto')
    video.setAttribute('src', linkDoVideo)
})

fecharModal.addEventListener('click', () => {
    modal.classList.remove('aberto')
    video.setAttribute('src', "")
})
