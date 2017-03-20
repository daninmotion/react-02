import React from 'react'
import {render} from 'react-dom' //This is saying the only thing i need from react-dom is the render function.
import {BrowserRouter, Match} from 'react-router'
import Landing from './Landing'
import Search from './Search'
import Details from './Details'
import preload from '../public/data.json'
import '../public/normalize.css'
import '../public/style.css'

const App = React.createClass({
	render () {
		return (
			<BrowserRouter>
				{/*this is how you comment inside the blocks */}
				<div className='app'>
					<Match exactly pattern='/' component={Landing} />
					<Match 
						pattern='/search' 
						component={(props) => <Search shows={preload.shows} {...props} />} 
					/>
					<Match 
						pattern='/details/:id' 
						component={(props) => {
							const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
							return <Details show={shows[0]} {...props} />
						}} 
					/>
				</div>
			</BrowserRouter>
		)
	}
})

render(<App />, document.getElementById('app'))