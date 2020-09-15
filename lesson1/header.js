function header() {
	var dom = document.getElementById('app');
	var header = document.createElement('div');
	header.append('Header');
	dom.append(header);
}

// export default header;

module.exports = header;