(function () {
	const vscode = acquireVsCodeApi();
	const button = document.getElementById("vsfactro-button");
	const text = document.getElementById("vsfactro-text");
	button.addEventListener("click", async () => {
		console.log(vscode);
		const placeholder = await jsonPlaceholder();
		text.innerText = placeholder.title;
	});
})();


async function jsonPlaceholder() {
	const data = await fetch('https://jsonplaceholder.typicode.com/posts/1');
	return data.json();
}