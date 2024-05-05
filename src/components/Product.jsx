import React, { Component } from "react";
import {Link,withRouter,routerRedux} from 'dva/router'
import * as api from '../services/product'

export class Product extends Component {

  componentDidMount() {
    api.getProduct().then((res) => {
      console.log(res)
    })
  }
  clickProductList = () => {
    this.props.dispatch({
      type: "product/updateList",
      payload: '新商品',
    });
  }
  clickProductListAsync = () => {
    this.props.dispatch({
      type: "product/updateListAsync",
      payload: '新商品Async',
    });
  }

  clickProductListApi = () => {
    this.props.dispatch({
      type: "product/updateListHttp",
      payload: '新商品Api',
    });
  }



  clickGoToHandler = () => {
    this.props.history.push('/')
  }

  clickGoReduxToHandler = () => {
    this.props.dispatch(routerRedux.push('/'))
  }

  render() {
    // console.log(this.props)
    const { title, productList } = this.props;

    return (
      <div>
        <div>Product:{title}</div>
        <ul>
          {productList.products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
        <button onClick={this.clickProductList}>
          新增商品列表
        </button>
        <button onClick={this.clickProductListAsync}>
          新增商品列表Async
        </button>
        <button onClick={this.clickProductListApi}>
          新增商品列表Api
        </button>
      
        <Link to="/">去首頁</Link>
        <button onClick = {this.clickGoToHandler }  type="primary" >
         去首頁
        </button>
        <button onClick = {this.clickGoReduxToHandler }  type="primary" >
         去首頁
        </button>
      </div>
    );
  }
}

export default withRouter(Product);
