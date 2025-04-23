import React from 'react';
import { FaCog } from 'react-icons/fa';
import MenuItem from './MenuItem';

const Settings = () => (
  <MenuItem
    icon={<FaCog size={18} />}
    title="Settings"
    description="Manage app settings"
  />
);

export default Settings;