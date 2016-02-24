'use strict';

import React from 'react';

import Code from './article_component/code';
import List from './article_component/list';

export default class Article extends React.Component {
  render() {
    return (
      <div>
        <h3 className="mdl-typography--display-2">{this.props.title}</h3>
        <h6 className="mdl-typography--title mdl-color-text--grey-400">{this.props.date}</h6>
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

        <div className="fb-comments"
             data-href={"http://hsuting.github.io/blog/" + this.props.search}
             data-width="100%"
             data-height="200px"
             data-numposts="5"
        ></div>
      </div>
    );
  }
};
