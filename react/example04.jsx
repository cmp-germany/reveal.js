
var HelloComponent = React.createClass({

  render: function() {

    var user = this.props.user;

    return (
      <h1 className="blue">
        <span className={user.favoriteColor}>
          Hello,
        </span> {user.name}
      </h1>
    );
  }

})



var user = {
  name: "Doe",
  favoriteColor: "red"
}



var reactContent =
    <HelloComponent user={user} />;



ReactDOM.render(
  reactContent,
  document.getElementById('root')
);
