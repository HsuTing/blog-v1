'use strict';

import React from 'react';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p className="mdl-typography--body-1 mdl-color-text--grey-800">
          This blog is used to record some information about my projects and some problems which I encounter and solve. Maybe you are searching some problems as I encounter. Therefore, I write it in my blog and share it to everyone which needs it. By the way, I use github to set up this blog. As a result, if you are interested in my code, you can see <a href="https://github.com/HsuTing/blog" className="link">here</a>. Finally, if you want to learn more about me, you can see <a href="http://hsuting.github.io/" className="link">my personal website</a>.
        </p>

        <ul ref="list"
            className="mdl-list"
            onChange={this._search.bind(this)}
        >
          <li className="mdl-list__item mdl-list__item--two-line">
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable"
                 style={{marginLeft: "2px"}}
            >
              <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" id="search" />
                <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
              </div>
            </div>
          </li>

          {this.props.data.map((d, i) => {
            return (
              <li key={i}
                  className="mdl-list__item mdl-list__item--two-line"
                  data-title={d.keyword}
              >
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

  _search(event) {
    let value = event.target.value;
    let list = this.refs.list.querySelectorAll('li');

    for(let i = 0; i < list.length; i++) {
      let title = list[i].dataset.title;
      if(title != undefined) {
        if(value == "") {
          list[i].style.display = "block";
          continue;
        }

        let match = new RegExp(value, "i");
        if(title.match(match) != null) {
          list[i].style.display = "block";
        }
        else{
          list[i].style.display = "none";
        }
      }
    }
  }
};
