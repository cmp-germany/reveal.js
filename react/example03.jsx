var HelloComponent = React.createClass({
  render: function() {
    return (
      <h1 className="blue">
        <span className="red">
          Hello,
        </span> {this.props.userName}
      </h1>
    );
  }
})

var reactContent =
    <HelloComponent userName="John" />;

ReactDOM.render(
  reactContent,
  document.getElementById('root')
);
