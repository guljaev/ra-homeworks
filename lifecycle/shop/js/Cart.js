class Cart extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps) {
    return (this.props.isOpen || nextProps.isOpen)
      ? (this.props.isOpen && nextProps.isOpen)
        ? (this.props.items.length !== nextProps.items.length)
        : true
      : false;
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
