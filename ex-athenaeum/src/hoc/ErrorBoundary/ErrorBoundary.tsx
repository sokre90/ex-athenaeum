import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ErrorDisplay from '../../components/ErrorDisplay/ErrorDisplay';
// import LoggerService from '../../services/logger.service';
// import { addToast } from '../../store/actions';
// import { EAlertType } from '../../store/reducers/toast';

class ErrorBoundary extends Component<any, any> {
	// constructor(props) {
	// 	super(props);
	// 	this.state = { hasError: false };
	// }

	// componentDidCatch(_error, info) {
	// 	this.setState({ hasError: true });
	// 	// Report error to Loggly
	// 	const loggerService = new LoggerService();
	// 	loggerService
	// 		.report({
	// 			stackTrace: info.componentStack,
	// 		})
	// 		.then(() => this.props.showToast('Crash report sent'))
	// 		.catch((err) => console.warn(err));
	// }

	// render() {
	// 	if (this.state.hasError) {
	// 		// Display fallback UI
	// 		return <ErrorDisplay />;
	// 	}
	// 	return this.props.children;
	// }
}

// const mapDispatchToProps = (dispatch: any) => {
// 	return {
// 		showToast: (msg: string) => dispatch(addToast(msg, EAlertType.WARNING)),
// 	};
// };

// export default connect(null, mapDispatchToProps)(ErrorBoundary);
