const createImagePath = (type) => {
	return `https://firebasestorage.googleapis.com/v0/b/kohi-fcd46.appspot.com/o/${type.toLowerCase()}.png?alt=media`;
};

export default createImagePath;
