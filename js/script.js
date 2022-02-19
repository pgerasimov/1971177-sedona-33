let ModalButton = document.getElementById('modal-button');
let ModalWindow = document.querySelector('.modal')
let ModalButtonClose = document.querySelector('.modal-button__close')
let ModalAdditionalInfo = document.querySelector('.info-icon')
let ModalChildInfo = document.querySelector('.child-info__block')

ModalButton.onclick = function() {
  ModalWindow.classList.remove('invisible')
}

ModalButtonClose.onclick = function() {
  ModalWindow.classList.add('invisible')
}

  ModalAdditionalInfo.addEventListener("mouseover",function() {
    ModalChildInfo.classList.toggle('invisible')

  })

ModalAdditionalInfo.addEventListener("mouseout",function() {
  ModalChildInfo.classList.toggle('invisible')

})

