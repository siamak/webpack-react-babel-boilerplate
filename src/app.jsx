import React from 'react';
import ReactDOM from 'react-dom';

//
// Stylesheets :
import CSSStyles from './styles.css'; // ## Disabled
import Styles from './styles.scss'; // ## Enabled

//
// Just For watching `css-loader`. It has been used `sass-laoder`
console.log(CSSStyles);

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			person: 'Siamak',
		}
	}
	render() {
		return (
			<section className={Styles.myWrapper}>
				<h1 className={Styles.hero}>
					<span
						className={Styles.person}
						contentEditable="true"
						autofocus="true"
						dangerouslySetInnerHTML={{__html: `${this.state.person}` }}
					></span>
					, Hello React!
				</h1>
				<h3 className={Styles.lead}>Webpack–Reactjs–Babel `ES6` — <a href="https://github.com/siamakmokhtari/webpack-react-babel-boilerplate">Fork me</a>.</h3>
			</section>
		);
	}
}
export default App;


ReactDOM.render(
	<App />,
	document.querySelector('#app')
);
