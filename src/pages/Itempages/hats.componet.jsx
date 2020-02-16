import React from 'react'
import CollectionView from "../../components/preview collection/collection-view.component";
import axios from 'axios';
import { config } from '../../utils/config';
class HatsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount() {
    axios
      .get(config.apiUrl + `shop/getItems/hats`)
      .then(res => {
        this.setState({ collections: res.data });
      })
      .catch(error => console.log(error));
  }


  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionView key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  }
}
export default HatsPage;