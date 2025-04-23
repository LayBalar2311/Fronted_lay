import React from 'react';
import { FaUser } from 'react-icons/fa';
import MenuItem from '../MenuItem';

const MyAccount = ({ onClick }) => (
  <MenuItem
    icon={<FaUser size={18} />}
    title="My Account"
    description="Make changes to your account"
    onClick={onClick} // This is now supported
  />
);

export default MyAccount;
