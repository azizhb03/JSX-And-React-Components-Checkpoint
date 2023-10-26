import { Container, Card } from "react-bootstrap";
import { product } from "./product";
import Name from "./components/Name";
import Price from "./components/Price";
import Description from "./components/Description";
import Image from "./components/Image";

const firstName = "YourFirstName"; // Replace with your first name

function App() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      paddingTop: '50px',
      paddingLeft:'700px'

    }}>
      <Container>
        <Card style={{ width: "18rem" }}>
          <Image imageUrl={product.image} />
          <Card.Body>
            <Name name={product.name} />
            <Price price={product.price} />
            <Description description={product.description} />
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default App;
