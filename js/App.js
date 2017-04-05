import React from 'react'
import {Match} from 'react-router'
import store from './store'
import {Provider} from 'react-redux'
import AsyncRoute from './AsyncRoute'
import preload from '../public/data.json'
if (global) {
	global.System = {import () {} }
}

const App = () => {
	return (
		<Provider store={store}>
			{/*this is how you comment inside the blocks */}
			<div className='app'>
				<Match 
					exactly 
					pattern='/' 
					component={(props) => <AsyncRoute props={props} loadingPromise={System.import('./Landing')} />}
				/>
				<Match 
					pattern='/search' 
					component={(props) => <AsyncRoute 
						props={Object.assign({shows: preload.shows}, props)} 
						loadingPromise={System.import('./Search')} 
					/>} 
				/>
				<Match 
					pattern='/details/:id' 
					component={(props) => {
						const shows = preload.shows.filter((show) => props.params.id === show.imdbID)
						return <AsyncRoute props={Object.assign({show: shows[0]}, props)} loadingPromise={System.import('./Details')} />
					}} 
				/>
			</div>
		</Provider>
	)
}

export default App