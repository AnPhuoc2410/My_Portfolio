import React, { useContext } from 'react';
import './Languages.scss';
import StyleContext from '../../contexts/StyleContext';
import { CifVn, CifUs, CifJp } from 'react-icons/cif'; // Country Icons

const languagesData = [
  { name: 'Vietnamese', level: 'Native', IconComponent: CifVn }, 
  { name: 'English', level: 'Fluent', IconComponent: CifUs },    
  { name: 'Japanese', level: 'Conversational', IconComponent: CifJp } 
];

const Languages = () => {
  const { isDark } = useContext(StyleContext);

  return (
    <div className={`languages-container ${isDark ? 'dark-mode-section' : ''}`}>
      <h2 className="languages-title">Languages I Speak</h2>
      <div className="languages-list">
        {languagesData.map((lang, index) => (
          <div key={index} className="language-item">
            {lang.IconComponent && <lang.IconComponent className="language-icon" />}
            <span className="language-name">{lang.name}</span>
            <span className="language-level">({lang.level})</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages; 