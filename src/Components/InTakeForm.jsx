import React, {useReducer} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {sendEmail}  from './Helpers/Email';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


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
}

function InTakeForm() {
    const [state, dispatch] = useReducer(reducer, initialArg);


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
            sendEmail(state);
        };
  
    return(
        <Grid container spacing={6}>
         <Container fixed>

        <div>
        <h1> This is the intake form </h1>
            <div className='inTakeForm'>
                <label> First Name </label>
                <input type='text' 
                 onChange={(e) => dispatch({type: 'addFirstName' , payload: e.target.value})
                }
                 />
                 <br/>
                 <label> Last Name </label>
                <input type='text' 
                 onChange={(e) => dispatch({type: 'addLastName' , payload: e.target.value})
                }
                 />
                 <br/>
                 <label> Pronouns </label>
                 <input type='text' 
                 onChange={(e) => dispatch({type: 'addPronouns' , payload: e.target.value})
                }
                 />
                 <br/>
                 <label> Email </label>
                 <input type='text' 
                 onChange={(e) => dispatch({type: 'addEmail' , payload: e.target.value})
                }
                 />
                 <br/>
                 <label> Phone Number </label>
                 <input type='text' 
                 onChange={(e) => dispatch({type: 'addPhone' , payload: e.target.value})
                }
                 />
                  <br/>
                
                 <label> Hair Goals </label>

                <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={state.hairGoal}
                    onChange={(e) => dispatch({type: 'addHairGoal', payload: e.target.value})}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={'growth'}>growth</MenuItem>
                    <MenuItem value={'maintenance'}>maintenance</MenuItem>
                    <MenuItem value={'transformation'}>transformation</MenuItem>
                    <MenuItem value={'growth'}>growth</MenuItem>

                    <MenuItem value={'other'}>Other</MenuItem>
                </Select>

                    {state.hairGoal === 'other' ? <> please explain
                    <input type='text' onChange={(e) => dispatch({type: 'addHairGoal' , payload: e.target.value})
                    } /> </> :  null}
              

                 <br/>
                 <br/>
                 <br/>

                 <h2>Do you need special accommodations?</h2>
                 <br/>
                 <br/>

                 <label> Accesibility requirements </label>
                 <input type='text' 
                 onChange={(e) => dispatch({type: 'addAccessibility' , payload: e.target.value})
                }
                 />
                 <br/>
                 <label> Allergies </label>
                 <input type='text' 
                 onChange={(e) => dispatch({type: 'addAllergies' , payload: e.target.value})
                }
                 />
                 <br/>
                 <label> Prefered Experience </label>
                 <input type='text' 
                 onChange={(e) => dispatch({type: 'addExperience' , payload: e.target.value})
                }
                 />
            
            <button onClick={(evt) => handleSubmit(evt)}> submit </button>
            </div>
        </div>
        </Container>
        </Grid>

    )
}

export default InTakeForm;