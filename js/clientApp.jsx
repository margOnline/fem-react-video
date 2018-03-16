import React from 'react';
import { render } from 'react-dom';

const MyTitle = function(props) {
  return (
    <div>
      <h1 style={{ color: props.color }}>{props.title}</h1>
    </div>
  );
};

const MyFirstComponent = function() {
  return (
    <div id="some-id">
      <MyTitle title="Game of Thrones" color="YellowGreen" />
      <MyTitle title="House of Cards" color="BurleyWood" />
      <MyTitle title="Homeland" color="Aquamarine" />
      <MyTitle title="Stranger Things" color="LimeGreen" />
    </div>
  );
};

render(<MyFirstComponent />, document.getElementById('app'));
