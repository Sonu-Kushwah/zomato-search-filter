import { useEffect, useState } from "react";
import Fooddata from "./foodData";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Cards() {
  const [fdata, setFData] = useState(Fooddata);
  console.log(fdata);

  const [copydata,setCopyData]=useState([]);
  console.log(copydata);

  useEffect(()=>{
    setCopyData(Fooddata);
  })
  
  return (
    <>
      <div className="container">
        <div className="row">
          {fdata.map((item, index) => {
            return (
              <>
                <div className="col-lg-4">
                  <Card className="mb-3 card">
                    <Card.Img variant="top"  src={item.imgdata} />
                    <Card.Body>
                      <Card.Title>{item.rname}</Card.Title>
                      <Card.Text>
                        {item.address}
                      </Card.Text>
                      <div className="ratings">
                        {item.rating} <i class="fa-solid fa-star"></i>
                      </div>
                      <p><b>price:</b>300</p>
                      <h6>{item.somedata}</h6>
                      <Button className="buy-now" variant="primary">Add To Cart</Button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Cards;
