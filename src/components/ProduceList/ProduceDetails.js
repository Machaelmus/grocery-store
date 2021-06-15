import {useDispatch} from 'react-redux';
import { addToCart } from '../../store/cart';

function ProduceDetails({produce}) {
  let cartItem = {};
  // console.log(produce.name)
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault()
    cartItem = produce.id;
    dispatch(addToCart(cartItem))
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          onClick={handleAddToCart}
          className={"plus-button" + (cartItem ? " selected" : "")}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;
