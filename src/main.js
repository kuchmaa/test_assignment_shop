import './css';
import './utils/';
import { Card, Switcher } from './components';
import { getElemById } from './utils/dom';
import FruitParalax from './utils/paralax';
import DropDown from './utils/dropdown';

window.onload = function () {
	const cardsWrapper = getElemById('cards');
	const cardList = getElemById('card-list');
	const cart = getElemById('cart');
	setTimeout(() => {
		document.body.classList.remove('pageLoading');
	}, 400);
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

	(async () => {
		Array.from(cardList.children).forEach((card) => {
			card.getElementsByTagName('button')[0].onclick = () => {
				Card.Events.Buy(card, cart);
			};
		});
	})();
};
