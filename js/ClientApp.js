import React from 'react'
import {render} from 'react-dom' //This is saying the only thing i need from reac-dom is the render function.
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
	render () {
		return (
			<div className='app'>
				<div className='landing'>
					<h1>svideo</h1>
					<input type='text' placeholder='search' />
					<a>or Browse All</a>
				</div>
			</div>
		)
	}
})

render(<App />, document.getElementById('app'))