'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import GetJson from './get_json';

import ListData from './list_component/list_data';
import List from './list';

(() => {
  let id = location.search.replace('?no=', '');

  GetJson('./data/list.json', (data_list) => {
    ReactDOM.render(<List style={"mdl-color-text--grey-800"} data={ListData} />, document.getElementById('list-header'));
    ReactDOM.render(<List data={ListData} />, document.getElementById('list-menu'));

    if(data_list[id] != undefined) {
      let file_path = './data/article/' + data_list[id].title.replace(/ /g, '-') + '.json';

      GetJson(file_path, (data_article) => {
        require.ensure([], () => {
          let Article = require('./article').default; 
          ReactDOM.render(
            <Article title={data_list[id].title}
                     date={data_list[id].date}
                     article={data_article}
            />, document.getElementById('main-part')
          );
        });
      }, () => {
        alert('You can not connect to server.');
      });
    }
    else {
      require.ensure([], () => {
        let Home = require('./home').default; 
        ReactDOM.render(
          <Home data={data_list}
          />, document.getElementById('main-part')
        );
      });
    }
  }, () => {
    alert('You can not connect to server.');
  });
})();
