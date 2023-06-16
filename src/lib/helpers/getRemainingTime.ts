export const getRemainingTime = (deadline: Date) => {
	const currentDate = new Date();
	const remainingTime = deadline.getTime() - currentDate.getTime();

	const days = Math.ceil(remainingTime / (1000 * 60 * 60 * 24));
	if (days <= 7) {
		return `${days} days left`;
	}

	const weeks = Math.floor(days / 7);
	if (weeks <= 4) {
		return `${weeks} weeks left`;
	}

	const months = Math.floor(days / 30);
	return `${months} months left`;
};
