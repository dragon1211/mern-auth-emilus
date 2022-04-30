import React, { Component } from "react";
import { Input } from "antd";

const { Search } = Input;

export class SearchInput extends Component {
  render() {
    return (
      <div>
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          style={{ width: 200 }}
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          onSearch={value => console.log(value)}
          enterButton
        />
        <br />
        <br />
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={value => console.log(value)}
        />
      </div>
    );
  }
}

export default SearchInput;
