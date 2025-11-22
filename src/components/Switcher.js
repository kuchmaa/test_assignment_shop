/**
 *
 * @param {HTMLElement} el
 * @param {Boolean} startValue - true = left | false = right
 */
export default (el, startValue = true) => {
	const cls = (v) => `button--toggle__${v ? 'left' : 'right'}`;

	const retObj = {
		get current() {
			return startValue;
		},
		toggle() {
			el.classList.replace(cls(!startValue), cls(startValue));
			// el.classList.add();
			startValue = !startValue;
			return startValue;
		},
	};
	el.addEventListener('click', () => {
		startValue = retObj.toggle();
	});
	return retObj;
};
