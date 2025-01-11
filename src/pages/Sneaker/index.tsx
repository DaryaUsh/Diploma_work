import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody } from "react-bootstrap";




const Sneaker = () => {


    const [items, setItems] = useState([]);
    
    useEffect(() => {
        axios.get("/sneakers.json").then((res) =>{
           setItems(res.data.items);
        });

    }, []);


    return (
        <div>
            {items && items.map((item, id) => 
                <CardBody>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                    <Card.Text>{item.sizes}</Card.Text>
                </CardBody>
            )}
        </div>
            )
};

export default Sneaker;