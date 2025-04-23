import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import MenuItem from './MenuItem';

const AboutApp = () => (
  <MenuItem
    icon={<FaQuestionCircle size={18} />}
    title="About App"
    description=""
  />
);

export default AboutApp;