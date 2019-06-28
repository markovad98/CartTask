import React, { Component } from 'react'
import { relative } from 'path';

export default class Title extends Component {
    render() {
        const { appstate, done, inWork, urgent } = this.props
        const styleRow = {
            titleWrapper: {
                display: 'flex',
                justifyContent: 'flex-end',
                marginRight: '20px',
            },
            titleElement: {
                color: '#797777',
                fontSize: '16px',
                fontWeight: 400,
                padding: '14px 35px',
            },
        }
        const styleCart = {
            titleWrapper: {
                display: 'flex',
                justifyContent: 'space-between',
                
            },
            titleElement: {
                color: '#000000',
                fontSize: '28px',
                fontWeight: '500',
                marginBottom: '25px',
            },
            titleContainer: {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            },
            titleCircle: {
                width: '48px',
                height: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '50%',
                backgroundColor: '#d1d1d1',
                marginBottom: '38px',
            },
        }

            if ( appstate === 'row') {
                return (
                    <div style={styleRow.titleWrapper} className="title-wrapper">
                        <div style={styleRow.titleElement} className="title-element">Статус</div>
                        <div style={styleRow.titleElement} className="title-element">Старт</div>
                        <div style={styleRow.titleElement} className="title-element">Финиш</div>
                        <div style={styleRow.titleElement} className="title-element">Испонитель</div>
                    </div>
                )
            } else if ( appstate === 'cart') {
                return (
                    <div style={styleCart.titleWrapper}>
                    
                    <div onClick={ done } style={styleCart.titleContainer}>
                        <div style={styleCart.titleElement} className="title-element">Сделать</div>
                        <div style={styleCart.titleCircle}>
                            <img src={require('./black.svg')} alt=""/>
                        </div>
                    </div>
                    
                    <div onClick={ inWork } style={styleCart.titleContainer}>
                        <div style={styleCart.titleElement} className="title-element">В процессе</div>
                        <div style={styleCart.titleCircle}>
                            <img src={require('./black.svg')} alt=""/>
                        </div>
                    </div>
                    <div onClick={ urgent } style={styleCart.titleContainer}>
                        <div style={styleCart.titleElement} className="title-element">Сделано</div>
                        <div style={styleCart.titleCircle}>
                            <img src={require('./black.svg')} alt=""/>
                        </div>
                    </div>
                    
                    </div>
                )
            }
    }
}