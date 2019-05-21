# react-bootstrap-grid

This is simply re-packaging the grid components from

https://react-bootstrap.github.io/layout/grid/

Include the css for your application. E.g.

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css"
/>
```

```jsx
import { Col, Row, Container } from '@kunukn/react-bootstrap-grid';

const Card = () => (
  <Container>
    <Row>
      <Col>1 of 3</Col>
      <Col xs={6}>2 of 3 (wider)</Col>
      <Col>3 of 3</Col>
    </Row>
    <Row>
      <Col>1 of 3</Col>
      <Col xs={5}>2 of 3 (wider)</Col>
      <Col>3 of 3</Col>
    </Row>
  </Container>
);
```

Use the components as described in

- https://react-bootstrap.github.io/layout/grid/

# Size

## React components

Gzip minified 1.88 kb<br>
Minified 5.23 kb

## CSS

Brotli minified of the CDN css file is ~6 kb<br>
Original size: 47.4 kb
