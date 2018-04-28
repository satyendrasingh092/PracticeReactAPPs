import Loadable from 'react-loadable'
import React from 'react'
const LOADING = () => <div>Loading...</div>

export const rootContainer = Loadable({
    loader  : () => import("../containers/rootContainer"),
    loading : LOADING
})

export const baseContainer = Loadable({
    loader  : () => import("../containers/searchResultContainer"),
    loading : LOADING
})

export const profileContainer = Loadable({
    loader  : () => import("../containers/profileContainer"),
    loading : LOADING
})