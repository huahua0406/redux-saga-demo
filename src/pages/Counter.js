import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, incrementAsync, incrementAsyncOnce, decrement, fetchRequest } from '../redux/actions'

class Counter extends Component {
	constructor(props) {
		super(props)
		this.state = {}
    }
    // onIncrement(){
    //     this.props.increate()
    // }
    // onDecrement(){
    //     this.props.decrement()
    // }
    // onIncrementAsync(){
    //     this.props.increateAsync()
    // }
	render() {
		return (
			<div>
				{/* 触发dispatch，发送对应的action */}
				<div style={{ marginBottom: 20 }}>
					<h1>counter: {this.props.counter}</h1>
					<button onClick={() => this.props.increment()}>新增+1</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => this.props.increment()}>新增-1</button>
					&nbsp;&nbsp;&nbsp;
					<button onClick={() => this.props.incrementAsync()}>异步新增+1(takeEvery)</button>
					&nbsp;&nbsp;&nbsp;
                    <button onClick={() => this.props.incrementAsyncOnce()}>异步新增+1(takeLatest)</button>
					&nbsp;&nbsp;&nbsp;
					<button onClick={() => this.props.fetchRequest()}>axios请求users</button>
				</div>
			</div>
		)
	}
}

// mapStateToProps，在 reducers/index.js 中，通过 connect 导入对应的 state
// { increate, increateAsync } ,通过 connect 导入对应的action，在view触发相应的action
const mapStateToProps = (state) => {
	return {
		counter: state.counter, // state 对应的 key, 在 reducers/index.js 中声明。
		users: state.users
	}
}
export default connect(mapStateToProps, {increment, decrement, incrementAsync, incrementAsyncOnce, fetchRequest})(Counter)


