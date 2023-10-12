import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
const Post = () => {
  return (
    <div className="post">
    <Card sx={{ margin: 5 , bgcolor:"black",color:"white",borderRadius:"8%",width:"150%",  boxShadow:"1px 1px 1px rgb(249, 237, 237)"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Hardeep Mohanty"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="wallpaperflare.com_wallpaper (4).jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox sx={{color:"white"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share sx={{color:"white"}} />
        </IconButton>
      </CardActions>
    </Card>

    <Card sx={{ margin: 5 , bgcolor:"black",color:"white",borderRadius:"8%",width:"150%",  boxShadow:"1px 1px 1px rgb(249, 237, 237)"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Rohit Dash"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="wallpaperflare.com_wallpaper (6).jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox sx={{color:"white"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share sx={{color:"white"}} />
        </IconButton>
      </CardActions>
    </Card>

    <Card sx={{ margin: 5 , bgcolor:"black",color:"white",borderRadius:"8%",width:"150%",  boxShadow:"1px 1px 1px rgb(249, 237, 237)"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            A
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Avinash Mohanty"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="wallpaperflare.com_wallpaper (7).jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" sx={{fontSize: 50}}>
          <Checkbox sx={{color:"white"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share sx={{color:"white"}} />
        </IconButton>
      </CardActions>
    </Card>

    <Card sx={{ margin: 5 , bgcolor:"black",color:"white",borderRadius:"8%",width:"150%",  boxShadow:"1px 1px 1px rgb(249, 237, 237)"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            S
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Sujit Kumar"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="https://images.pexels.com/photos/4534200/pexels-photo-4534200.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox sx={{color:"white"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share sx={{color:"white"}} />
        </IconButton>
      </CardActions>
    </Card>

    <Card sx={{ margin: 5 , bgcolor:"black",color:"white",borderRadius:"8%",width:"150%",  boxShadow:"1px 1px 1px rgb(249, 237, 237)"}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
            H
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Hardeep Mohanty"
        subheader="September 14, 2022"
      />
      <CardMedia
        component="img"
        height="20%"
        image="wallpaperflare.com_wallpaper (4).jpg"
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="white">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox sx={{color:"white"}}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: "red" }} />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share sx={{color:"white"}} />
        </IconButton>
      </CardActions>
    </Card>
    </div>
  );
};

export default Post;