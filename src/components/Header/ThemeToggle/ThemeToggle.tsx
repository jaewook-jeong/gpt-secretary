import { useEffect, useState } from 'react';
import { ToggleButton, ToggleThumb } from './ThemeToggle.styled';

const ThemeToggle = () => {
  const [activeTheme, setActiveTheme] = useState(document.body.dataset.theme);
  const inactiveTheme = activeTheme === 'light' ? 'dark' : 'light';

  useEffect(() => {
    if (activeTheme) {
      document.body.dataset.theme = activeTheme;
      window.localStorage.setItem('theme', activeTheme);
    }
  }, [activeTheme]);

  return (
    <ToggleButton
      aria-label={`Change to ${inactiveTheme} mode`}
      title={`Change to ${inactiveTheme} mode`}
      type="button"
      onClick={() => setActiveTheme(inactiveTheme)}
    >
      <ToggleThumb $activeTheme={activeTheme} />
      <span>🌘</span>
      <span>🌕</span>
    </ToggleButton>
  );
};

export default ThemeToggle;
