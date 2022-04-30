import React, { Component } from "react";
import { Input } from "antd";

const { Search } = Input;

export class SearchInputLoading extends Component {
  render() {
    return (
      <div>
        <Search placeholder="input search loading deault" loading />
        <br />
        <br />
        <Search
          placeholder="input search loading with enterButton"
          loading
          enterButton
        />
      </div>
    );
  }
}

export default SearchInputLoading;
