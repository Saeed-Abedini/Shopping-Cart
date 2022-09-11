const addItem = product => {
    return {
        type: 'ADD_ITEM',
        payload: product
    }
}

const removeItem = product => {
    return {
        type: 'REMOVE_ITEM',
        payload: product
    }
}

const increase = product => {
    return {
        type: 'INCREASE',
        payload: product
    }
}

const decrease = product => {
    return {
        type: 'DECREASE',
        payload: product
    }
}

const checkout = () => {
    return {
        type: 'CHECKOUT',
    }
}

const clear = () => {
    return {
        type: 'CLEAR',
    }
}

const getProductLStg = () => {
    return {
        type: 'GET_PRODUCT',
    }
}

const setProductLStg = (products) => {
    return {
        type: 'SET_PRODUCT',
        payload: products
    }
}


export { addItem, removeItem, increase, decrease, checkout, clear, getProductLStg, setProductLStg }