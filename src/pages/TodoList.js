import React, { useState, useEffect } from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { Spin, Divider, List, Typography, Button } from 'antd'
import AddModal from '../components/Modal'
import * as actions from '../redux/actions'

function TodoList(props) {
	const [visible, setVisible] = useState(false);
	const data = useSelector((state) => state.todos)
	const dispatch = useDispatch()

    
	useEffect(() => {
		dispatch(actions.fetchTodos())
    }, [dispatch])

    const handleOpen = () =>{
        setVisible(true);
    }
    
    const handleOk = () => {
        setVisible(false);
    }

    const handleCancel = () => {
        setVisible(false);
    }

	return (
		<>
			<h1>Todo List</h1>
			<Spin spinning={data.loading}>
				<Divider orientation="left">Default Size</Divider>
				<List
					header={<div>
                        <Button type="primary" onClick={handleOpen}>新增</Button>
                    </div>}
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
            <AddModal visible={visible} handleOk={handleOk} handleCancel={handleCancel}/>
		</>
	)
}

export default TodoList
