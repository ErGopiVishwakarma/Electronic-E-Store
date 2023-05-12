import React from 'react'
import { Admin, AdminProfile, AllProductData, Dash, DeleteDataFromBlacklist, GetDataFromBlackList, PostDataToBlacklist, Product, User, UserProfile } from './actionType'

const initial = {
    dash: true,
    admin: false,
    user: false,
    product: false,
    allProductData: [],
    userProfile: [],
    adminProfile: [],
    blacklist: []
}
export const reducer = (state = initial, { type, payload }) => {
    switch (type) {
        case Dash:
            return { ...state, dash: true, admin: false, user: false, product: false }
        case Admin:
            return { ...state, dash: false, admin: true, user: false, product: false }
        case User:
            return { ...state, dash: false, admin: false, user: true, product: false }
        case Product:
            return { ...state, dash: false, admin: false, user: false, product: true }
        case AllProductData:
            return { ...state, allProductData: payload }
        case UserProfile:
            return { ...state, userProfile: payload }
        case AdminProfile:
            return { ...state, adminProfile: payload }
        case GetDataFromBlackList:
            return { ...state, blacklist: payload }
        case DeleteDataFromBlacklist:
            return { ...state }
        case PostDataToBlacklist:
            return { ...state, blacklist: payload }


        default:
            return { ...state, dash: true, admin: false, user: false, product: false }
    }
}

