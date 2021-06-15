import { useState, useEffect } from 'react';
import {useDispatch} from 'react-redux';
import { removeItem } from '../../store/cart';
import {incrementItem} from '../../store/cart'

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();

  const handleRemove = (e) => {
    e.preventDefault();
    dispatch(removeItem(item.id))
  }


  const incrementButton = (e) => {
    e.preventDefault()
    dispatch(incrementItem(item.id, count))

  }

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">
        {item.name}
      </div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count} />
        <button
          className="cart-item-button"
          onClick={incrementButton}
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={handleRemove}
        >
          Remove
        </button>
      </div>
    </li>
  )
}

export default CartItem;
