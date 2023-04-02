// import React from "react";
// import { Grid, CircularProgress } from "@material-ui/core";
// import { useSelector } from "react-redux";
// import Post from "./Post/Post";
// import useStyles from "./styles";

// const Posts = () => {
//   const posts = useSelector((state) => state.posts);
//   const classes = useStyles();
//   console.log("postsDAta", posts);
//   console.log("Post length -> ", posts.length);
//   return !posts.length ? (
//     <CircularProgress />
//   ) : (
//     <Grid
//       className={classes.container}
//       container
//       alignItems={"stretch"}
//       spacing={3}
//     >
//       {posts.map((post) => (
//         <Grid key={post.id} item xs={12} sm={6}>
//           <Post post={post} />
//         </Grid>
//       ))}
//     </Grid>
//   );
// };
// export default Posts;
import React from "react";
import { Grid, CircularProgress } from "@material-ui/core";
import { useSelector } from "react-redux";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();
  console.log("postsDAta", posts);
  console.log("Post length -> ", posts.length);
  return !posts.length ? (
    <center>
      <CircularProgress />
    </center>
  ) : (
    <Grid
      className={classes.container}
      container
      alignItems="stretch"
      spacing={3}
    >
      {posts.map((post) => (
        <Grid key={post._id} item xs={12} sm={6} md={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Posts;
