import React from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
  Form,
  FormGroup,
  Label
} from "reactstrap";

export default class YearForm extends React.Component {
  render() {
    return (
      <Form inline>
        <FormGroup>
          <Label for="exampleEmail">Year:</Label>
          <InputGroup>
            <Input placeholder="Year" />
            <InputGroupAddon addonType="append">
              <Button color="secondary">Go!</Button>
            </InputGroupAddon>
          </InputGroup>
        </FormGroup>
      </Form>
    );
  }
}
