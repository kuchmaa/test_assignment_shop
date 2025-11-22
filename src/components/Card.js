import { createElement } from '../utils/dom';

/**
 * Собирает карточку из api зароса
 *
 * @param {{
 *  title: string,
 *  image: string,
 *  tag: string,
 *  tagColor: string,
 *  price: {
 *      type: "fixed" | "swap"
 *      amount: string | [string, string]
 *  },
 * propductPage: string
 * }} param0
 * @returns {HTMLDivElement}
 */
export default function Card({
	title,
	image,
	tag,
	tagColor,
	price,
	productPage,
}) {
	console.log(productPage);

	return createElement('article', {}, ['card'])(
		Card.Tag({ name: tag, color: tagColor }),
		Card.Body({ title, image, price }),
		Card.Footer(productPage)
	);
}
/**
 * Тег товара
 *
 * @param {{
 *  name: string,
 *  color: string
 * }} tag
 * @returns {HTMLDivElement}
 */
Card.Tag = function (tag) {
	const tagEl = createElement(
		'div',
		{},
		['card__tag', `card__tag--${tag.color}`],
		tag.name
	)();
	return createElement('div', {}, ['card__tag--wrapper'])(tagEl);
};
/**
 *  Галвный контент товара
 *
 * @param {{
 * image: string,
 * title: string,
 * price: {
 *      type: "fixed" | "swap"
 *      amount: string | [string, string]
 *  }
 * }} param0
 * @returns {HTMLDivElement}
 */
Card.Body = function ({ title, image, price }) {
	return createElement('div', {}, ['card__body'])(
		Card.Body.Image(image, title),
		Card.Body.Title(title),
		Card.Body.PriceWrapper(price)
	);
};
/**
 * Картинка товара
 *
 * @param {string} src
 * @returns {HTMLImageElement}
 */
Card.Body.Image = function (src, alt) {
	return createElement('img', { src, alt }, ['card__body__img'])();
};
/**
 * Заголоок товара
 *
 * @param {string} title
 * @returns {HTMLDivElement}
 */
Card.Body.Title = function (title) {
	return createElement('h3', {}, ['card__body__title'], title)();
};
/**
 * Элемемнт с ценами
 *
 * @param {{
 *      type: "fixed" | "swap"
 *      amount: string | [string, string]
 *  }} price
 * @returns {HTMLDivElement}
 */
Card.Body.PriceWrapper = function (price) {
	const wrapper = createElement('div', {}, ['card__price']);
	if (price.type == 'fixed') {
		return wrapper(Card.Body.PriceWrapper.Price(price.amount));
	} else {
		const switcher = createElement('i', { ariaHidden: true }, [
			'card__price--svg',
		])();
		const firstPrice = Card.Body.PriceWrapper.Price(price.amount[0]);
		const lastPrice = Card.Body.PriceWrapper.Price(price.amount[1]);
		return wrapper(firstPrice, switcher, lastPrice);
	}
};
/**
 * Цены товара
 *
 * @param {number} price
 * @returns {HTMLSpanElement}
 */
Card.Body.PriceWrapper.Price = function (price) {
	return createElement('span', {})(
		Card.Body.PriceWrapper.Price.Dollar(),
		price
	);
};
Card.Body.PriceWrapper.Price.Dollar = () => {
	return createElement('span', {}, ['card__price--dollar'], '$')();
};

/**
 * Кнопки товара
 *
 * @param {string} href
 * @returns {HTMLDivElement}
 */
Card.Footer = function (href) {
	return createElement('div', {}, ['card__body__footer'])(
		Card.Footer.Button(),
		createElement(
			'a',
			{ href },
			['card__footer__link'],
			`<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1678 6.8325L6.83396 11.1664" stroke="#70AF00" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M7.1817 6.83905C7.1817 6.83905 10.5185 6.18356 11.1677 6.83269C11.8168 7.48181 11.1592 10.8165 11.1592 10.8165" stroke="#70AF00" stroke-linecap="round" stroke-linejoin="round"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9 15.9374C14.2027 15.9374 15.9375 14.2026 15.9375 8.99988C15.9375 3.79713 14.2027 2.06238 9 2.06238C3.79725 2.06238 2.0625 3.79713 2.0625 8.99988C2.0625 14.2026 3.79725 15.9374 9 15.9374Z" stroke="#70AF00" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        `
		)(createElement('span', {}, ['link'], 'More info')())
	);
};
Card.Footer.Button = function () {
	return createElement('button', {}, [
		'button',
		'button--sm',
		'card__footer__button',
		'button--active',
	])(createElement('x-cart-svg', {})(), 'Buy');
};
Card.Events = {
	/**
	 *
	 * @param {HTMLSpanElement} firstPrice
	 * @param {HTMLSpanElement} lastPrice
	 */
	switchPrice: function (firstPrice, lastPrice) {
		const value = (v) => v.textContent.replace('$', '');
		lastPrice.style.cursor = 'pointer';
		lastPrice.addEventListener('click', () => {
			const f = value(firstPrice);
			firstPrice.replaceChildren(
				Card.Body.PriceWrapper.Price.Dollar(),
				value(lastPrice)
			);

			lastPrice.replaceChildren(Card.Body.PriceWrapper.Price.Dollar(), f);
		});
	},
	/**
	 *
	 * @param {HTMLElement} card
	 * @param {HTMLElement} animationToElement
	 */
	Buy: function (card, animationToElement, callback) {
		const originalImg = (() => {
			var el = card.getElementsByTagName('img')[0];
			return {
				element: el,
				get src() {
					return el.src;
				},
				get width() {
					return el.getBoundingClientRect().width;
				},
				get height() {
					return el.getBoundingClientRect().height;
				},
				get top() {
					return el.getBoundingClientRect().top;
				},
				get left() {
					return el.getBoundingClientRect().left;
				},
				get borderRadius() {
					return el.computedStyleMap().get('border-radius').toString();
				},
			};
		})();
		const px = (v) => `${v}px`;
		const Img = createElement('img', {
			src: originalImg.src,
			style: {
				transition: '500ms ease-in-out',
				borderRadius: originalImg.borderRadius,
				position: 'fixed',
				zIndex: 20001,
				// width: px(originalImg.width),
				height: px(originalImg.height),
				top: px(originalImg.top),
				left: px(originalImg.left),
				boxShadow: '0 0 6px 1px rgba(0,0,0,0.2)',
			},
		})();
		card.append(Img);
		Img.style.top = px(
			animationToElement.getBoundingClientRect().top -
				animationToElement.getBoundingClientRect().height
		);
		Img.style.left = px(animationToElement.getBoundingClientRect().left + 11);
		Img.style.height = '70px';
		setTimeout(() => {
			Img.style.top = px(
				animationToElement.getBoundingClientRect().top -
					animationToElement.getBoundingClientRect().height / 2
			);
			setTimeout(() => {
				Img.style.scale = 0;
				callback();
			}, 100);
		}, 500);
	},
};
