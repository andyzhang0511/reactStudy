// function person() {
//     return <p>大家好，我是张帆</p>
// }

/**
 * 使用流程
 * 执行index.html的时候会执行index.js
 * index.js会执行App.js组件
 * 执行App.js的时候引入了Person
 * 然后执行class类，并且执行jsx语法
 * 然后渲染jsx语法里的内容，并且找到person这个文件
*/
import React from 'react';
import './Person.css'

const person = (props) => {
    return (
        <div className="Person">
            <p onClick={props.myclick}>大家好，我是{props.name}，我已经拥有超过{props.count}个作品</p>
            <p>{props.children}</p>
            <input type='text' onChange={props.changed} defaultValue={props.name} />
        </div>
    )
}
export default person;

