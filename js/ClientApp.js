import React from 'react'
import ReactDOM from 'react-dom'
import MyTitle from './MyTitle'

var div = React.DOM.div

var MyTitleFactory = React.createFactory(MyTitle)

var MyFirstComponent = React.createClass({
	render: function () {
		return (
			div(null,
				MyTitleFactory({title: 'props are the best', color: 'peru'}),
				MyTitleFactory({title: 'semicolons are the worst', color: 'mediumaquamarine'}),
				MyTitleFactory({title: 'js', color: 'tomato'}),
				MyTitleFactory({title: 'im out of ideas', color: 'rebeccapurple'})
			)
		)
	}
})

//Here we are telling React to render MyFirstComponent inside of the id app
ReactDOM.render(React.createElement(MyFirstComponent), document.getElementById('app'))