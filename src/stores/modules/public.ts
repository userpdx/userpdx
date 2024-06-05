import { defineStore } from 'pinia';

export const usePublicStore = defineStore('public', () => {
	const documentTitle = 'demo';

	return {
		documentTitle,
	};
});
