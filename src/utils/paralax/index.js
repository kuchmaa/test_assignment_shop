export default function FruitParalax(
	container,
	coficent = 8,
	transformElementClass = 'fruit'
) {
	container.addEventListener(
		'mousemove',
		(e) => {
			Array.from(
				container.getElementsByClassName(transformElementClass)
			).forEach(async (fruit) => {
				const rect = container.getBoundingClientRect();

				const relativeX = e.clientX - rect.left;
				const relativeY = e.clientY - rect.top;

				const percentX = (relativeX / rect.width) * 100;
				const percentY = (relativeY / rect.height) * 100;

				const offsetX = (percentX - 50) / coficent;
				const offsetY = (percentY - 50) / coficent;
				fruit.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
			});
		},
		{
			passive: true,
		}
	);
}
