export const readingTime = (text: string) => {
	const wordsPerMinute = 225; // Average case.
	let result;

	let textLength = text.split(' ').length; // Split by words
	if (textLength > 0) {
		let value = Math.ceil(textLength / wordsPerMinute);
		result = `${value} min read`;
	}

	return result;
};
