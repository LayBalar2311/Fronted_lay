import React from 'react';
import { FaLock } from 'react-icons/fa';
import MenuItem from './MenuItem';

const TwoFactorAuthentication = () => (
  <MenuItem
    icon={<FaLock size={18} />}
    title="Two-Factor Authentication"
    description="Further secure your account for safety"
  />
);

export default TwoFactorAuthentication;