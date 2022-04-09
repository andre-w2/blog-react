import React from "react";
import Card from "./Card";

const CardInfo = ({ posts }) => (
  <>
    {posts.map((post) => (
      <Card key={post.id} {...post} />
    ))}
  </>
);

export default CardInfo;
