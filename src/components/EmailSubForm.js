import React, { useState, useEffect } from "react"

import MailchimpSubscribe from "react-mailchimp-subscribe";
import emailjs from '@emailjs/browser';

import colors from "../colors"
import useWidth from "../useWidth"
import "./EmailSubForm.scss"
import { clearAllBodyScrollLocks, disableBodyScroll } from "body-scroll-lock";

const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      width: "100%"
    },
    fieldTitle: {
      marginTop: "2rem",
      marginBottom: "0.2rem",
    },
    catchlineButtonText: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontSize: "1.4rem",
    },
    continue: {
      marginTop: "2rem",
      padding: "0.8rem",
      fontSize: "1.4rem",
      fontFamily: "Jost",
      backgroundColor: colors.darkBlue,
      color: colors.white,
      borderRadius: "5rem",
      borderWidth: 0,
      cursor: "pointer",
    },
    continueHover: {
        marginTop: "2rem",
        padding: "0.8rem",
        fontSize: "1.4rem",
        fontFamily: "Jost",
        color: colors.white,
        borderRadius: "5rem",
        borderWidth: 0,
        cursor: "pointer",
        backgroundColor: colors.darkHoverBlue,
    },
    sucessMessage: {
      marginTop: "2rem",
      color: colors.darkBlue,
      textAlign: "center",
    },
    errorMessage: {
      marginTop: "2rem",
      color: colors.coral,
      textAlign: "center",
    },
    loadingMessage: {
      marginTop: "2rem",
      color: colors.inactiveGray,
      textAlign: "center",
    },
    x: {
        backgroundColor: "#00000000",
        borderWidth: 0,
    },
}

const CustomForm = ({ status, message, onValidated, setOpen }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const [errorMessage, setErrorMessage] = useState('')

    const [buttonText, setButtonText] = useState('Subscribe')

    const width = useWidth()

    const [mouseIn, setMouseIn] = useState(false)

    const buttonStyle = mouseIn ? styles.continueHover : styles.continue

    const targetElement = document.querySelector("#root");
    
    useEffect(() => {
        disableBodyScroll(targetElement)
        return () => clearAllBodyScrollLocks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const inputWidthControl = () => {
        if (width > 550) { 
            return {
                width: "28rem",
            }
        } else { 
            return {
                width: "100%",
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            email: email, name: name
        }

        if (formData.name==="") {
            setErrorMessage("Please enter a name")
        } else if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)) {
            setErrorMessage("Please enter a valid email")
        } else {
            formData.email.indexOf("@") > -1 &&
            onValidated({
                MERGE0: formData.email,
                MERGE2: formData.name,
            });
        }
    }

    useEffect(() => {
        if(status === "success") {
            const formData = {
                email: email, name: name
            }
    
            setName('')
            setEmail('');
        
            emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
                formData, process.env.REACT_APP_EMAILJS_YOUR_PUBLIC_KEY)
                .then((result) => {
                    setButtonText('Close')
                }, (error) => {
                });
        }
    // eslint-disable-next-line
    }, [status])

    return (
        <form onSubmit={e => handleSubmit(e)} className="white-form-container">
            <div style={{...inputWidthControl(), display: "flex", paddingBottom: "2rem", flexDirection: "row", justifyContent: "flex-end"}}>
                <button style={styles.x} onClick={() => setOpen(prev => !prev)}>
                    <img
                        src={process.env.PUBLIC_URL + "/assets/x.png"}
                        style={{width: "1.4rem"}}
                        alt="Close"
                    />
                </button>
            </div>

            {
                buttonText==="Subscribe" ?
                <>
                <p className="p" style={{textAlign: "center", ...inputWidthControl()}}>
                    Stay up to date and join our mailing list!
                </p>
    
                {status === "sending" && (
                    <div style={{...styles.loadingMessage, ...inputWidthControl()}}>
                        Sending...
                    </div>
                )}
                {status === "error" && (
                    <div style={{...styles.errorMessage, ...inputWidthControl()}}>
                        {message}
                    </div>
                )}
                {errorMessage !== "" && (
                    <div style={{...styles.errorMessage, ...inputWidthControl()}}>
                        {errorMessage}
                    </div>
                )}
                {status === "success" && (
                    <div style={{...styles.sucessMessage, ...inputWidthControl()}}>
                        {message}
                    </div>
                )}
    
                <p className="footer-section-title" style={{...inputWidthControl(), ...styles.fieldTitle}}>NAME</p>
                <input
                    type="text"
                    className="inputEmailForm"
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value)
                        setErrorMessage('')
                    }}
                    placeholder="Name here"
                    name="name"
                />
    
                <p className="footer-section-title" style={{...inputWidthControl(), ...styles.fieldTitle}}>EMAIL</p>
                <input
                    type="text"
                    className="inputEmailForm"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                        setErrorMessage('')
                    }}
                    placeholder="yourEmail@example.com"
                    name="email"
                />
    
                <div style={{display: "flex"}}>
                    <button 
                        style={buttonStyle}
                        onMouseEnter={() => setMouseIn(true)}
                        onMouseLeave={() => setMouseIn(false)}
                        type="submit"
                    >
                        <p style={{...styles.catchlineButtonText, width: "8rem"}}>{buttonText}</p>
                    </button>
                </div>
                </> :

                <>
                <p className="p" style={{textAlign: "center", ...inputWidthControl()}}>
                    Success!
                </p>

                {status === "success" && (
                    <div style={{...styles.sucessMessage, ...inputWidthControl()}}>
                        {message}
                    </div>
                )}

                <div style={{display: "flex"}}>
                <button 
                    style={buttonStyle}
                    onMouseEnter={() => setMouseIn(true)}
                    onMouseLeave={() => setMouseIn(false)}
                    onClick={() => setOpen(prev => !prev)}
                >
                    <p style={{...styles.catchlineButtonText, width: "8rem"}}>{buttonText}</p>
                </button>
                </div>
                </>
            }
        </form>
    )
};

const EmailSubForm = ({setOpen}) => {
    React.useEffect(() => {
        window.scrollTo(0, 0)
        const favicon = document.getElementById('favicon')
        favicon.href = "/favicon-lively.ico"
    }, [])

    const postUrl = `https://bubblystudios.us11.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAIL_CHIMP_U}&id=${process.env.REACT_APP_MAIL_CHIMP_ID}`
    
    return (
        <div className="form-gray-background">
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                        setOpen={setOpen}
                    />
                )}
            />
        </div>
    )
}

export default EmailSubForm