import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Sneaker } from "../../types/sneaker";

const SneakerPage = () => {
    const params = useParams();
    const [sneakerData, setSneakerData] = useState<Sneaker | null>(null);
    
    
    useEffect(() => {
        const getData = async() => {
            try {
                const req = await fetch (`../data/sneakers.json/${params.id}`);

                const data = await req.json();
                setSneakerData(data)
                console.log (req);
            } catch (e) {
                console.log("Error->", e);
            }
        };

        getData();
}, []);

    return <div>

        {sneakerData && (
            <div className="">
                <img src ={sneakerData.imgUrl}  alt=""/>
                <h1>{sneakerData.title}</h1>
            
            </div>
        )}

    </div>;
};

export default SneakerPage;