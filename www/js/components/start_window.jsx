'use strict';

import React from 'react';
import ReactDOM from 'react-dom';

class StartWindow extends React.Component {

  start(store) {
    store.dispatch({type: 'RESTART'});
  }

  render() {

    const shownClass = ''; //this.props.justLanded ? '' : 'u-hidden';

    return (
      <div className="window">
        <button className="window__send" onClick={() => this.start(this.props.store)}>START</button>
      </div>
    );
  }
};

export default StartWindow;
