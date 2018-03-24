/**
 * Created by 10065 on 2018/3/21.
 */


import ajax from './ajax'

export const reqcategorys = () => ajax('/categorys')
export const reqbrand = () => ajax('/brand')
export const reqhomepage = () => ajax('/homepage')
export const reqallbrands= () => ajax('/allbrands')
