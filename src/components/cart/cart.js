import React, { Component } from 'react'
import './cart.css'

export default class Cart extends Component {
    render() {
        const { cart, cartStart, cartTitle, cartFinish, addItemTodo, addItemInWork, addItemDone, type, changeTitle, changeStart, changeFinish } = this.props
        const addItem = (type === 'Срочно') ? addItemDone : (type === 'В работе') ? addItemInWork : (type === 'Готово') ?  addItemTodo: 'none'
        const style = {
            bg: {
                display: (cart) ? 'block' : 'none'
            }
        }
        return (
            <div style={style.bg} className="cart-bg">
            <div className="cart-wrapper">
            <div className="container">
                <div className="cart__title">
                    <label>Название</label>
                    <input onChange={ changeTitle } value={cartTitle} className="cart__title-input" type="text"/>
                </div>

                <div className="cart-date">
                    <label htmlFor="">Старт</label><input onChange={changeStart} value={ cartStart }  className="cart__date-input" type="text"/>
                    <label htmlFor="">Финиш</label><input onChange={changeFinish} value={ cartFinish } className="cart__date-input" type="text"/>
                </div>

                <button onClick={addItem} className="cart__button">Готово</button>
                </div>
                </div>
            </div>
        )
    }
}