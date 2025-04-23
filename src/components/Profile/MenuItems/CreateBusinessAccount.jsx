import React from 'react';
import { FaBuilding } from 'react-icons/fa';
import MenuItem from './MenuItem';

const CreateBusinessAccount = () => (
  <MenuItem
    icon={<FaBuilding size={18} />}
    title="Create Business Account"
    description="Create Business Account"
  />
);

export default CreateBusinessAccount;