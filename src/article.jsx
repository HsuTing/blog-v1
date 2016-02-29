'use strict';

import React from 'react';

import Title from './title';
import Code from './article_component/code';
import List from './article_component/list';

export default class Article extends React.Component {
  render() {
    return (
      <div>
        <Title date={this.props.date} title={this.props.title} keyword={this.props.keyword} text={this.props.text} />

        {this.props.article.map((d, i) => {
          if(typeof(d) == 'object') {
            let label = Object.keys(d)[0];
            switch(label) {
              case "code":
                return (<Code key={i} data={d.code} />);
              case "list":
                return (<List key={i} data={d.list} />);
              default:
                return null;
            }
          }

          return (
            <p key={i}
               className="mdl-typography--body-1"
               dangerouslySetInnerHTML={{__html: d}}
            ></p>
          );
        })}
      </div>
    );
  }
};
