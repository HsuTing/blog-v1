'use strict';

import React from 'react';

export default class Code extends React.Component {
  render() {
    return (
      <pre style={{border: "#757575 1px solid",
                   padding: "20px",
                   overflow: "auto"}}
      >
        <code>
        {this.props.data.map((d, i) => {
          return (
            <span key={i}
            >{d + '\n'}</span>
          );
        })}
        </code>
      </pre>
    );
  }
};
