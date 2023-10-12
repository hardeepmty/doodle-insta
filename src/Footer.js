import React, { useEffect, useState } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function InstagramFooter() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (windowWidth > 1000) {
    // Do not render the footer on screens wider than 1000px
    return null;
  }

  return (
    <BottomNavigation className="instagram-footer" sx={{ bgcolor: 'black', minHeight: "100px" }}>
    <BottomNavigationAction label="Home" icon={<HomeIcon sx={{ color: 'white', fontSize: 50 }} />} />
    <BottomNavigationAction label="Search" icon={<SearchIcon sx={{ color: 'white', fontSize: 50 }} />} />
    <BottomNavigationAction label="Add" icon={<AddCircleOutlineIcon sx={{ color: 'white', fontSize: 50 }} />} />
    <BottomNavigationAction label="Likes" icon={<FavoriteBorderIcon sx={{ color: 'white', fontSize: 50 }} />} />
    <BottomNavigationAction label="Profile" icon={<AccountCircleIcon sx={{ color: 'white', fontSize: 50 }} />} />
  </BottomNavigation>
  
  );
}

export default InstagramFooter;
