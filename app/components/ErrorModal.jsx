var React = require('react');

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
    // this is automatically called by react when the DOM is updated with whatever we
    // have in render function. Here we have used it to open the modal i.e. as the error
    // modal component rendered, we automatically open it up.
    var modal = new Foundation.Reveal($('#error-modal'));
    modal.open();
  },
  render: function() {
    var {title, message} = this.props;
    return (
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
  }
});

module.exports = ErrorModal;
