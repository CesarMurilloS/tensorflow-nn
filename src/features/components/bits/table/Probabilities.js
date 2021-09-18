import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Typography } from '@material-ui/core';
import { CLASSIFICATION_TAGS } from '../../../../app/constants/constants';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Probabilities({ model, selectedProbability }) {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = useState(selectedProbability);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="secondary mailbox folder">
        {model[0].map((tag, i) => {
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
                      component="span"
                      variant="body2"
                    >
                      Probabilidad: 
                    </Typography>
                    {tag.toFixed(5)}
                  </React.Fragment>
                } />
            </ListItem>
          );
        })}
      </List>
    </div>
  );
}
