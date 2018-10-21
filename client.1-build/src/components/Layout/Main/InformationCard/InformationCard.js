import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Table
} from "reactstrap";

const InformationCard = props => {
  return (
    <div>
      <Card>
        <CardBody>
          <Table borderless hover>
            <thead>
              <tr>
                <th>Info:</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">Latitude:</th>
                <td>[numbers here]</td>
              </tr>
              <tr>
                <th scope="row">Longitude:</th>
                <td>[numbers here]</td>
              </tr>
              <tr>
                <th scope="row">Local laws:</th>
                <td>[laws here]</td>
              </tr>
            </tbody>
          </Table>
        </CardBody>
      </Card>
    </div>
  );
};

export default InformationCard;
