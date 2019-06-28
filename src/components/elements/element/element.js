import React, { Component } from 'react'

export default class Element extends Component {
    
    render() {
        const { appstate, title, status, start, finish, executor } = this.props
        

            const startEl = 'старт: '
            const finishEl =  'финиш: '
            const executorEl = 'Исполнитель: '

            const circleStyle = {
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: '#aeaeae',
                display: (appstate === 'row') ? 'none' : (appstate === 'cart') ? 'inline-block' : 'none',
                marginBottom: '-5px',
                marginRight: '5px',
            }
            const circle = <div style={circleStyle}></div>
        
        const style = {
            // Стили для элементов и пунктов
            element: {
                display: 'flex',
                flexDirection: (appstate === 'row') ? 'row' : (appstate === 'cart') ? 'column' : 'none',
                justifyContent: (appstate === 'row') ? 'flex-start' : (appstate === 'cart') ? 'space-evenly' : 'none',
                alignItems: (appstate === 'row') ? 'center' : (appstate === 'cart') ? 'flex-start' : 'none',
                height: (appstate === 'row') ? '87px' : (appstate === 'cart') ? '172px' : 'none',
                width: (appstate === 'row') ? '1007px' : (appstate === 'cart') ? '330px' : 'none',
                boxShadow: '0 5px 15px 1px rgba(126, 126, 126, 0.22)',
            },
            
            // Стили оберток для пунктов
            wrapper: {
                marginLeft: (appstate === 'row') ? '0' : (appstate === 'cart') ? '10px' : 'none',
                borderLeft: (appstate === 'row') ? '1px solid #e5e5e5' : (appstate === 'cart') ? 'none' : 'none',
                width: (appstate === 'row') ? '119px' : (appstate === 'cart') ? 'initial' : 'none',
                height: (appstate === 'row') ? '87px' : (appstate === 'cart') ? 'initial' : 'none',
                display: 'flex',
                justifyContent: (appstate === 'row') ? 'center' : (appstate === 'cart') ? 'flex-start' : 'none',
                alignItems: 'center',
            },
            wrapperTitle: {
                marginLeft: (appstate === 'row') ? '0' : (appstate === 'cart') ? '10px' : 'none',
                borderLeft: (appstate === 'row') ? '1px solid #e5e5e5' : (appstate === 'cart') ? 'none' : 'none',
                width: (appstate === 'row') ? '467px' : (appstate === 'cart') ? 'initial' : 'none',
                height: (appstate === 'row') ? '87px' : (appstate === 'cart') ? 'initial' : 'none',
                display: 'flex',
                justifyContent: 'flex-start',
                alignItems: (appstate === 'row') ? 'center' : (appstate === 'cart') ? 'flex-start' : 'none',
            },
            wrapperExecutor: {
                marginLeft: (appstate === 'row') ? '0' : (appstate === 'cart') ? '10px' : 'none',
                borderLeft: (appstate === 'row') ? '1px solid #e5e5e5' : (appstate === 'cart') ? 'none' : 'none',
                width: (appstate === 'row') ? '181px' : (appstate === 'cart') ? 'initial' : 'none',
                height: (appstate === 'row') ? '87px' : (appstate === 'cart') ? 'initial' : 'none',
                display: 'flex',
                justifyContent: (appstate === 'row') ? 'center' : (appstate === 'cart') ? 'flex-start' : 'none',
                alignItems: 'center',
            },

            wrapperStatus: {
                marginLeft: (appstate === 'row') ? '0' : (appstate === 'cart') ? '10px' : 'none',
                order: (appstate === 'row') ? '0' : (appstate === 'cart') ? '-1' : 'none',
                borderLeft: (appstate === 'row') ? '1px solid #e5e5e5' : (appstate === 'cart') ? 'none' : 'none',
                width: (appstate === 'row') ? '119px' : (appstate === 'cart') ? 'initial' : 'none',
                height: (appstate === 'row') ? '87px' : (appstate === 'cart') ? 'initial' : 'none',
                display: 'flex',
                justifyContent: (appstate === 'row') ? 'center' : (appstate === 'cart') ? 'flex-start' : 'none',
                alignItems: 'center',
            },

            // Стили пунктов
            block: {
                fontWeight: (appstate === 'row') ? '500' : (appstate === 'cart') ? '300' : 'none',
                padding: '4px',
            },

            blockTitle: {
                fontWeight: (appstate === 'row') ? '500' : (appstate === 'cart') ? '500' : 'none',
                padding: '4px',
                marginLeft: (appstate === 'row') ? '31px' : (appstate === 'cart') ? '0px' : 'none',
            },

            blockStatus: {
                fontWeight: (appstate === 'row') ? '500' : (appstate === 'cart') ? '500' : 'none',
                borderRadius: '5px',
                padding: '5px',
                color: (status==='Срочно') ? 'red' : (status==='В работе') ? 'blue' : (status==='Готово') ? '#18d084' : 'none',
                backgroundColor: (status==='Срочно') ? '#ffc6ce' : (status==='В работе') ? '#c6c8ff' : (status==='Готово') ? '#c9eddd' : 'none',
            },

            dateWrapper: {
                display: 'flex',
                flexDiection: (appstate === 'row') ? 'row' : (appstate === 'cart') ? 'column' : 'none',
            },
            
    }// End style

        return (
            // Задача
            <div style={style.element}>
            
            
            {/* Название */}
                <div style={style.wrapperTitle}>
                    <div style={style.blockTitle}>{title}</div>
                </div>
            
            
            {/* Статус */}
                <div style={style.wrapperStatus} >
                    <div style={style.blockStatus}>{status}</div>
                </div>
                
                
                {/* Дата начала и конца*/}
                <div style={style.dateWrapper}>
                    <div style={style.wrapper}>
                        <div style={style.block}>{`${ (appstate==='cart') ? startEl : '' }${start}`}</div>
                    </div>

                    <div style={style.wrapper}>
                        <div style={style.block}>{`${ (appstate==='cart') ? finishEl : '' }${finish}`}</div>
                    </div>
                </div>
                
                
                {/* Исполнитель */}
                <div style={style.wrapperExecutor}>
                    <div style={style.block}>{`${ (appstate==='cart') ? executorEl : '' }`}{circle}{`${executor}`}</div>
                </div>
            </div>
        )
    }
}