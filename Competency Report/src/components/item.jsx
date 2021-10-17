import QuantityPicker from "./quantityPicker";
import "./item.css";

const Item = (props) => {

    const handleAdd = () => {
        console.log("Adding item to cart");
    }

    return (
        <div className="item">

            <h5> {props.data.title || "No title"} </h5>

            <label> ${props.data.price.toFixed(2)} </label>

            <img src={props.data.image} alt="Product" />

            <label> ${props.data.price.toFixed(2)} </label>


            <div className="controls">
                <QuantityPicker minimum={props.data.minimum} />
                <button onClick={handleAdd} className="btn btn-sm btn-dark add-btn"> Add </button>
            </div>
        </div>
    );
}

export default Item;