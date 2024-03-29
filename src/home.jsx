'use strict';

import React from 'react';

import Style from './home_component/style';
import Title from './title';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        this.props.data[0],
        this.props.data[1],
        this.props.data[2],
        this.props.data[3],
        this.props.data[4],
      ],
      num: 4,
      search: false
    }
  }

  render() {
    return (
      <div>
        <p className="mdl-typography--body-1 mdl-color-text--grey-800">
          This blog is used to record information about my projects, and some problems which I encounter and solve. I've decided to keep a blog to help out anyone who runs into the same problems that I did. The blog itself is setup using github, so if you are interested in my code, you can see some <a href="https://github.com/HsuTing/blog">here</a>. Finally, if you want to learn more about me, you can see <a href="http://hsuting.github.io/">my personal website</a>.
        </p>

        <div onChange={this._search.bind(this)}>
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

          {this.state.data.map((d, i) => {
            return (
              <div key={i}
                   className={"item mdl-shadow--2dp show"}
                   style={{padding: "40px",
                           marginBottom: "40px",
                           borderRadius: "10px"}}
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

          <div className={this.props.data.length === this.state.data.length || this.state.search ? "hide" : ""}
               style={{textAlign: "center"}}
          >
            <div id="next_article"
                 className="icon material-icons"
                 style={{cursor: "pointer"}}
                 onClick={this._nextArticle.bind(this)}
            >arrow_downward</div>
            <div className="mdl-tooltip mdl-tooltip--large mdl-tooltip--top" htmlFor="next_article">See another article.</div>
          </div>
        </div>
      </div>
    );
  }

  _nextArticle() {
    let data = [...this.state.data];
    if(data.length === this.props.data.length) {
      return;
    }

    data.push(this.props.data[data.length]);
    this.setState({data: data, num: data.length - 1});
  }

  _search(event) {
    let value = event.target.value;
    let data = [...this.props.data];
    let output = [];

    if(value === "") {
      for(let i = 0; i <= this.state.num; i++) {
        output.push(data[i]);
      }
      this.setState({data: output, search: false});
    }
    else {
      for(let i in data) {
        let keyword = data[i].keyword;
        let title = data[i].title;

        let match = new RegExp(value, "i");
        if(keyword.match(match) !== null || title.match(match) !== null) {
          output.push(data[i]);
        }
      }
      this.setState({data: output, search: true});
    }
  }
};
