const ce = React.createElement;

const MyTitle = function(props) {
  return ce(
    'div',
    null,
    ce('h1', { style: { color: props.color } }, props.title)
  );
};

const MyFirstComponent = function() {
  return ce(
    'div',
    { id: 'some-id' },
    ce(MyTitle, { title: 'Game of Thrones', color: 'YellowGreen' }),
    ce(MyTitle, { title: 'Homeland', color: 'Aquamarine' }),
    ce(MyTitle, { title: 'The Good Fight', color: 'LimeGreen' }),
    ce(MyTitle, { title: 'Stranger Things', color: 'Peru' })
  );
};

ReactDOM.render(ce(MyFirstComponent), document.getElementById('app'));
