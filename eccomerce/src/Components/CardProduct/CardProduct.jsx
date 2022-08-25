import {Link} from "react-router-dom"
import Card from "react-bootstrap/Card";
import fallback  from "@/assets/fallback.png";
import { useProductContext } from "@/Context/ProductContext"

const CardProduct = ({producto}) => {
  const context = useProductContext()
  return (
    <Card style={{ width: "18rem" }} key={producto._id}>
      <Card.Img
        className="image-card"
        variant="top"
        src={producto.image ? producto.image : fallback}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallback;
        }}
      />
      <Card.Body>
          <Card.Title className="text-center product-name text-truncate">
            {producto.product_name}
          </Card.Title>
        <Card.Text className="text-truncate text-center">
          Model: {producto.brand}
        </Card.Text>
        <Card.Text className="fw-bolder fs-5 text-center">
          $ {producto.price}.00
        </Card.Text>
        <div className="d-grid gap-2">
          <Link to={`/${producto._id}`} className="btn btn-success" onClick={() => {context.setSelectedProduct(producto)}} >
            View More
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
