  
import React, { useState, useEffect } from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
	
	const [items, setItems] = useState([
		{ itemName: 'Box of Cereal', quantity: 2, units: 2, unitType: 'Box',  isPurchased: false },
		{ itemName: 'Milk', quantity: 1 , units: 1, unitType: 'Gallon', isPurchased: true },
		{ itemName: 'Cookies', quantity: 2, units: 2 , unitType: 'OZ', isPurchased: false },
	]);

	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(6);

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isPurchased: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		calculateTotal();
	};

	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

  const handleUnitsIncrease = (index) => {
		const newItems = [...items];

		newItems[index].units++;

		setItems(newItems);
		calculateTotal();
	};


	const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		calculateTotal();
	};
	const handleUnitsDecrease = (index) => {
		const newItems = [...items];

		newItems[index].units--;

		setItems(newItems);
		calculateTotal();
	};

	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isPurchased = !newItems[index].isPurchased;

		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

	return (
		<div className='app-background'>
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<FontAwesomeIcon icon={faPlus} onClick={() => handleAddButtonClick()} />
				</div>
				<div className='item-list'>
					{items.map((item, index) => (
						<div className='item-container'>
							<div className='item-name' onClick={() => toggleComplete(index)}>
								{item.isPurchased ? (
									<>
										<FontAwesomeIcon icon={faCheckCircle} />
										<span className='completed'>{item.itemName}</span>
									</>
								) : (
									<>
										<FontAwesomeIcon icon={faCircle} />
										<span>{item.itemName}</span>
									</>
								)}
							</div>
							<div className='quantity'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleQuantityDecrease(index)} />
								</button>
								<span> {item.quantity} </span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleQuantityIncrease(index)} />
								</button>
							</div>
              <div className='units'>
								<button>
									<FontAwesomeIcon icon={faChevronLeft} onClick={() => handleUnitsDecrease(index)} />
								</button>
								<span> {item.units} </span>
								<button>
									<FontAwesomeIcon icon={faChevronRight} onClick={() => handleUnitsIncrease(index)} />
								</button>
							</div>
						</div>
            
					))}
				</div>

      

				<div className='total'>Total: {totalItemCount}</div>
			</div>
		</div>

	);
};

export default App;