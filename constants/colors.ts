export const COLORS = {
  light: {
    primary: '#E91E63',
    primaryLight: '#FCE4EC',
    background: '#FFFFFF',
    headerBackground: '#FFFFFF',
    cardBackground: '#FFFFFF',
    textPrimary: '#212121',
    textSecondary: '#666666',
    textLight: '#999999',
    border: '#E0E0E0',
    white: '#FFFFFF',
    black: '#000000',
    link: '#2196F3',
  },
  dark: {
    primary: '#F06292',
    primaryLight: '#4A1A2A',
    background: '#1a1a1a',
    headerBackground: '#1a1a1a',
    cardBackground: '#2d2d2d',
    textPrimary: '#FFFFFF',
    textSecondary: '#B0B0B0',
    textLight: '#757575',
    border: '#404040',
    white: '#2d2d2d',
    black: '#FFFFFF',
    link: '#64B5F6',
  },
};

export const getColors = (isDarkMode: boolean) => COLORS[isDarkMode ? 'dark' : 'light'];