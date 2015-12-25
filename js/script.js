new Vue({
	el: 'body',

	data: {
		about: 'Hey! I\'m Faiz Ahmad, <br>I\'m a web developer from Rabwah, Pakistan. <br>I solve problems, and create various things for the web.',

		projects: [
			{ name: 'Respondium.com', imageUrl: 'img/respondium.jpg', tags: ['Laravel', 'PHP', 'HTML', 'CSS'] },
			{ name: 'Website for a company', imageUrl: 'img/websiteforacompany.png', tags: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Angularjs'] },
			{ name: 'Elegant - A simple PHP Framework', imageUrl: 'img/elegant.png', tags: ['PHP', 'MySQL', 'MVC', 'OOP', 'Twig'] },
			{ name: 'Laravel Alerter - Easy flash alerts for Laravel 5', imageUrl: 'img/alerter.png', tags: ['Laravel', 'PHP','OOP'] },
			{ name: 'Static angular blog application', imageUrl: 'img/angularblog.png', tags: ['Angularjs', 'JavaScript', 'HTML','Bootstrap'] },
			{ name: 'Node.js website without using any framework or module', imageUrl: 'img/nodejswebsite.png', tags: ['Node.js', 'JavaScript'] },
			{ name: 'Node.js blogging website', imageUrl: 'img/simplenodejsblogging.png', tags: ['Node.js', 'MongoDB', 'JavaScript'] },
		],

		experience: 'I have 2 years of experience creating online products. <br>I\'ve worked with many start ups, Built websites and web apps. <br>And even created frameworks and libraries (just for fun).',

		skills: [
			{ name: 'HTML', percent: '95', className: 'success' },
			{ name: 'CSS', percent: '86', className: 'info' },
			{ name: 'JavaScript', percent: '97', className: 'warning' },
			{ name: 'PHP', percent: '99.999', className: 'danger' },
			{ name: 'Node.js', percent: '80', className: 'primary' },
		]
	}
});