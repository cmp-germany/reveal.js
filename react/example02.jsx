var HelloComponent = React.createClass({
  render: function() {
    return (
      <h1 className="blue">
        <span className="red">
          Hello,
        </span> world
      </h1>
    );
  }
})

var reactContent =
    <HelloComponent />;

ReactDOM.render(
  reactContent,
  document.getElementById('root')
);
