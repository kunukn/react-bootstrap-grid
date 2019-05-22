# react-bootstrap-grid

This is simply re-packaging the grid components from

https://react-bootstrap.github.io/layout/grid/

Include the CSS for your application. E.g.

```html
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap-grid.min.css"
/>
```


Usage example


```jsx
import { Col, Row, Container } from '@kunukn/react-bootstrap-grid';

const Card = () => (
  <Container>
    <Row>
      <Col sm> One of three columns </Col>
      <Col sm> One of three columns </Col>
      <Col sm> One of three columns </Col>
    </Row>
  </Container>
);
```

Use the components as described in

- https://react-bootstrap.github.io/layout/grid/

# Demo

* https://codesandbox.io/s/reactbootstrapgrid-example-9m5p0
* https://codepen.io/kunukn/pen/0942f6277a2e0c53fc7ff6fa7cc69116


# CDN

## script link

```html
<script src="https://unpkg.com/@kunukn/react-bootstrap-grid/dist/Grid.umd.js"></script>
```

# Size

## React components

Gzip minified 1.88 kb<br>
Minified 5.23 kb

## CSS

Brotli minified of the CDN css file is ~6 kb<br>
Original size: 47.4 kb

# Development and testing

To run development

`yarn start` or `npm start`

```bash
npm i -g yarn
git clone [repo]
cd [repo]
yarn
yarn start
open http://localhost:6007
```

or with **npm**

```bash
git clone [repo]
cd [repo]
npm i
npm start
open http://localhost:6007
```

- To develop and play around: `yarn start`
- To build the bundle: `yarn build`
- To validate the bundle: `yarn validate`
