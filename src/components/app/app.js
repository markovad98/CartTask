import React, { Component } from 'react'
import Header from '../header/header'
import Elements from '../elements/elements'
import Cart from '../cart/cart'
import Title from '../title/title'
import './app.css'  

export default class App extends Component {
    state = {
        // cart or row
        appstate: 'row',
        cart: false,
        currentType: 'Срочно',

            cartTitle: '',
            cartStart: '',
            cartFinish: '',

        elements: [
        ]
    } // end state

    changeCartTitle = (event) => {
        this.setState({
           cartTitle: event.target.value
        })
    }

    changeCartStart = (event) => {
        this.setState({
           cartStart: event.target.value
        })
    }

    changeCartFinish = (event) => {
        this.setState({
           cartFinish: event.target.value
        })
    }

    toRow = () => {
        this.setState({appstate: 'row'})
    }
    
    toCart = () => {
        this.setState({appstate: 'cart'})
    }

    addItemTodo = () => {
        this.setState({cart: false})
        
        this.setState( ({elements}) => {
            const newItem = { 
                id: elements.length, 
                title: this.state.cartTitle,
                status: 'Срочно',
                start: this.state.cartStart,
                finish: this.state.cartFinish,
                executor: 'Марков А.Д.',
            }
            const beforeAdd = elements
            const afterAdd = [...beforeAdd, newItem]
            return {
                elements: afterAdd
            }
        })
    }



    addItemInWork = () => {
        this.setState({cart: false})
        
        this.setState( ({elements}) => {
            const newItem = { 
                id: elements.length, 
                title: this.state.cartTitle,
                status: 'В работе',
                start: this.state.cartStart,
                finish: this.state.cartFinish,
                executor: 'Марков А.Д.',
            }
            const beforeAdd = elements
            const afterAdd = [...beforeAdd, newItem]
            return {
                elements: afterAdd
            }
        })
    }

    addItemDone = () => {
        this.setState({cart: false})
        
        this.setState( ({elements}) => {
            const newItem = { 
                id: elements.length, 
                title: this.state.cartTitle,
                status: 'Готово',
                start: this.state.cartStart,
                finish: this.state.cartFinish,
                executor: 'Марков А.Д.',
            }
            const beforeAdd = elements
            const afterAdd = [...beforeAdd, newItem]
            return {
                elements: afterAdd
            }
        })
    }

    changeCurrentTypeToDone = () => {
        this.setState({cart: true})
        this.setState({currentType: 'Готово'})
    }

    changeCurrentTypeToInWork = () => {
        this.setState({cart: true})
        this.setState({currentType: 'В работе'})
    }
    
    changeCurrentTypeToUrgent = () => {
        this.setState({cart: true})
        this.setState({currentType: 'Срочно'})
    }

    render() {
        return (
            <>
                <Cart
                changeTitle={this.changeCartTitle}
                changeStart={this.changeCartStart}
                changeFinish={this.changeCartFinish}
                type={this.state.currentType} 
                addItemTodo={this.addItemTodo} 
                addItemInWork={this.addItemInWork}
                addItemDone={this.addItemDone}

                cartTitle={this.state.cartTitle}
                cartStart={this.state.cartStart} 
                cartFinish={this.state.cartFinish} 

                cart={this.state.cart} 

                />
                <div className="app-wrapper">
                
                    <Header toRow={this.toRow} toCart={this.toCart} />
                    <Title 
                    done={this.changeCurrentTypeToDone} 
                    inWork={this.changeCurrentTypeToInWork}
                    urgent={this.changeCurrentTypeToUrgent} 
                    cartUp={this.cartUp} 
                    appstate={this.state.appstate} 
                    />
                    <Elements elements={this.state.elements} appstate={this.state.appstate}/>
                </div>
            </>
        )
    }
}