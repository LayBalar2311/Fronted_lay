import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';
import MenuItem from './MenuItem';

const AlarmIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V18C4 19.103 4.897 20 6 20H18C19.103 20 20 19.103 20 18V12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2ZM12 22C10.897 22 10 21.103 10 20H14C14 21.103 13.103 22 12 22Z" fill="#606060" />
    <path d="M12 8C11.447 8 11 8.447 11 9V12C11 12.553 11.447 13 12 13C12.553 13 13 12.553 13 12V9C13 8.447 12.553 8 12 8Z" fill="#606060" />
  </svg>
);

const HelpSupport = () => (
  <MenuItem
    icon={<AlarmIcon />}
    title="Help & Support"
    description="Get assistance for your needs"
  />
);

export default HelpSupport;