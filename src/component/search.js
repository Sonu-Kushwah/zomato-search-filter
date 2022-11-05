import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Fooddata from "./foodData";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
function Search() {
    const [fdata, setFData] = useState(Fooddata);
    console.log(fdata);

    const handler=(e)=>{
        if(e.target.value==""){
            window.location.reload(true)
            const temArr=fdata;
            setFData(temArr);   
            return
        }
        const serachResult=fdata.filter(item=>
            item.rname.toLowerCase().startsWith(e.target.value.toLowerCase())
            );
        setFData(serachResult);
    }
  return (
    <>
      <div className="container">
        <div className="header">
          <img src="img/Zomato-logo.png" className="img-fluid" />
          <h4>Search Filter App</h4>
        </div>

        <div className="form">
          <Form>
            <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
              <Form.Control
                type="email"
                placeholder="Search Restorent"
                className="seach-restorent"
                onChange={handler}
              />
              <Button variant="primary" type="submit" className="btn-search">
                Submit
              </Button>
            </Form.Group>
          </Form>
        </div>
      </div>

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

export default Search;
