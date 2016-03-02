'use strict';

import React from 'react';

export default class Code extends React.Component {
  render() {
    return (
      <div className="mdl-color--grey-200"
           style={{border: "white 1px solid",
                   padding: "20px",
                   marginBottom: "24px"}}
      >
        <pre style={{overflow: "auto",
                     margin: "0px"}}
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
      </div>
    );
  }
};
