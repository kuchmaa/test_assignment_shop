import './WebComponent/';
/**
 * Ищет элемент по id
 * @param {string} id
 * @returns {HTMLElement}
 */
export const getElemById = (id) => document.getElementById(id);

/**
 * Создаёт элемент HTML с указанными аттрибутами, классами и содержимым.
 *
 * @template {keyof HTMLElementTagNameMap} T
 * @param {T} tagName - Название HTML-тега.
 * @param {Partial<HTMLElementTagNameMap[T]>} atr - Аттрибуты и свойства для установки на элемент.
 * @param {string[]} classNames - Классы, которые нужно добавить к элементу.
 * @param {string} [innerHTML=null] - Контент, который нужно установить в элемент (по умолчанию `null`).
 * @returns {(...child?: Node[]) => HTMLElementTagNameMap[T]} - Элемент с методом `append` для добавления дочерних элементов.
 */
export const createElement = (tagName, atr, classNames, innerHTML = null) => {
	let elem = document.createElement(tagName);
	if (classNames) {
		elem.classList.add(...classNames);
	}
	if (innerHTML) {
		elem.innerHTML = innerHTML;
	}
	if (atr) {
		for (const key in atr) {
			if (key === 'style' && typeof atr[key] === 'object') {
				const styleString = Object.entries(atr[key])
					.map(
						([prop, value]) =>
							`${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}: ${value}`
					)
					.join('; ');
				elem.setAttribute('style', styleString);
			} else {
				elem[key] = atr[key];
			}
		}
	}
	return (...child) => {
		if (child) {
			elem.append(...child);
		}
		return elem;
	};
};
