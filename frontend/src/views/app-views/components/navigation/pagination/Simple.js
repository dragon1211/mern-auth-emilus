import React from 'react';
import { Pagination } from 'antd';

class Simple extends React.Component {
	render() {
        return (
            <Pagination simple defaultCurrent={2} total={50} />
        )
    }
}

export default Simple;