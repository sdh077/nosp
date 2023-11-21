<script>
	import Cookies from 'js-cookie';
	if (typeof window !== 'undefined') {
		const token = window.location.hash.split('&')[0].split('=')[1];
		// Cookies.set('token', );
		Cookies.set('token', window.location.hash.split('&')[0].split('=')[1]);
	}
</script>
