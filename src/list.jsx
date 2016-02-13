'use strict';

import React from 'react';

export default class List extends React.Component {
  render() {
    let data = this.props.data;
    let style = "mdl-navigation__link ";
    if(this.props.style != undefined) {
      style += this.props.style;
    }

    return (
      <nav className="mdl-navigation">
        {data.map((d, i) => {
          return (
            <a key={i} className={style} href={d.url}>{d.label}</a>
          );
        })}
      </nav>
    );
  }
};
