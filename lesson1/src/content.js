function content() {
	var dom = document.getElementById('app');
	var content = document.createElement('div');
	content.append('Content');
	dom.append(content);
}

export default content;