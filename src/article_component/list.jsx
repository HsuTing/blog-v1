'use strict';

import React from 'react';

export default class List extends React.Component {
  render() {
    return (
      <ul>
      {this.props.data.map((d, i) => {
        return (
          <li key={i}>{d}</li>
        );
      })}
      </ul>
    );
  }
};
