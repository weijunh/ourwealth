import ajax from './ajax.js'


export const reqHomepage = () => ajax('/homepage')
export const reqFoods = () => ajax('/foods')