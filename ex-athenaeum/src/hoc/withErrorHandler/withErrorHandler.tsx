import React, { Component, Fragment } from 'react';
// import {
// 	handleInvalidAccessToken,
// 	logoutSuccess,
// 	addToast
// } from '../../store/actions';
// import axios from '../../axios-instance';
// import { EErrorSubStatus } from '../../models/EErrorSubStatus';
// import { connect } from 'react-redux';
// import { EAlertType } from '../../store/reducers/toast';

const withErrorHandler = (WrappedComponent: any) => {
	// const cmpt = class extends Component<any> {
	// 	resInterceptor;

	// 	UNSAFE_componentWillMount() {
	// 		this.setInterceptor();
	// 	}

	// 	componentWillUnmount() {
	// 		this.ejectInterceptor();
	// 	}

	// 	setInterceptor = () => {
	// 		this.resInterceptor = axios.interceptors.response.use(
	// 			res => res,
	// 			async err => {
	// 				// console.log(err.response);
	// 				if (err.response && err.response.data) {
	// 					const serverError = err.response.data;
	// 					switch (serverError.status) {
	// 						case 401:
	// 							if (
	// 								serverError.subStatus === EErrorSubStatus.INVALID_ACCESS_TOKEN
	// 							) {
	// 								// If auto sign in is enabled refresh token is empty
	// 								// If refresh token is present try to fetch access token
	// 								// Else logout
	// 								if (this.props.rt) {
	// 									// MUST RETURN RESPONSE
	// 									try {
	// 										return await this.props.onInvalidAccessToken(
	// 											err.response.config
	// 										);
	// 									} catch (err) {
	// 										if (err && err.response && err.response.data) {
	// 											throw err.response.data;
	// 										} else if (
	// 											err &&
	// 											err.subStatus === EErrorSubStatus.INVALID_REFRESH_TOKEN
	// 										) {
	// 											this.props.onLogout();
	// 										} else {
	// 											throw err;
	// 										}
	// 									}
	// 								} else {
	// 									this.props.onLogout();
	// 								}
	// 							} else if (
	// 								serverError.subStatus ===
	// 								EErrorSubStatus.INVALID_REFRESH_TOKEN
	// 							) {
	// 								this.props.onLogout();
	// 							} else {
	// 								this.props.addErrorToast('Unauthorized');
	// 							}
	// 							break;
	// 						case 403:
	// 							this.props.addErrorToast('Forbiden');
	// 							break;
	// 						case 503:
	// 							this.props.addWarningToast(
	// 								'Maintenance in progress, please try again later'
	// 							);
	// 							break;
	// 						default:
	// 							if (
	// 								serverError.status === 400 &&
	// 								(serverError.subStatus === EErrorSubStatus.INVALID_EMAIL ||
	// 									serverError.subStatus ===
	// 									EErrorSubStatus.INVALID_RESET_TOKEN)
	// 							) {
	// 								break;
	// 							}
	// 							this.props.addErrorToast('Something went wrong');
	// 							break;
	// 					}
	// 					throw serverError;
	// 				} else {
	// 					this.props.addErrorToast('Network error');
	// 					throw err;
	// 				}
	// 			}
	// 		);
	// 	};

	// 	ejectInterceptor = () => {
	// 		axios.interceptors.response.eject(this.resInterceptor);
	// 	};

	// 	render() {
	// 		return (
	// 			<Fragment>
	// 				<WrappedComponent {...this.props} />
	// 			</Fragment>
	// 		);
	// 	}
	// };

	// const mapStateToProps = state => {
	// 	return {
	// 		isAuthenticated: state.auth.at !== null,
	// 		rt: state.auth.rt
	// 	};
	// };

	// const mapDispatchToProps = dispatch => {
	// 	return {
	// 		onInvalidAccessToken: (config: any) =>
	// 			dispatch(handleInvalidAccessToken(config)),
	// 		onLogout: () => dispatch(logoutSuccess()),
	// 		addErrorToast: msg => dispatch(addToast(msg, EAlertType.DANGER)),
	// 		addWarningToast: msg => dispatch(addToast(msg, EAlertType.WARNING))
	// 	};
	// };

	// return connect(mapStateToProps, mapDispatchToProps)(cmpt);
};

export default withErrorHandler;
