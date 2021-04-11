import React, {useReducer, useState, useEffect} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import input from '@material-ui/core/input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { ContactSupportOutlined } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import {sendEmail}  from './Helpers/Email';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

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
  // form: {
  //   width: '100%', // Fix IE 11 issue.
  //   marginTop: theme.spacing(3),
  // },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
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

export default function InTakeForm() {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialArg);
  const [hairIsOther, setHairIsOther] = useState(false)

  useEffect(() =>  {
    if (state.hairGoal === 'other') {
        setHairIsOther(true)
    }
    }, [state.hairGoal])

    const handleSubmit = (evt) => {
        console.log(state)
        // evt.preventDefault();
        sendEmail(state);
    };

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

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        Interested in Booking an Appointment?   
         </Typography>
        {/* <form className={classes.form} noValidate> */}
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <input
                // autoComplete="fname"
                // name="firstName"
                variant="outlined"
                // required
                value={state.firstName}
                fullWidth
                // id="firstName"
                label="First Name"
                autoFocus
                onChange={(e) => dispatch({type: 'addFirstName' , payload: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                variant="outlined"
                required
                value={state.lastName}
                fullWidth
                // id="lastName"
                label="Last Name"
                // name="lastName"
                // autoComplete="lname"
                onChange={(e) => dispatch({type: 'addLastName' , payload: e.target.value})
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                variant="outlined"
                fullWidth
                value={state.pronouns}
                // id="Pronouns"
                label="Pronouns"
                // name="Pronouns"
                // autoComplete="Pronouns"
                onChange={(e) => dispatch({type: 'addPronouns' , payload: e.target.value})
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
                variant="outlined"
                required
                value={state.phone}
                fullWidth
                // id="PhoneNumber"
                label="Phone Number"
                name="PhoneNumber"
                autoComplete="lname"
                onChange={(e) => dispatch({type: 'addPhone' , payload: e.target.value})
                }
              />
            </Grid>
             <Grid item xs={12} sm={4}>
            <Typography component="h1" variant="h5">
            Prefered  Contact
            </Typography>
            </Grid>
            {/*
            <Grid item xs={12} sm={4}>
                <button onClick={(e) => dispatch({type: 'preferredContact' , payload: 'call'})}> call </button>
            </Grid>
            <Grid item xs={12} sm={4}>
                <button onClick={(e) => dispatch({type: 'preferredContact' , payload: 'call'})}> call </button>
            </Grid> */}
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
              <input
                variant="outlined"
                required
                fullWidth
                value={state.email}
                // id="email"
                label="Email Address"
                // name="email"
                // autoComplete="email"
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
                    label="Phone Number"

                    InputLabel='Hair Goals'                  
                    onChange={(e) => dispatch({type: 'addHairGoal', payload: e.target.value})}
                    // onChange={setHairIsOther((e) => e.target.value)}
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
                    <input
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
              <input
                autoComplete="addAllergies"
                name="addAllergies"
                variant="outlined"
                value={state.allergies}
                fullWidth
                id="addAllergies"
                label="Allergies?"
                autoFocus
                onChange={(e) => dispatch({type: 'addAllergies' , payload: e.target.value})
            }              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <input
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

          {/* <Grid container justify="flex-end"> */}
            {/* <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid> */}
          {/* </Grid> */}
        {/* </form> */}
      </div>
      <button onClick={() => console.log(state)}> statecheck</button>
    </Container>
  );
}