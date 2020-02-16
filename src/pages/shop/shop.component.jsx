import React from "react";
// import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/preview collection/collection-preview.component";
import "./shop.styles.scss";
import axios from 'axios';
import { config } from '../../utils/config';

export default class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount() {
    axios
      .get(config.apiUrl + 'shop/fetchShopData')
      .then(res => {
        this.setState({collections:res.data});
      })
      .catch(error => console.log(error));
  }


  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
