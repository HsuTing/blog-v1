'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import Style from './index_component/style';
import GetJson from './get_json';

import ListData from './list_component/list_data';
import List from './list';

(() => {
  document.querySelector('main').addEventListener('scroll', () => {
    let main_position = document.querySelector('main').scrollTop;
    document.querySelector('.mdl-layout__drawer-button').style.top = -1 * main_position;
  });

  GetJson('./data/list.json', (data_list) => {
    ReactDOM.render(<List style={"mdl-color-text--grey-800"} data={ListData} />, document.getElementById('list-header'));
    ReactDOM.render(<List data={ListData} />, document.getElementById('list-menu'));

    let id = (data_list.length - 1) - location.search.replace('?no=', '');
    if(data_list[id] != undefined && location.search.replace('?no=', '') != '') {
      let file_path = './data/article/' + data_list[id].title.replace(/ /g, '-') + '.json';

      GetJson(file_path, (data_article) => {
        require.ensure([], () => {
          let Article = require('./article').default; 
          ReactDOM.render(
            <Article title={data_list[id].title}
                     date={data_list[id].date}
                     keyword={data_list[id].keyword}
                     text={data_list[id].text}
                     article={data_article}
                     search={location.search}
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
