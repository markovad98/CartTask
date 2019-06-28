import React, { Component } from 'react'
import './header.css'

export default class Header extends Component {
    render() {
        const { toRow, toCart } = this.props
        return (
            // Обертка шапки
            <header className="header">
            {/* Имя приложения */}
                <span className="header-title">Канбан-доска</span>
                {/* Обретка иконок */}
                <div className="header-panel">
                {/* Иконки переключения состояний */}
                    <div  onClick={ toCart } className="header-panel__element_cube">
                        <div className="cube-wrapper">
                            <div className="cube"></div>
                            <div className="cube"></div>
                        </div>
                        <div className="cube-wrapper">
                            <div className="cube"></div>
                            <div className="cube"></div>
                        </div>
                    </div>

                    <div onClick={ toRow }  className="header-panel__element_burger">
                        <div className="row">
                            <div className="short"></div>
                            <div className="long"></div>
                        </div>
                        <div className="row">
                            <div className="short"></div>
                            <div className="long"></div>
                        </div>
                        <div className="row">
                            <div className="short"></div>
                            <div className="long"></div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}