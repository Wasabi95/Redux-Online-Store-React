import React from "react";
import {
   IconButton,
   Typography,
   Grid,
   makeStyles,
   Link,
} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
   container: {
      minHeight: "auto",
      height: 360,
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      backgroundColor: "#0074D9",
   },
   whiteText: {
      color: theme.palette.common.white,
   },
   centerText: {
      textAlign: "center",
   },
   marginTopOne: {
      marginTop: theme.spacing(1),
   },
}));

const Footer = () => {
   const classes = useStyles();
   const year = new Date().getFullYear();

   return (
      <Grid
         component="footer"
         container
         direction="column"
         className={classes.container}
      >
          <Grid item className={classes.column}>
            <img src='https://raw.githubusercontent.com/Wasabi95/NavBar-SideMenu/master/images/cc.png' alt="Company Logo" className={classes.logo} />
         </Grid>
         <Grid item>
            <Link href="mailto:andrey.carvajal@gmail.com" target="_blank">
               <IconButton>
                  <EmailIcon className={classes.whiteText} />
               </IconButton>
            </Link>
            <Link href="https://github.com/Wasabi95" target="_blank">
               <IconButton>
                  <GitHubIcon className={classes.whiteText} />
               </IconButton>
            </Link>
            <Link href="https://twitter.com/AndreyCarvaja17" target="_blank">
               <IconButton>
                  <TwitterIcon className={classes.whiteText} />
               </IconButton>
            </Link>
         </Grid>
         <Grid item>
            <Typography
               variant="body1"
               className={classNames(
                  classes.centerText,
                  classes.whiteText,
                  classes.marginTopOne
               )}
            >
               &copy; {year} Andrey Carvajal.
            </Typography>
            <Typography
               variant="body1"
               className={classNames(
                  classes.centerText,
                  classes.whiteText,
                  classes.marginTopOne
               )}
            >
               All rights reserved.
            </Typography>
         </Grid>
         {/* Additional Elements */}
         <Grid item>
            <Link href="/privacy-policy" className={classes.whiteText}>
               Privacy Policy
            </Link>
            <Link href="/terms-of-service" className={classes.whiteText}>
               Terms of Service
            </Link>
         </Grid>
      </Grid>
   );
};

export default Footer;
