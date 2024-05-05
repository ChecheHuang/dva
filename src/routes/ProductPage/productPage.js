import React from "react";
import Product from "../../components/Product";
import { connect } from "dva";

class ProductPage extends React.Component {
  render() {
    // console.log(this.props)

    const { productList, dispatch, history } = this.props;

    return (
      <div>
        <Product
          title="商品類型"
          dispatch={dispatch}
          productList={productList}
        //   history={history}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productList: state.product,
  };
};

export default connect(mapStateToProps)(ProductPage);
