import React from 'react';
import { Avatar, Grid, Paper, TextField, Typography, Button, Link, InputLabel, Select, MenuItem } from '@material-ui/core';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Axios from 'axios';


class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            birth_year: '',
            gender_id: '',
            photo_id_type: '',
            photo_id_number: '',
            comorbidity_ind: '',
            consent_version: '',
        }
    }

    submitForm = e => {
        e.preventDefault();

        const { name, birth_year, gender_id, photo_id_type, photo_id_number, comorbidity_ind, consent_version } = this.state

        console.log("this.state inside registration:", this.state);

        var token = localStorage.getItem("frontendToken");

        Axios.post(`/api/register/${token}`,
            {
                name: name,
                birth_year: birth_year,
                gender_id: gender_id,
                photo_id_type: photo_id_type,
                photo_id_number: photo_id_number,
                comorbidity_ind: comorbidity_ind,
                consent_version: consent_version,
            },
        ).then(response => {
            console.log("response send:", response);
            alert("registered Successfully Please ckeck message on your phone ...!!");
            this.confirm();
        })
            .catch(error => {
                console.log(error)
                alert(error);
                this.confirm();
            })

    }

    confirm = () => {
        this.props.history.push('/');
    }


    render() {

        const paperStyle = { padding: '30px 20px', width: 500, margin: "20px auto" }
        const headerStyle = { margin: 0 }
        const avatarStyle = { backgroundColor: '#1bbd7e' }
        const marginTopField = { marginTop: 15 }

        return (
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AddCircleIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Sign Up</h2>
                        <Typography style={{ color: 'lightgray' }}>Please fill this form to Registered Beneficiery! You can add upto four Beneficiaries</Typography>
                    </Grid>

                    <form style={marginTopField} onSubmit={this.submitForm}>
                        <TextField fullWidth label='Name' placeholder='please enter your name' onChange={(e) => this.setState({ name: e.target.value })} />
                        <TextField fullWidth label='Birth Year' placeholder='please enter your dob' onChange={(e) => this.setState({ birth_year: e.target.value })} />

                        <FormControl component="fieldset" style={marginTopField}>
                            <FormLabel component="legend">Gender</FormLabel>
                            {/* <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}> */}
                            <RadioGroup aria-label="gender" name="gender1" style={{ display: 'initial' }}>
                                <FormControlLabel value="male" control={<Radio />} label="Female" onChange={(e) => this.setState({ gender_id: 1 })} />
                                <FormControlLabel value="female" control={<Radio />} label="Male" onChange={(e) => this.setState({ gender_id: 2 })} />
                            </RadioGroup>
                        </FormControl>

                        <div>
                        <FormControl style={{width: "100%"}}>
                            <InputLabel id="demo-customized-select-label">Photo ID</InputLabel>
                            <Select
                                labelId="demo-customized-select-label"
                                id="demo-customized-select"
                                value={this.state.photo_id_type}
                                onChange={(e) => this.setState({ photo_id_type: e.target.value })}
                            >
                                {/* <MenuItem value="">
                                    <em>None</em>
                                </MenuItem> */}
                                <MenuItem value={1}>Aadhaar Card</MenuItem>
                                <MenuItem value={2}>Driving License</MenuItem>
                                <MenuItem value={3}>PAN Card</MenuItem>
                                <MenuItem value={4}>Passport</MenuItem>
                                <MenuItem value={5}>Pension Passbook</MenuItem>
                            </Select>
                        </FormControl>
                        </div>

                        {/* <TextField fullWidth label='Photo Id' placeholder='please enter your photoid' onChange={(e) => this.setState({ photo_id_type: e.target.value })} /> */}
                        <TextField fullWidth label='Id Number' placeholder='please enter your idnumber' onChange={(e) => this.setState({ photo_id_number: e.target.value })} />
                        <TextField fullWidth label='Comorbidity' placeholder='please enter your Comorbidity' onChange={(e) => this.setState({ comorbidity_ind: e.target.value })} />
                        <TextField fullWidth label='Consent Version' placeholder='please enter your Consent Version' onChange={(e) => this.setState({ consent_version: e.target.value })} />
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={marginTopField}
                        >
                            SignUp
                    </Button>

                        <Typography style={{ display: 'initial', marginLeft: 20 }}>
                            Go To ?
                        <Link href="/">
                                Home Page
                        </Link>
                        </Typography>

                    </form>

                </Paper>
            </Grid>
        );
    }
}

export default Login;
