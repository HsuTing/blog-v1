'use strict';

import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p className="mdl-typography--body-1 mdl-color-text--grey-800">
          This blog is used to record some information about my projects and some problems which I encounter and solve. Maybe you are searching some problems as I encounter. Therefore, I write it in my blog and share it to everyone which needs it. By the way, I use github to set up this blog. As a result, if you are interested in my code, you can see <a href="https://github.com/HsuTing/blog" style={{textDecoration: "none", color: "inherit", fontWeight: "bold"}}>here</a>.
        </p>

        <ul className="mdl-list">
        {this.props.data.map((d, i) => {
          return (
            <li key={i} className="mdl-list__item mdl-list__item--two-line">
              <span className="mdl-list__item-primary-content">
                <a href={"./?no=" + ((this.props.data.length - 1) - i)} style={{textDecoration: "none"}}>
                  <i className="material-icons mdl-list__item-avatar mdl-color-text--grey-800"
                     style={{fontSize: "20px",
                             padding: "10px",
                             backgroundColor: "initial",
                             color: "initial"}}
                  >label</i>
                  <span className="mdl-color-text--grey-800">{d.title}</span>
                  <span className="mdl-list__item-sub-title">{d.date}</span>
                </a>
              </span>
            </li>
          );
        })}
        </ul>
      </div>
    );
  }
};
