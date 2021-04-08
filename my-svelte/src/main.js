import App from './App.svelte';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/css/bootstrap-icon.css';

const app = new App({
	target: document.body,
	props: {
		name: 'world'
	}
});

export default app;