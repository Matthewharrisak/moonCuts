import React, {useReducer} from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const initialArg = {
    name: '',
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
            case 'addName':
                return {...state, name: action.payload};
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
        };
  
    return(
        <Grid container spacing={6}>
         <Container fixed>

        <div>
        <h1> This is the intake form </h1>
            <div className='inTakeForm'>
                <label> Name </label>
                <input type='text' 
                 onChange={(e) => dispatch({type: 'addName' , payload: e.target.value})
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
                 <label> Hair Goals (change this to a select) </label>
                 <input type='text' 
                 onChange={(e) => dispatch({type: 'addHairGoal' , payload: e.target.value})
                }
                 />
                 <br/>
                 Do you need special accommodations?
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
            your response:
           name: {state.name}

        </div>
        </Container>
        </Grid>

    )
}

export default InTakeForm;