import { ReactComponent as Spinner } from "@/assets/Spinner.svg";
import { useProductContext } from "@/Context/ProductContext";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

export const SingleProduct = () => {
  const context = useProductContext();

  return (
    <div className="container d-flex flex-column gap-3 mt-5">
      {
        context.loading ? <Spinner className="mx-auto" style={{ width: "200px", height: "200px" }}/>:
        <Container>
      <Row>
        <Col >
        <img className="image-pdp" src={context.selectedProduct.image} alt={context.selectedProduct.product_name} />
        </Col>
        <Col className="my-auto ">
            <h1>{context.selectedProduct.product_name} </h1>
            <h5 className="model">MODEL: {context.selectedProduct.brand} </h5>
            <h6 >Category: {context.selectedProduct.category} </h6>
            <div>
                <p className="price">$ {context.selectedProduct.price} </p>
              
            </div>
            <p className="description"> {context.selectedProduct.description}</p>
            <div className="d-grid gap-2">
            {
              context.selectedProduct.isActive?<Button variant="success" size="lg">Add to cart</Button>:
              <Button variant="secondary" size="lg" disabled>Out of stock</Button>
            }
                
            </div>
        </Col>
      </Row>
     
    </Container>
      }
    </div>
  );
};
