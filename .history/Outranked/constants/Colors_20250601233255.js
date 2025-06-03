const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

const Colors = {
  light: {
    text: '#11181C',
    background: '#dff6f2',  // matches the onboarding/login
    card: '#ffffff',        // added this line
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    card: '#1e1e1e',        // optional: dark card version
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
};

export default Colors;
