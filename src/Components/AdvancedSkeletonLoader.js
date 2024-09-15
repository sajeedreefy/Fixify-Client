// src/components/AdvancedSkeletonLoader.js
import React from 'react';
import './AdvancedSkeletonLoader.css';

const AdvancedSkeletonLoader = () => {
  return (
    <div className="advanced-skeleton-loader">
      <div className="skeleton-header">
        <div className="skeleton-box title"></div>
      </div>
      <div className="skeleton-content">
        <div className="skeleton-box paragraph"></div>
        <div className="skeleton-box paragraph"></div>
        <div className="skeleton-box paragraph"></div>
      </div>
    </div>
  );
};

export default AdvancedSkeletonLoader;
