import { connect } from "react-redux";
import { requestProduct } from "../../actions/product_actions";
import ProductShow from "./product_show";

const mapStateToProps = (state, ownProps) => ({
    product: state.entities.products[ownProps.match.params.id],
    productId: ownProps.match.params.id
});

const mapDispatchToProps = dispatch => ({
    requestProduct: productId => dispatch(requestProduct(productId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductShow);