import React, { Component } from 'react'
import { Progress } from 'antd';

export class Dashboard extends Component {
    render() {
        return (
            <Progress type="dashboard" percent={75} />
        )
    }
}

export default Dashboard
