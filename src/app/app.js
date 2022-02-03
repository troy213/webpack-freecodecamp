import { inputAreValid } from './utils/inputsAreValid.js'

export const run = (alertServices, componentService) => {
  alertServices.hideMessage()

  componentService.onClick(() => {
    alertServices.hideMessage()
    const input = componentService.getInputs()
    if (inputAreValid(input)) {
      alert(input)
    } else {
      alertServices.showMessage()
    }
  })
}
