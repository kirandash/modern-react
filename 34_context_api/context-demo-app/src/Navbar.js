import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import Switch from "@material-ui/core/Switch";
import { withStyles } from "@material-ui/core/styles";
import styles from "./styles/NavBarStyles";
import { ThemeContext } from './contexts/ThemeContext'
// import { LanguageContext } from './contexts/LanguageContext'
import { withLanguageContext } from './contexts/LanguageContext'

const content = {
  english: {
    search: "Search",
    flag: "🇫🇷"
  },
  spanish: {
    search: "Chercher",
    flag: "🇨🇬"
  },
  french: {
    search: "Buscar",
    flag: "🇬🇬"
  }
}

class Navbar extends Component {
  static contextType = ThemeContext; // This tells the component to find for the nearest provider with same context

  render() {
    console.log(this.context); // To access the value from context
    const { classes } = this.props;
    const { language } = this.props.languageContext;
    const { search, flag } = content[language];
    const { isDarkMode, toggleTheme } = this.context;
    return (
      // <LanguageContext.Consumer>
      //   {value => (
          <div className={classes.root}>
            <AppBar position='static' color={isDarkMode ? 'primary' : 'default'}>
              <Toolbar>
                <IconButton className={classes.menuButton} color='inherit'>
                  <span>{flag}</span>
                </IconButton>
                <Typography className={classes.title} variant='h6' color='inherit'>
                  App Title 
                  {/* {value.language} */}
                </Typography>
                <Switch onChange={toggleTheme} />
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase
                    placeholder={`${search}...`}
                    classes={{
                      root: classes.inputRoot,
                      input: classes.inputInput
                    }}
                  />
                </div>
              </Toolbar>
            </AppBar>
          </div>
      //   )}
      // </LanguageContext.Consumer>
    );
  }
}
export default withLanguageContext(withStyles(styles)(Navbar));
