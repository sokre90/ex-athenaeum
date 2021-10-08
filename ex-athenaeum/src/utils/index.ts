export function sleep(ms: number, fn: any) {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			fn();
		}, 1000);
	});
}
