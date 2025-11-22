/**
 *
 * @param {HTMLElement} el
 * @param {number} baseValue
 * @param {number} counterValue
 * @returns {{
 *  addPriceValue: (v: number) => void
 * }}
 */
export default function Cart(el, baseValue, counterValue) {
	const priceWrapper = el.firstElementChild;
	const counterWrapper = el.lastElementChild;
	const setPrice = (price) => `$ ${price}`;
	return {
		addPriceValue(v) {
			priceWrapper.textContent = setPrice((baseValue += v));
			counterValue++;
			counterWrapper.textContent = counterValue;
		},
	};
}
