import './css';
import './utils/';
import { Card, Switcher } from './components';
import { getElemById } from './utils/dom';
import FruitParalax from './utils/paralax';
import DropDown from './utils/dropdown';
import Cart from './components/Cart';

window.onload = function () {
	const cardsWrapper = getElemById('cards');
	const cardList = getElemById('card-list');
	const cart = getElemById('cart');
	const cartPrice = Cart(cart, 0, 0);
	setTimeout(() => {
		// Убераем loader
		document.body.classList.remove('pageLoading');
	}, 400);
	// Переключатель языка
	Switcher(getElemById('switch-lang', false));
	FruitParalax(document.getElementsByClassName('section__hero')[0], 7);
	FruitParalax(cardsWrapper, 7);
	DropDown({
		id: 'top-nav-contacts',
		cover: false,
		close: true,
	});
	DropDown({
		id: 'menu-dropdown',
		cover: true,
		close: true,
	});
	/**
	 * Для дозагрузки товаров
	 */
	// fetch('/public/db/items/1/1.json')
	// 	.then((data) => data.json())
	// 	.then((json) => {
	// 		getElemById('card-list').append(
	// 			...json.items.map((child) => Card(child))
	// 		);
	// 	});

	/**
	 * Просталяем нужные ивенты
	 */
	(async () => {
		Array.from(cardList.children).forEach((card) => {
			// console.log(value);
			const prices = card.getElementsByClassName('card__price')[0].children;
			if (prices.length > 1) {
				Card.Events.switchPrice(prices[0], prices[2]);
			}
			const btn = card.getElementsByTagName('button')[0];
			btn.onclick = () => {
				Card.Events.Buy(card, cart, () => {
					const value = Number(prices[0].textContent.replace('$', ''));
					console.log(value);

					cartPrice.addPriceValue(value);
				});
			};
		});
	})();
};
