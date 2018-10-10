import React from 'react'
import {connect} from 'react-redux'
import '../styles/shoppingcart.css'
import Cart from '../components/cart/list'

import { cartIncrease, cartDecrease, cartChoose } from '../store/action/actions'

const mapStateToProps = (state) => ({
    cart: state.cart
})
const mapDispatchToProps = (dispatch, state) => ({
    increase: (id) => { dispatch(cartIncrease(id)) },
    decrease: (id) => { dispatch(cartDecrease(id)) },
    choose: (id) => { dispatch(cartChoose(id))}
})
export default connect(mapStateToProps, mapDispatchToProps)(Cart)


