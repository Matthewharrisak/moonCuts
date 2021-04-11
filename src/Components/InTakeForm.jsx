import React, {useReducer, useState, useEffect} from 'react';
// import Grid from '@material-ui/core/Grid';
// import Container from '@material-ui/core/Container';
import {sendEmail}  from './Helpers/Email';
// import Select from '@material-ui/core/Select';
// import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';
// import Avatar from '@material-ui/core/Avatar';
// import Button from '@material-ui/core/Button';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import {Checkbox,TextField, FormControlLabel, Button, Avatar }from '@material-ui/core/Checkbox';
import {Checkbox,TextField, FormControlLabel, Button, Avatar, Typography, 
   MenuItem,Container, Grid, Select }from '@material-ui/core';

import LockOutlinedIcon from '@material-ui/icons/LockOutlined';


const initialArg = {
    firstName: '',
    lastName: '',
    pronouns: '',
    email: '',
    phone: '',
    hairGoal: '',
    accessibility: '',
    allergies: '',
    experience:'',
    preferredContact: '',
}

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

function InTakeForm() {
    const classes = useStyles();

    const [state, dispatch] = useReducer(reducer, initialArg);
    const [hairIsOther, setHairIsOther] = useState(false)

    useEffect(() =>  {
        if (state.hairGoal === 'other') {
            setHairIsOther(true)
        }
        }, [state.hairGoal])
    
    function reducer(state, action) {
        switch (action.type) {
            case 'addFirstName':
                return {...state, firstName: action.payload};
            case 'addLastName':
                return {...state, lastName: action.payload};
            case 'addPronouns':
                return {...state,  pronouns: action.payload};
            case 'addEmail':
                return {...state,  email: action.payload};
            case 'addPhone':
                return {...state, phone: action.payload};
            case 'preferredContact':
                return {...state, preferredContact: action.payload}
            case 'addHairGoal':
                return {...state, hairGoal: action.payload};
            case 'addAccessibility':
                return {...state, accessibility: action.payload};
            case 'addAllergies':
                return {...state,  allergies: action.payload};
            case 'addExperience':
                return {...state, experience: action.payload};
            default:
                return state;
            }
    }
     // creates new event object with useReducer values.
        const handleSubmit = (evt) => {
            console.log(state)
            evt.preventDefault();
            // sendEmail(state);
        };
  
    return(
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography display="inline" component="h5" variant="h6">
        Interested in Booking an Appointment?   
         </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={state.firstName}
                fullWidth
                label="First Name"
                autoFocus
                onChange={(e) => dispatch({type: 'addFirstName' , payload: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                value={state.lastName}
                fullWidth
                label="Last Name"
                onChange={(e) => dispatch({type: 'addLastName' , payload: e.target.value})
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                value={state.pronouns}
                label="Pronouns"
                onChange={(e) => dispatch({type: 'addPronouns' , payload: e.target.value})
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                value={state.phone}
                fullWidth
                label="Phone Number"
                name="PhoneNumber"
                autoComplete="lname"
                onChange={(e) => dispatch({type: 'addPhone' , payload: e.target.value})
                }
              />
            </Grid>
             <Grid item xs={12} sm={4}>
            <Typography display="block" component="h1" variant="subtitle2">
            Prefered  Contact
            </Typography>
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Text"
                onClick={(e) => dispatch({type: 'preferredContact' , payload: 'call'})}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="call."
                onClick={(e) => dispatch({type: 'preferredContact' , payload: 'call'})}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                value={state.email}
                label="Email Address"
                onChange={(e) => dispatch({type: 'addEmail' , payload: e.target.value})
                }
              />
            </Grid>


            <Grid item xs={6}>
              Hair Goals
            </Grid>
            <Grid item xs={6}>
              <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={state.hairGoal}
                    fullWidth
                    label="Hair Goals"

                    // InputLabel='Hair Goals'                  
                    onChange={(e) => dispatch({type: 'addHairGoal', payload: e.target.value})}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={'growth'}>growth</MenuItem>
                    <MenuItem value={'maintenance'}>maintenance</MenuItem>
                    <MenuItem value={'transformation'}>transformation</MenuItem>
                    <MenuItem value={'other'}>Other</MenuItem>
                     </Select>
                   
            </Grid>
            <Grid item xs={12}>
            {hairIsOther === true ? <> please explain
                    <TextField
                     type='text' onChange={(e) => dispatch({type: 'addHairGoal' , payload: e.target.value})
                    } /> </> :  null}
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="quiet salon experience?"
                onClick={(e) => dispatch({type: 'addExperience' , payload: "quiet experience please"})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="addAllergies"
                name="addAllergies"
                variant="outlined"
                value={state.allergies}
                fullWidth
                id="addAllergies"
                label="Allergies?"
                autoFocus
                onChange={(e) => dispatch({type: 'addAllergies' , payload: e.target.value})
            }/>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                id="addAccessibility"
                label="Accessibility Request"
                name="addAccessibility"
                value={state.accessibility}
                autoComplete="addAccessibility"
                onChange={(e) => dispatch({type: 'addAccessibility' , payload: e.target.value})
               }
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            onClick={(evt) => handleSubmit(evt)}
          >
            Submit
          </Button>
      </div>
      <button onClick={() => console.log(state)}> statecheck</button>
   
        </Container>
    )
}

export default InTakeForm;