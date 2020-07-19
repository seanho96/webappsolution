import React from 'react';

// This is the helper function we created above
import { isPrefersDarkMode } from '@global/helpers';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(isPrefersDarkMode());

  return (
    <div className="dark-mode-toggle">
      <input type="checkbox" checked={isDarkMode} onChange={
        () => {
          setIsDarkMode(!isDarkMode);
          document.body.classList.toggle('dark-mode', !isDarkMode);
        }
      }
      />
    </div>
  );
}

export default DarkModeToggle;