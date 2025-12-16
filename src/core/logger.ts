type Level = 'info' | 'warn' | 'error';

const isProd = process.env.NODE_ENV === 'production';

function format(level: Level, message: string) {
	const time = new Date().toISOString();
	return `[${time}] [${level.toUpperCase()}]\n ${message}`;
}

export const logger = {
	info(message: string) {
		console.log(format('info', message));
	},

	warn(message: string) {
		console.warn(format('warn', message));
	},

	error(message: string, error?: unknown) {
		console.error(format('error', message));

		if (!isProd && error) {
			console.error(error);
		}
	},
};
