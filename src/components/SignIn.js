import React from 'react';
import { Avatar, Grid, Paper, TextField, Typography, Button, Link } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Axios from 'axios';
import sha256 from 'sha256';


class SignIn extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            mobile: '',
            otp: '',
            txnId: '',
            loading: true,
        }
    }

    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    submitHandler = e => {
        e.preventDefault();

        const { mobile } = this.state;

        console.log("mobile number entered: ", mobile);

        Axios
            .post(
                '/api/sendotp',
                { mobile: mobile },
                // {
                //     headers: {
                //         "Accept": "*",
                //         "x-api-key" : "3sjOr2rmM52GzhpMHjDEE1kpQeRxwFDr4YcBEimi",
                //     },
                // },
                // {mode: 'no-cors'}
            )
            .then(response => {
                console.log("send:", response.data.txnId)
                this.setState({ mobile: "", txnId: response.data.txnId, loading: false });
                console.log("mobile", mobile);
                alert("OTP send Successfully...!!");
            })
            .catch(error => {
                console.log(error);
                alert(error);
            })

    }

    submitOtpHandler = e => {
        e.preventDefault()
        console.log(this.state)

        const { txnId, otp } = this.state;

        console.log("otp", otp);
        console.log("id", txnId);

        // let otpData = CryptoJS.AES.encrypt(otp, 'secret key 123');

        // console.log("encrypted text", otpData.toString());

        let otpData = sha256(otp);

        console.log("encrypted text", otpData);

        Axios
            .post(
                '/api/confirmotp',
                {
                    otp: otpData,
                    txnId: txnId,
                },
            )
            .then(response => {
                console.log("otp:", response.data.token)
                this.setState({ otp: "" });
                localStorage.setItem('frontendToken',
                      response.data.token
                )
                alert("Logged in Successfully...!!");
                this.confirm();
            })
            .catch((error) => {
                console.log(error)
                alert(JSON.stringify(error.response.data.error));
                // this.confirm();
            })

    }

    confirm = () => {
        this.props.history.push('/');
    }

    render() {

        const paperStyle = { padding: '30px 20px', width: 500, margin: "20px auto " }
        const headerStyle = { marginTop: 15 }
        const avatarStyle = { backgroundColor: '#1bbd7e' }
        const marginTopField = { marginTop: 15, marginLeft: 25 }

        const { mobile, otp, loading } = this.state;

        return (
            <Grid>
                <Paper elevation={20} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <AccountCircleIcon />
                        </Avatar>
                        <h2 style={headerStyle}>Sign In Using Mobile Number</h2>
                        <Typography>{loading ? "Please Enter Mobile Number To Sign-In...!" : "Confirm Otp Number...!"}</Typography>
                    </Grid>
                    <form
                        onSubmit={loading ? this.submitHandler : this.submitOtpHandler}
                        style={marginTopField}>

                       {     loading ?

                        <TextField
                            id="filled-basic"
                            label="mobile number"
                            variant="filled"
                            placeholder="enter mobile number"
                            name="mobile"
                            value={mobile}
                            onChange={this.changeHandler}
                        />
                        :
                        <TextField
                            id="filled-basic"
                            label= "otp"
                            variant="filled"
                            placeholder="enter otp"
                            name="otp"
                            type="tel"
                            value={otp}
                            onChange={this.changeHandler}
                        />
                       }
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={marginTopField}
                        >
                            {loading ? "Send OTP " : "Confirm "}
                        </Button>

                    </form>
                </Paper>
            </Grid >
        );
    }
}
export default SignIn;
