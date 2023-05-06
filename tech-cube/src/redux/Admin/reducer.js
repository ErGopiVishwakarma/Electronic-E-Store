import React from 'react'
import { Admin, Dash, Product, User } from './actionType'

const initial = {
    dash: true,
    admin: false,
    user: false,
    product: false,
}
export const reducer = (state = initial, { type, payload }) => {
    switch (type) {
        case Dash:
            return { ...state, dash: true, admin: false, user: false, product: false }
            case Admin :
            return { ...state, dash: false, admin: true, user: false, product: false }
            case User:
            return { ...state, dash: false, admin: false, user: true, product: false }
            case Product :
            return { ...state, dash: false, admin: false, user: false, product: true }
            default :
            return { ...state, dash: true, admin: false, user: false, product: false }
    }
}

