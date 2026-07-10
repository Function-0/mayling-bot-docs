process.env.ASTRO_TELEMETRY_DISABLED = '1';

const [, , command = 'dev', ...args] = process.argv;

process.argv = [process.argv[0], 'astro', command, ...args];

await import('../node_modules/astro/bin/astro.mjs');

