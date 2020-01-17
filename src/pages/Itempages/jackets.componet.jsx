import React from 'react'
import CollectionView from "../../components/preview collection/collection-view.component";
import axios from 'axios';
import { config } from '../../utils/config';
class JacketsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: []
    };
  }

  componentDidMount() {
    axios
      .get(config.apiUrl + `shop/getItems/jackets`)
      .then(res => {
        console.log(this.state.collections);
        this.setState({ collections: res.data });
        console.log(this.state.collections);
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
export default JacketsPage;