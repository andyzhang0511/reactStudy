import React, { Component } from 'react';
// import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
    // render的作用就是可以把return里面对应的内容渲染到dom中去
    // return里面真正的内容暂且可以理解为html，其实真正的是叫jsx
class App extends Component {
    /**
     * state:用于改变组件内状态的值（动态）
     * props:用于组件通信进行传值
    */
    state = {
        persons:[
            {id:1, name:'andy',count:50},
            {id:2, name:'Henry',count:5},
            {id:3, name:'Hemiah',count:15},
        ],
        otherState:'anything',
        showPersons:false
    }
    swithNameHandler = (newName) => {
        this.setState(
            {
                persons:[
                    {name:newName,count:50},
                    {name:'Henry',count:55},
                    {name:'Hemiah',count:15},
                ],
            }
        )
    }
    swithNameHandler111= () => {
        this.setState(
            {
                persons:[
                    {name:'ssss',count:50},
                    {name:'Henry',count:55},
                    {name:'Hemiah',count:15},
                ],
            }
        )
    }
    nameChangedHandle = (event,id) => {
        // console.log(event,id)
        // 获取事件对象id
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id
        })
        console.log(personIndex)
        // 修改对应Id的对象
        const person111 = {
            ...this.state.persons[personIndex]
        }
        // console.log(person111)
        // 改变name值
        person111.name = event.target.value

        // 拿到整个数组
        const persons222 = [...this.state.persons]

        persons222[personIndex] = person111

        // 拿到单独的对象，把现在已经修改的person
        this.setState(
            {persons:persons222}
            // {
            //     persons:[
            //         {name:event.target.value,count:50},
            //         {name:'Henry',count:55},
            //         {name:'Hemiah',count:15},
            //     ],
            // }
        )
    }
    nameChangedHandle111 = (event) => {
        this.setState(
            {
                persons:[
                    {name:'andy',count:50},
                    {name:event.target.value,count:55},
                    {name:'Hemiah',count:15},
                ],
            }
        )
    }
    togglePersonHandler = () => {
        const doseShow = this.state.showPersons
        this.setState({showPersons:!doseShow})
    }
    deletePersonHandler = (personIndex) => {
        console.log(personIndex)
        const personsss = this.state.persons
        personsss.splice(personIndex,1)
        this.setState({
            persons:personsss
        })
    }
    render() {
        const style = {
            backgroundColor:'white',
            font:'inherit',
            border:'1px solid blue',
            padding:'8px',
            cursor:'pointer'
        };
        let personModule = null 
        if(this.state.showPersons) {
            personModule = (
                <div>
                    {
                        this.state.persons.map((person,index) => {
                            return <Person 
                            key={index} 
                            name={person.name} 
                            count={person.count}
                            changed={(event) => this.nameChangedHandle(event,person.id)}
                            myclick={() => this.deletePersonHandler(index)}
                            />
                        })
                    }
                    {/* <Person 
                        changed={this.nameChangedHandle}
                        name={this.state.persons[0].name} 
                        count={this.state.persons[0].count} 
                    />
                    <Person 
                        changed={this.nameChangedHandle111}
                        myclick={this.swithNameHandler.bind(this,'afanfan')}
                        name={this.state.persons[1].name} 
                        count={this.state.persons[1].count} 
                    />
                    <Person 
                        name={this.state.persons[2].name} 
                        count={this.state.persons[2].count}>
                        以上是我关系最亲密的三个好朋友
                    </Person> */}
                </div>
            )
        }
        return (
            // className="App1" 这个App可以随便写，是跟样式相关的
            // 事件传递的时候有两种方式，第一种是箭头函数，第二种是bind的方式，bind后面的this就是this.setState中的this
            <div className="App1">
                <h1>hello react</h1>

                <button onClick={this.swithNameHandler111}>更改状态值(state状态的使用)</button>

                {/* 函数传参 */}
                <button onClick={() => this.swithNameHandler('传事件演示')}>更改状态值(es6方式传事件)</button>

                {/* <button style={style} onClick={this.swithNameHandler.bind(this,'zhangfan')}>更改状态值(bind方式传事件)</button> */}

                <button style={style} onClick={this.togglePersonHandler}>内容切换</button>


                <img src={logo} className="App-logo" alt="logo"/>
                {personModule}
        {/* 如果给了个花括号{}，证明可以在里面写逻辑了 */}
                {/* {
                    this.state.showPersons ? 
                    <div>
                        <Person 
                            changed={this.nameChangedHandle}
                            name={this.state.persons[0].name} 
                            count={this.state.persons[0].count} 
                        />
                        <Person 
                            changed={this.nameChangedHandle111}
                            myclick={this.swithNameHandler.bind(this,'afanfan')}
                            name={this.state.persons[1].name} 
                            count={this.state.persons[1].count} 
                        />
                        <Person 
                            name={this.state.persons[2].name} 
                            count={this.state.persons[2].count}>
                            以上是我关系最亲密的三个好朋友
                        </Person>
                    </div>:null
                } */}
            </div>
        )
        // 不采用jsx的写法
        // return React.createElement('div',{className:'App'},'h1','hello zhangfan') // h1hello zhangfan 

        // 这样写很麻烦，不建议这样写，还是建议jsx
        // return React.createElement('div',{className:'App1'},
        //        React.createElement('h1',null,'我是h1标签的内容')) // h1是div的字标签
    }
}

export default App; // 这个App就是上面function后面的App()
