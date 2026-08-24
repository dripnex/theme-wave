/**
 * Wave — official Dripnex theme.
 * Token layer only. Same contract as a community theme repo.
 * Must be CommonJS.
 */

const TOKENS = {
  '--bg-base': '#1f1f28',
  '--bg-surface': '#16161d',
  '--bg-elevated': '#2a2a37',
  '--bg-inset': '#121218',
  '--bg-hover': 'rgba(220, 215, 186, 0.06)',
  '--bg-active': 'rgba(220, 215, 186, 0.1)',
  '--text-primary': '#dcd7ba',
  '--text-secondary': 'rgba(220, 215, 186, 0.74)',
  '--text-muted': 'rgba(220, 215, 186, 0.5)',
  '--text-faint': 'rgba(220, 215, 186, 0.32)',
  '--border': 'rgba(220, 215, 186, 0.1)',
  '--border-subtle': 'rgba(220, 215, 186, 0.06)',
  '--border-strong': 'rgba(220, 215, 186, 0.16)',
  '--accent': '#7e9cd8',
  '--accent-hover': '#9aacd8',
  '--accent-muted': 'rgba(126, 156, 216, 0.18)',
  '--accent-subtle': 'rgba(126, 156, 216, 0.1)',
  '--glass-bg': 'rgba(31, 31, 40, 0.88)',
  '--glass-border': 'rgba(220, 215, 186, 0.08)',
  '--glass-bg-menu': 'rgba(42, 42, 55, 0.94)',
  '--glass-border-menu': 'rgba(220, 215, 186, 0.08)',
  '--status-active': '#7e9cd8',
  '--status-on-hold': '#e6c384',
  '--status-completed': '#98bb6c',
  '--status-dropped': '#e46876',
};

module.exports = {
  id: 'theme-wave',
  name: 'Wave',
  version: '0.1.0',
  description: 'Ink and paper, after dark.',

  activate(context) {
    const remove = context.registerTheme({
      id: 'dripnex-wave',
      name: 'Wave',
      description: 'Ink and paper, after dark.',
      author: 'Dripnex',
      colorScheme: 'dark',
      tokens: TOKENS,
    });

    return {
      dispose() {
        remove();
      },
    };
  },
};
