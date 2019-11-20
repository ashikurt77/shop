import React from "react";

const CollectionPreview = ({ items, title }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((items, idx) => idx < 4)
          .map(({ id, name, ...otherCollectionPreview }) => (
            <div key={id}>{name}</div>
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
