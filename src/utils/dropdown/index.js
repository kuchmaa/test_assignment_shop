import { getElemById } from '../dom';

/**
 *
 * @param {{id: string, cover: boolean, close: boolean}} param0
 */
export default function DropDown({ id, cover, close = true }) {
	// console.log(getElemById(id));
	const elem = getElemById(id);
	const [button, menu] = elem.children;
	const closeBtn = menu.getElementsByClassName('dropdown__button--close')[0];
	const state = {
		get isOpen() {
			return close;
		},
		open() {
			document.body.style.overflowY = 'hidden';
			document.body.style.paddingRight = '15px';
			elem.classList.add('dropdown-wrapper--open');
			window.addEventListener('click', closeEvent);
			close = false;
		},
		close() {
			document.body.style.overflowY = 'auto';
			document.body.style.paddingRight = '0';
			close = true;
			window.removeEventListener('click', closeEvent);
			elem.classList.remove('dropdown-wrapper--open');
		},
	};
	var closeEvent = (e) => {
		const contains = (parent, child) => parent.contains(child);

		if (!contains(button, e.target) && !contains(menu, e.target)) {
			state.close();
		}
	};
	if (!close) {
		state.open();
	}
	button.onclick = () => {
		if (!closeBtn) {
			if (close) {
				state.open();
			} else {
				state.close();
			}
		} else {
			state.open();
		}
	};
	if (closeBtn) {
		closeBtn.onclick = state.close;
	}
	return state;
}
