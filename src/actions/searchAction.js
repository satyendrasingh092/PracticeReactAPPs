
export const SET_USER_LIST = "SET_USER_LIST"
export function setUserList(payload) {
    return {
        type : SET_USER_LIST,
        payload : payload
    }
}

export const SET_USER_INFO = "SET_USER_INFO"
export function setUserInfo(payload) {
    return {
        type : SET_USER_INFO,
        payload : payload
    }
}

export const fetchSearchData = (searchValue) => (dispatch) =>{
    let url = "https://api.github.com/search/users?q=" + searchValue
    fetch(url).then(function (res) {
        if (res.status !== 200)
            return
        return res.json()
    }).then((json) => json.items)
        .then((items) => {
            dispatch(setUserList(items))
        })
}