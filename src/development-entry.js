import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import 'components/Base/base.scss';

import * as Grid from 'components/Grid';
let { Col, Row, Container } = Grid.default || Grid;

ReactDOM.render(
  <StrictMode>
    <Container>
      <Row>
        <Col md={4}>md=4</Col>
        <Col md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
        <Col md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
      </Row>
    </Container>
  </StrictMode>,
  document.getElementById('root')
);
