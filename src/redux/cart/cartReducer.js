const selectedProducts = JSON.parse(localStorage.getItem('Products')) || [];

const initialState = {
    selectedItems: selectedProducts,
    itemsCounter: 0,
    total: 0,
    checkout: false
}
const sumItems = items => {
    const itemsCounter = items.reduce((total, product) => total + product.quantity, 0);
    let total = items.reduce((total, product) => total + product.price * product.quantity, 0).toFixed(2);
    return { itemsCounter, total }
}

const cartReducer = (state = initialState, action) => {
    const setProductLStg = (selectedItems) => localStorage.setItem('Products', JSON.stringify(selectedItems));
    switch (action.type) {
        case "ADD_ITEM":
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload,
                    quantity: 1
                })
                setProductLStg(state.selectedItems)
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkout: false
            }
        case "REMOVE_ITEM":
            const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id);
            setProductLStg(newSelectedItems)
            return {
                ...state,
                selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)

            }
        case "INCREASE":
            const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexI].quantity++;
            setProductLStg(state.selectedItems)
            return {
                ...state,
                ...sumItems(state.selectedItems)

            }
        case "DECREASE":
            const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id);
            state.selectedItems[indexD].quantity--;
            setProductLStg(state.selectedItems)
            return {
                ...state,
                ...sumItems(state.selectedItems)

            }
        case "CHECKOUT":
            setProductLStg([])
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: true
            }
        case "CLEAR":
            setProductLStg([])
            return {
                selectedItems: [],
                itemsCounter: 0,
                total: 0,
                checkout: false
            }
        default:
            return {
                ...state,
                ...sumItems(selectedProducts)
            };
    }
}

export default cartReducer;