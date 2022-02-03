export class AlertServices {
  constructor() {
    this.message = document.getElementById('message-box')
  }

  showMessage() {
    this.message.innerHTML = 'your input have more than 20 characters'
    this.message.classList.remove('hide')
  }

  hideMessage() {
    this.message.classList.add('hide')
  }
}
