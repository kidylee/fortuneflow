import React,{Component} from 'react'
import { connect } from 'react-redux'
import { addLayoutItem } from '../actions'

let AddLayoutItem = ({ dispatch }) => {

	return (
		<li className="active">
			<a href="#" onClick={
				e => {
					e.preventDefault()
					dispatch(addLayoutItem('test'))
				}

			}>
			<i className="fa fa-laptop" />
				<span>Add</span>
			</a>
		</li>
	)
}

AddLayoutItem = connect()(AddLayoutItem)

export default AddLayoutItem

