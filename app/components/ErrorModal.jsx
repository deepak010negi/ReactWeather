var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var ErrorModal = React.createClass({
  getDefaultProps: function() {
    return{
      title: "Error"
    };
  },
  propTypes: {
    title: React.PropTypes.string,
    message:  React.PropTypes.string.isRequired
  },
  componentDidMount: function() {
    var {title, message} = this.props;
    var modalMarkup = (
      <div id="error-modal" className="reveal tiny text-center" data-reveal="">
        <h4>{title}</h4>
        <p>{message}</p>
        <p>
          <button className="button hollow" data-close="">
            Okay
          </button>
        </p>
      </div>
    );

    // When we pass html element in Jquery it doesnt try to select them , it creates a separate
    // DOM that can be added anywhere in our file. Here we want to create above elements in Jquery
    // and eventually add them into the browser
    var $modal = $(ReactDOMServer.renderToString(modalMarkup));
    // findDOMNode takes the component and it returns the DOM node where that component lives
    // Jquery's html method is used to pass-in the markup I wanna show to the screen which in
    // this case is modal
    $(ReactDOM.findDOMNode(this)).html($modal);

    // this is automatically called by react when the DOM is updated with whatever we
    // have in render function. Here we have used it to open the modal i.e. as the error
    // modal component rendered, we automatically open it up.
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open(); // here foundation is making some changes to the DOM and react doesn't work well
    // with the thrid party lib making changes to the DOM
  },
  render: function() {
    return (
      <div>
      </div>
    );
  }
});

module.exports = ErrorModal;
