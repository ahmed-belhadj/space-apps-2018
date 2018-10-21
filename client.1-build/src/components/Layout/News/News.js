import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import NewsItem from "./NewsItem/NewsItem";

export default class News extends React.Component {
  render() {
    return (
      <ListGroup>
        <ListGroupItem>
          <NewsItem />
        </ListGroupItem>
        <ListGroupItem>
          <NewsItem />
        </ListGroupItem>
        <ListGroupItem />
        <ListGroupItem>
          <NewsItem />
        </ListGroupItem>
        <ListGroupItem>
          <NewsItem />
        </ListGroupItem>
      </ListGroup>
    );
  }
}
