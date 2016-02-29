'use strict';

import React from 'react';

export default class Title extends React.Component {
  render() {
    return (
      <div>
        <h6 className="mdl-typography--title mdl-color-text--grey-400 mdl-typography--font-bold"
            style={{margin: "0px"}}
        >{this.props.date}</h6>
        <h5 className="mdl-typography--display-1 mdl-typography--font-bold"
            style={{margin: "0px"}}
        >{this.props.title}</h5>
        <div style={{width: "100%",
                     height: "2px",
                     margin: "5px 0px 20px 0px",
                     borderRadius: "10px",
                     background: "#fafafa",
                     background: "linear-gradient(to right, #424242, #fafafa)"}}
        ></div>

        <p className="mdl-typography--body-1 mdl-color-text--grey-800"
          dangerouslySetInnerHTML={{__html: this.props.text}}
        ></p>
      </div>
    );
  }
};
