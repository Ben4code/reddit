export function makeId(length: number): string {
	let result = '';
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random()
* charactersLength));
	}

	return result;
}

export function slugify(string_: string): string {
	string_ = string_.trim();
	string_ = string_.toLowerCase();

	// Remove accents, swap ñ for n, etc
	const from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
	const to = 'aaaaaaeeeeiiiioooouuuunc------';

	for (let i = 0, l = from.length; i < l; i++) {
		string_ = string_.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
	}

	return string_
		.replace(/[^a-z\d -]/g, '') // Remove invalid chars
		.replace(/\s+/g, '-') // Collapse whitespace and replace by -
		.replace(/-+/g, '-') // Collapse dashes
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, '') // Trim - from end of text
		.replace(/-/g, '_');
}
