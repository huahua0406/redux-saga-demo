import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, incrementAsync, decrement, fetchUsers } from '../redux/actions'

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
					<p>counter: {this.props.counter}</p>
					<button onClick={() => this.props.increment()}>新增+1</button>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={() => this.props.increment()}>新增-1</button>
					&nbsp;&nbsp;&nbsp;
					<button onClick={() => this.props.incrementAsync()}>异步新增+2</button>
					&nbsp;&nbsp;&nbsp;
					<button onClick={() => this.props.fetchUsers()}>axios请求users</button>
				</div>
				{/* <h2>{data}</h2> */}
			</div>
		)
	}
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		increate: () => {
// 			dispatch(increate())
// 		}
// 	}
// }

const mapStateToProps = (state) => {
	return {
		counter: state.counter, // state 对应的 key, 在 reducers/index.js 中声明。
		users: state.users
	}
}
// export default Counter;
export default connect(mapStateToProps, {increment, decrement, incrementAsync, fetchUsers})(Counter)
