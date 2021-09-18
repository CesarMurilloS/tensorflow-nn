import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Box, Typography } from '@material-ui/core';
import { CLASSIFICATION_TAGS } from '../../../../app/constants/constants';
import { Line } from 'react-chartjs-2'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



function Probabilities({model, selectedProbability}) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(selectedProbability);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <Box p={3} justifyContent="center" textAlign="center">
        <Typography variant="h2" gutterBottom color="error">
          Tag: {CLASSIFICATION_TAGS[selectedProbability].name}
        </Typography>
        <Typography variant="h4" gutterBottom>
          Model
        </Typography>
        <List component="nav" aria-label="secondary mailbox folder">
          {model.map((tag, i) => {
            return (
              <ListItem
                button
                selected={selectedIndex === i}
              //onClick={(event) => handleListItemClick(event, i)}
              >
                <ListItemText primary={CLASSIFICATION_TAGS[i].name}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="div"
                        variant="body1"
                      >
                        Tag: {CLASSIFICATION_TAGS[i].tag}
                      </Typography>
                      <Typography
                        component="div"
                        variant="body2"
                      >
                        Probabilidad: {tag.toFixed(5)}%
                      </Typography>
                    </React.Fragment>
                  } />
              </ListItem>
            );
          })}
        </List>
      </Box>
    </div>
  )
}

export default Probabilities
