import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Spin, Divider, List, Typography, Button } from 'antd'
import './App.css'
import Counter from './pages/Counter'
import { fetchTodos } from './redux/actions'

function App() {
	const [visible, setVisible] = useState(false)

	const data = useSelector((state) => state.todos)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchTodos())
	}, [dispatch])

	return (
		<div className="App">
			<Counter />
			<h1>Todo List</h1>
			<Spin spinning={data.loading}>
				<Divider orientation="left">Default Size</Divider>
				<List
					header={<div>Header</div>}
					footer={<div>Footer</div>}
					bordered
					dataSource={data.list}
					renderItem={(item) => (
						<List.Item>
							<Typography.Text mark>[ITEM]</Typography.Text> {item.title}
							<Button type="primary" danger>
								删除
							</Button>
						</List.Item>
					)}
				/>
			</Spin>
		</div>
	)
}

export default App
