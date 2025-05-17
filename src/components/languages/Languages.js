import React, { useContext } from 'react';
import './Languages.scss';
import StyleContext from '../../contexts/StyleContext';
import { ReactCountryFlag } from "react-country-flag";

const languagesData = [
  { name: 'Vietnamese', level: 'Native', countryCode: 'vn' }, 
  { name: 'English', level: 'Fluent', countryCode: 'us' },    
  { name: 'Japanese', level: 'Conversational', countryCode: 'jp' } 
];

const Languages = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={`languages-container ${isDark ? 'dark-mode-section' : ''}`}>
      <h2 className="languages-title">Languages I Speak</h2>
      <div className="languages-list">
        {languagesData.map((lang, index) => (
          <div key={index} className="language-item">
            <ReactCountryFlag 
              countryCode={lang.countryCode} 
              svg 
              style={{
                width: '1.5em',
                height: '1.5em',
                marginRight: '10px'
              }}
              title={lang.name}
            />
            <span className="language-name">{lang.name}</span>
            <span className="language-level">({lang.level})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;