import React from 'react';
import ReactDOM from 'react-dom';
import Styles from './app.css';

class App extends React.Component {
	render() {
		return (
			<div className={Styles.myWrapper}>
				<h1 className={Styles.hero}>
					<span className={Styles.person}>Siamak</span>, Hello React!
				</h1>
			</div>
		);
	}
}
export default App;


ReactDOM.render(
	<App />,
	document.querySelector('#app')
);
