export class WebComponent extends HTMLElement {
	constructor(tag, className, templateHTML = '') {
		super(); // Вызов конструктора родительского класса
		this.attachShadow({ mode: 'open' }); // Создаём Shadow DOM

		// Создаём элемент и добавляем содержимое
		const wrapper = document.createElement(tag);
		wrapper.innerHTML = templateHTML;
		wrapper.className = className;

		// Добавляем элемент в Shadow DOM
		this.shadowRoot.appendChild(wrapper);
	}
}
