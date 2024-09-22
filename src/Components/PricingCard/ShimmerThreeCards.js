import React from 'react';
import { ShimmerThumbnail} from 'react-shimmer-effects';

const ShimmerThreeCards = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', padding: '20px' }}>
      {/* Shimmer Card 1 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        border: '1px solid #ddd', 
        padding: '15px', 
        borderRadius: '10px', 
        width: '350px',
        height: '500px',
        boxShadow: '0px 0px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff' // Added background color
      }}>
        <ShimmerThumbnail height={470} width={330} />
      </div>

      {/* Shimmer Card 2 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        border: '1px solid #ddd', 
        padding: '15px', 
        borderRadius: '10px', 
        width: '350px',
        height: '500px',
        boxShadow: '0px 0px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff' // Added background color
      }}>
        <ShimmerThumbnail height={470} width={330} />
      </div>

      {/* Shimmer Card 3 */}
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        border: '1px solid #ddd', 
        padding: '15px', 
        borderRadius: '10px', 
        width: '350px',
        height: '500px',
        boxShadow: '0px 0px 8px rgba(0,0,0,0.1)',
        backgroundColor: '#fff' // Added background color
      }}>
        <ShimmerThumbnail height={470} width={330} />
      </div>
    </div>
  );
};

export default ShimmerThreeCards;
