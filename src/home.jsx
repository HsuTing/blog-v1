'use strict';

import React from 'react';

import Style from './home_component/style';
import Title from './title';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <p className="mdl-typography--body-1 mdl-color-text--grey-800">
          This blog is used to record some information about my projects and some problems which I encounter and solve. Maybe you are searching some problems as I encounter. Therefore, I write it in my blog and share it to everyone which needs it. By the way, I use github to set up this blog. As a result, if you are interested in my code, you can see <a href="https://github.com/HsuTing/blog" className="link">here</a>. Finally, if you want to learn more about me, you can see <a href="http://hsuting.github.io/" className="link">my personal website</a>.
        </p>

        <div ref="list"
            onChange={this._search.bind(this)}
        >
          <div style={{marginLeft: "-5px"}}>
            <div className="mdl-textfield mdl-js-textfield mdl-textfield--expandable">
              <label className="mdl-button mdl-js-button mdl-button--icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <div className="mdl-textfield__expandable-holder">
                <input className="mdl-textfield__input" type="text" id="search" />
                <label className="mdl-textfield__label" htmlFor="sample-expandable">Expandable Input</label>
              </div>
            </div>
          </div>

          {this.props.data.map((d, i) => {
            return (
              <div key={i}
                   className="item mdl-shadow--2dp"
                   style={{padding: "40px",
                           marginBottom: "40px",
                           borderRadius: "10px"}}
                   data-title={d.keyword}
              >
                <Title date={d.date} title={d.title} keyword={d.keyword} text={d.text} />
                <br/>

                <div style={{width: "100%"}}>
                  <p className="mdl-typography--body-1 mdl-color-text--grey-800 mdl-typography--text-right"
                     style={{marginRight: "20px"}}
                  >
                    <a href={"./?no=" + ((this.props.data.length - 1) - i)} style={{textDecoration: "none", color: "inherit"}}>
                      Read more
                      <i className="material-icons"
                         style={{fontSize: "15px",
                                 position: "relative",
                                 marginLeft: "10px",
                                 top: "4px"}}
                      >arrow_forward</i>
                    </a>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  _search(event) {
    let value = event.target.value;
    let list = this.refs.list.querySelectorAll('.item');

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
