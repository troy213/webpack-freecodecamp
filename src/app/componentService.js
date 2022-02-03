export class ComponentService {
  constructor() {
    this.printBtn = document.getElementById('print-button')
    this.inputMessage = document.getElementById('input-message')
  }

  getInputs() {
    return this.inputMessage.value
  }

  onClick(cb) {
    this.printBtn.addEventListener('click', cb)
  }
}
