
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

var JumboComponent = React.createClass({

  render: function() {
    return (
      <div className="container">
        <div className="jumbotron">
          {this.props.children}
        </div>
      </div>
    );
  }

})



var user = {
  name: "Doe",
  favoriteColor: "red"
}



var reactContent =
    (<JumboComponent>
      <HelloComponent user={user} />
    </JumboComponent>);



ReactDOM.render(
  reactContent,
  document.getElementById('root')
);
