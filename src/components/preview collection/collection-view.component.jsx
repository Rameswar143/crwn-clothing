import React from "react";
import "./collection-preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";
const CollectionView = ({ title, items }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .map(({ id, ...otherCollectionItems }) => (
            <CollectionItem key={id} {...otherCollectionItems} />
          ))}
      </div>
    </div>
  );
};

export default CollectionView;
