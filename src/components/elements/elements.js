import React, { Component } from 'react'
import Element from './element/element'

export default class Elements extends Component {
    render() {
        let { elements, appstate } = this.props
        
        const style = {
            ul: {
                width: '1350px',
                display: 'flex',
                flexDirection: (appstate === 'row') ? 'column' : (appstate === 'cart') ? 'row' : 'none',
                flexWrap: 'wrap',
                listStyle: 'none',
            },
            li: {
                marginRight: (appstate === 'row') ? '0' : (appstate === 'cart') ? '120px' : 'none',
                marginBottom: (appstate === 'row') ? '0' : (appstate === 'cart') ? '20px' : 'none',
            }
        }
        
        elements = elements.map( (el) => {
            return ( 
                <li style={style.li} key={el.id}>
                    <Element 
                        appstate={appstate}
                        title={el.title}
                        status={el.status}
                        start={el.start} 
                        finish={el.finish}
                        executor={el.executor}
                    /> 
                </li>
            )
        })
        return (
            <ul style={style.ul}>
                { elements }
            </ul>
        )
    }
}