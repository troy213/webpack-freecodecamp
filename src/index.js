import { AlertServices } from './app/alertService.js'
import { ComponentService } from './app/componentService.js'
import { run } from './app/app.js'
import './main.scss'

const alertServices = new AlertServices()
const componentService = new ComponentService()

run(alertServices, componentService)
