import { Avatar, Box, List, ListItem, ListItemButton, ListItemText, Stack } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer'
import Post from './Post';
import RightBar from './RightBar'
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import MessageIcon from '@mui/icons-material/Message';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import TipsAndUpdatesIcon from '@mui/icons-material/TipsAndUpdates';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import Diversity1Icon from '@mui/icons-material/Diversity1';
import { Home } from '@mui/icons-material';



const styles = {
  largeAvatar: {
    width: "100px" ,
    height: "100px", //70
  },
};


export default function Navbar() {
  return (
    <div>
      <nav className={"navbar navbar-expand-lg navbar-dark navigation"}>
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><h2>DOODLE.</h2></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className=""><Diversity1Icon sx={{fontSize:50,color:"white"}}/></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        </li>
        <li className="nav-item">
        </li>
          <li className='nav-item dropdown'>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Following
          </a>
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Followers
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id='followers'>
            <li><a className="dropdown-item" href="/">Raj Mohanty</a></li>
            <li><a className="dropdown-item" href="/">Shyam Mohanty</a></li>

            <li><a className="dropdown-item" href="/">Avinash Sarangi</a></li>

            <li><a className="dropdown-item" href="/">Satyajit Sathua</a></li>

            <li><a className="dropdown-item" href="/">Shreya Samikshya</a></li>

            <li><a className="dropdown-item" href="/">Jayprakash Jena</a></li>

            <li><a className="dropdown-item" href="/">Sriharsh Dash</a></li>

            <li><a className="dropdown-item" href="/">Rajat Pani</a></li>
            <li><a className="dropdown-item" href="/">Raj Mohanty</a></li>
            <li><a className="dropdown-item" href="/">Shyam Mohanty</a></li>

            <li><a className="dropdown-item" href="/">Avinash Sarangi</a></li>

            <li><a className="dropdown-item" href="/">Satyajit Sathua</a></li>

            <li><a className="dropdown-item" href="/">Shreya Samikshya</a></li>

            <li><a className="dropdown-item" href="/">Jayprakash Jena</a></li>

            <li><a className="dropdown-item" href="/">Sriharsh Dash</a></li>

            <li><a className="dropdown-item" href="/">Rajat Pani</a></li>
            <li><a className="dropdown-item" href="/">Raj Mohanty</a></li>
            <li><a className="dropdown-item" href="/">Shyam Mohanty</a></li>

            <li><a className="dropdown-item" href="/">Avinash Sarangi</a></li>

            <li><a className="dropdown-item" href="/">Satyajit Sathua</a></li>

            <li><a className="dropdown-item" href="/">Shreya Samikshya</a></li>

            <li><a className="dropdown-item" href="/">Jayprakash Jena</a></li>

            <li><a className="dropdown-item" href="/">Sriharsh Dash</a></li>

            <li><a className="dropdown-item" href="/">Rajat Pani</a></li><li><a className="dropdown-item" href="/">Raj Mohanty</a></li>
            <li><a className="dropdown-item" href="/">Shyam Mohanty</a></li>

            <li><a className="dropdown-item" href="/">Avinash Sarangi</a></li>

            <li><a className="dropdown-item" href="/">Satyajit Sathua</a></li>

            <li><a className="dropdown-item" href="/">Shreya Samikshya</a></li>

            <li><a className="dropdown-item" href="/">Jayprakash Jena</a></li>

            <li><a className="dropdown-item" href="/">Sriharsh Dash</a></li>

            <li><a className="dropdown-item" href="/">Rajat Pani</a></li>
            <li><a className="dropdown-item" href="/">Raj Mohanty</a></li>
            <li><a className="dropdown-item" href="/">Shyam Mohanty</a></li>

            <li><a className="dropdown-item" href="/">Avinash Sarangi</a></li>

            <li><a className="dropdown-item" href="/">Satyajit Sathua</a></li>

            <li><a className="dropdown-item" href="/">Shreya Samikshya</a></li>

            <li><a className="dropdown-item" href="/">Jayprakash Jena</a></li>

            <li><a className="dropdown-item" href="/">Sriharsh Dash</a></li>

            <li><a className="dropdown-item" href="/">Rajat Pani</a></li>
          </ul>
        </li>
      </ul>
      {/* <div className='container2 mx-3'>
        <button type='button' className='btn btn-primary'>Dark Mode</button>
      </div> */}

      <div className="form">
        <ul className='listmenu'>
          <Link to="/" className='list'>Home</Link>
          <Link to="/" className='list'>Profile</Link>
        </ul>
      </div>
    </div>
  </div>
</nav>

<div className='stories'>
<Stack direction="row" spacing={2}>
  <AddAPhotoOutlinedIcon sx={{color:"white"}}/>
  <div className='story1'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={styles.largeAvatar} />
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="first.jpg" sx={styles.largeAvatar}/>
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="second.jpeg" sx={styles.largeAvatar}/>
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="three.jpg" sx={styles.largeAvatar}/>
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="fourth.jpeg" sx={styles.largeAvatar}/>
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="258851.webp" sx={styles.largeAvatar}/>
        </div>
        {/* <div className='story'>
        <Avatar alt="Remy Sharp" src="last.jpg" sx={styles.largeAvatar}/>
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={styles.largeAvatar}/>
        </div> */}
        
        {/* <div className='story'>
        <Avatar alt="Remy Sharp" src="second.jpeg" />
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="three.jpg" />
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="fourth.jpeg" />
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="258851.webp"/>
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="last.jpg" />
        </div>
        <div className='story'>
        <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </div> */}
    </Stack>
  </div>

<div className='feed'>
  <div className='items'>
  <h1 className='explore'>D.</h1>

  <div className='addon'>
        <h4>HARDEEP MOHANTY</h4>
      </div>

        <ul className="sidebar-navigation">
        <li className="nav-item"><HomeIcon/>HOME</li>
        <li className="nav-item"><ExploreIcon/>EXPLORE</li>
        <li className="nav-item"><LocalPhoneIcon/>COMMUNICATION</li>
        <li className="nav-item"><CircleNotificationsIcon/>NOTIFICATION</li>
        <li className="nav-item"><MessageIcon/>MESSAGES</li>
        <li className="nav-item"><BookmarksIcon/>BOOKMARKS</li>
        <li className="nav-item"><AccountBoxIcon/>PROFILE</li>
        <li className="nav-item"><TipsAndUpdatesIcon/>UPDATES</li>
      </ul>
      <hr className="dropdown-divider"/>
      <div className='class'>
        <div className='dir'><button>NEW POST</button></div>
      </div>
  </div>
  <div className='pictures'>
  <Box flex={4} p={2}>
      <Post>
      </Post>
    </Box>
    </div>

      <div className='rightbar'>
        <RightBar/>
      </div>

        <div className='footer'>
          <Footer/>
        </div>

    </div>

    </div>
  )
}
