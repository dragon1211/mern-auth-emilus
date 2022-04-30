import React, { Component } from 'react'
import { Route, Switch, } from 'react-router-dom';
import MailItem from './MailItem';
import MailDetail from './MaiDetail';
import MailCompose from './MailCompose';

export class MailContent extends Component {
	render() {
		const { match } = this.props
		return (
			<Switch>
				<Route path={`${match.url}/compose`} component={MailCompose} />
				<Route path={`${match.url}/:category/:id`} component={MailDetail} />
				<Route exact path={`${match.url}/:category`} component={MailItem} />
			</Switch>
		)
	}
}

export default MailContent
