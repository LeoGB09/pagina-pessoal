function openModal(modalId, fadeId){
    const modal = document.getElementById(modalId)
    const fade = document.getElementById(fadeId)
    modal.classList.remove('fadeOut');
    modal.classList.remove('hide')
    fade.classList.remove('hide')
}

function closeModal(modalId, fadeId){
    const modal = document.getElementById(modalId)
    const fade = document.getElementById(fadeId)
    modal.classList.add('hide');
    fade.classList.add('hide')
}


