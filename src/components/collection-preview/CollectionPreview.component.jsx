import React from "react";
import CollectionItem from "../collection-item/CollectionItem.component";
import "./CollectionPreview.styles.scss";

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((items, idx) => idx < 4)
          .map(item => (
            <CollectionItem item={item} key={item.id} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
