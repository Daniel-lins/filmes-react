import React, {useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MovieIcon from '@material-ui/icons/Movie';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SearchIcon from '@material-ui/icons/Search';
import TvIcon from '@material-ui/icons/Tv';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    width: '100%',
    position:'fixed',
    bottom:0,
    backgroundColor: "#2d313a",
    zindex: 100,
    
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

    useEffect(() => {
          if (value === 0) history.push("/");
          else if (value === 1) history.push("/filmes");
          else if (value === 2) history.push("/series");
          else if (value === 3) history.push("/pesquisar");

    }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
       label="Recentes" 
       icon={<WhatshotIcon />} />
      
      <BottomNavigationAction
       label="Filmes" 
       icon={<MovieIcon />} />

      <BottomNavigationAction 
      label="Series" 
      icon={<TvIcon />} />

      <BottomNavigationAction 
      label="Pesquisar" 
      icon={<SearchIcon />} />
    </BottomNavigation>
  );
}