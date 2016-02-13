'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

import GetJson from './get_json';

import ListData from './list_component/list_data';
import List from './list';

(() => {
  let id = location.search.replace('?no=', '');

  GetJson('./data/index.json', (data) => {
    ReactDOM.render(<List style={"mdl-color-text--grey-600"} data={ListData} />, document.getElementById('list-header'));
    ReactDOM.render(<List data={ListData} />, document.getElementById('list-menu'));

    if(data[id] != undefined) {
      require.ensure([], function() {
        let Article = require('./article').default; 
        ReactDOM.render(<Article />, document.getElementById('main-part'));
      });
    }
  }, () => {
    alert('You can not connect to server.');
  });
})();
