import React from 'react';
import { FaTicketAlt } from 'react-icons/fa';
import MenuItem from './MenuItem';

const CouponHistory = () => (
  <MenuItem
    icon={<FaTicketAlt size={18} />}
    title="Coupon History"
    description="View all previous coupons"
  />
);

export default CouponHistory;