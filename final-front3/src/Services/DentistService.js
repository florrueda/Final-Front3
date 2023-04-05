import {dentistInstance} from './DentistInstance'

export const getDentists = () => {
    let dentists = dentistInstance.get()
    return dentists
}

export const getDentistById = (id) => {
    let dentists = dentistInstance.get(`/${id}`)
    return dentists
}