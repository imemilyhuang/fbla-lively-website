import React from "react"
import colors from "../colors"
import useWidth from "../useWidth"

const Privacy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = "Privacy Policy | Lively"
  
  const width = useWidth()

  const paddingControl = () => {
    if (width > 1100) {
      return {
        padding: "6rem",
      }
    } else if (width > 700) {
      return {
        padding: "4rem",
      }
    } else {
      return {
        padding: "2rem",
      }
    }
  }

  const space4Above = () => {
    if (width > 700) {
      return {
        marginTop: "4rem",
      }
    } else {
      return {
        marginTop: "3rem",
      }
    }
  }
  
  return (
    <div style={styles.container}>
      <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={{maxWidth: "76rem"}}>
          <p className="p2" style={styles.subtitle}>EFFECTIVE AUGUST 9TH, 2022</p>
          <p className="h2">Bubbly Studios Privacy Policy</p>

          <p className="p2" style={styles.spaceAbove}>
            Welcome! Let's take a dive into how we handle your privacy and personal data.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            This privacy policy explains how Bubbly Studios processes your personal 
            information through our services. It applies to your use of all Bubbly 
            Studios' apps and services as a user, as well as other Bubbly Studios 
            services which include a link to this policy. This includes Bubbly Studios 
            websites. By using our services and apps, you agree to this policy. 
          </p>
          <p className="p2" style={styles.spaceAbove}>
            Bubbly Studios cares a lot about your privacy and safety. We don't sell your 
            data, and we only require information from you when it's needed to create an account, 
            provide our services, and satisfy legal requirements. Besides that, we always minimize what 
            information is required to use our services.
          </p>

          <p style={{...space4Above()}} className="h3">The data we collect</p>
          <p className="p2" style={styles.spaceAbove}>
            We collect personal data when you use Bubbly Studios' apps and services. This includes 
            data you provide to us, data we collect automatically, and data provided 
            to us by third-party sources. We only collect data that we need to comply with certain legal 
            obligations and provide our services to you, and the rest is optional.
          </p>
          <p className="h4" style={styles.spaceAbove}>
            Data you provide to us
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (1) Account information such as your profile name, username, email address, and date of birth.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (2) Content you upload to our apps and services, including text, images, videos, and 
            audio files.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (3) Purchase information, which is collected if you buy any paid services through 
            Bubbly Studios. Our payment processor, Stripe, receives and processes payment 
            information, and we may receive and store certain billing information (i.e. the 
            last four digits of the credit card number associated with the transaction, your 
            country, your street address). This only applies if you make a purchase through 
            our website, and if you were to make an in-app purchase on an iOS device, Apple 
            would handle the transaction.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (4) Data from your actions, which is collected depending on how you use our 
            services. Actions that would incur data collection include adding friends, 
            joining shared spaces, allowing Bubbly Studios to access location information, 
            and related actions.
          </p>
          <p className="h4" style={styles.spaceAbove}>
            Data we collect automatically from you when you use Bubbly Studios' services
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (1) Information about the device you're using, such as your IP address, operating 
            system information, and information on device settings like your camera or microphone.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (2) Information on how you use our apps and services. This is collected when you create events, 
            entries, or indicate a mood.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (3) Data from certain actions on other sites. If you click on a referral link or 
            advertisement from a third-party platform, we may receive information like the platform you 
            came from.
          </p>
          <p className="h4" style={styles.spaceAbove}>
            About cookies
          </p>
          <p className="p2" style={styles.spaceAbove}>
            At this time, we do not receive data from cookies when you use our website, but we may choose 
            to implement cookies in the future. Cookies may be strictly necessary cookies, functional cookies, 
            or performance cookies. Altogether, cookies may help us understand how users engage with our services 
            so we can optimize your experience, and they improve or enable the functionality of our services.
          </p>
          <p className="h4" style={styles.spaceAbove}>
            Data provided by third-party sources
          </p>
          <p className="p2" style={styles.spaceAbove}>
            We may receive information about you from other sources, including from other 
            users and third parties. We combine this data with the other personal data we have about you. 
            For instance, if you use a third-party social account to create an account on a Bubbly 
            Studios app or service, we collect data from that third party like your email and profile name.
          </p>

          <p style={{...space4Above()}} className="h3">How we use your data</p>
          <p className="p2" style={styles.spaceAbove}>
            We use personal data collected about you to:
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (1) Keep our services running. For instance, if you upload images or other media 
            files to our services, or if you input text, we process this data and display it on the screen.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (2) Contact you. We may use your contact information to verify your account, inform you of 
            important changes to our policies or services, or update you on new features within our 
            services. You will always have the option to opt-out of direct marketing communications.
          </p>
          <p className="p2" style={styles.spaceAbove}> 
            (3) Provide customer service. We use your information to respond to any inquiries you may 
            have on our products and fix any bugs or issues.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (4) Protect and improve our services. Your information helps us understand how users 
            interact with our services, and we use your information to prevent misuse and keep our 
            services secure.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (5) Report on Bubbly Studios' performance and track the fundamental metrics of our business.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (6) Advertise on other platforms. Your data gives us a better understanding of the demographics 
            and needs of our users. This allows us to optimize our advertising and measure the effectiveness 
            of existing ads, which, in turn, helps bring more users to Bubbly Studios' services.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (7) Comply with certain legal obligations, which may include court orders, criminal investigations, 
            or government requests.
          </p>

          <p style={{...space4Above()}} className="h3">How we share your data</p>
          <p className="p2" style={styles.spaceAbove}>
            We may share your data if you choose to share it with other users on our services, if it's needed 
            to enforce our terms and policies, or if it's needed to comply with the law. We also share your 
            data with third parties like Stripe (processes payments if they are made through our website) 
            or Google (cloud provider), which help us run our services. We also may share aggregated user 
            statistics to describe our business to the public or our partners.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            In compliance with the California Online Privacy Protection Act, we will never distribute 
            your personal data to outside parties without your consent.
          </p>

          <p style={{...space4Above()}} className="h3">Your data rights and control</p>
          <p className="p2" style={styles.spaceAbove}>
            You have the right to
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (1) Request access to the personal data we collect about you.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (2) Update inaccurate or missing parts of your personal data.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (3) Erase certain parts of your data. Please note that Bubbly Studios is unable to 
            delete your data if it's still necessary to process the data for the purpose we collected it for, 
            if we have a legal obligation to keep the data, or if we need it to establish, exercise, or defend legal 
            claims.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (4) Request that we stop processing all or some of your personal data if it is inaccurate, if your 
            personal data is not needed for a specific purpose, or if our processing is unlawful.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (5) Withdraw your consent to us collecting or using your personal data if Bubbly Studios is 
            processing your personal data on the legal basis of consent.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            You can customize your account information in the profile settings tab of the service you are using, and 
            you can contact us directly in the case you would like to exercise your rights to your data. Please 
            contact us through the email specific to the app you are using. For example, if you're a Lively user 
            and you want to request data stored from your use of the Lively app, you would reach out to 
            lively@bubblystudios.com.
          </p>

          <p style={{...space4Above()}} className="h3">Data retention</p>
          <p className="p2" style={styles.spaceAbove}>
            We retain personal data for as long as it is needed to provide you with our services and for Bubbly 
            Studios to carry out legitimate business operations (including maintaining performance, 
            resolving disputes, complying with legal obligations, or making data-driven business decisions). 
            We design our services to minimize the data retention period so that if certain data is no longer 
            needed, it ages out.
          </p>

          <p style={{...space4Above()}} className="h3">Keeping your data safe</p>
          <p className="p2" style={styles.spaceAbove}>
            Keeping your personal data safe is very important to us. Your data is stored in the cloud, 
            which is protected by encryption at all times, including when it's in transit. Furthermore, 
            you can take these steps to protect your account as well:
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (1) Using a strong, unique password.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (2) Never sharing your password with anyone.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            (3) Logging out after using any of our services on a shared device.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            It's your responsibility to only provide trusted individuals with permission 
            to use your account, and you should keep in mind that other individuals with 
            access to your account have access to your personal data too.
          </p>

          <p style={{...space4Above()}} className="h3">Updates to this policy</p>
          <p className="p2" style={styles.spaceAbove}>
            The effective date at the top of this document indicates when this privacy policy was last 
            updated. We may update our privacy policy from time to time, and for material changes, we will 
            give notice to users through reasonable means (i.e. via email, a pop-up message within our 
            services, and more). If you continue to use Bubbly Studios' services after changes to 
            this policy have taken effect, this means that you agree to the updated policy.
          </p>

          <p style={{...space4Above()}} className="h3">Contact us</p>
          <p className="p2" style={styles.spaceAbove}>
            If you have any questions about our privacy policy or how we process 
            your information, you can reach us at contact@bubblystudios.com.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            If you would like to make a specific request relating to data stored under 
            one of our apps, contact the specific email that correlates to that app (i.e. 
            lively@bubblystudios.com will handle data requests related to data stored for the Lively app).
          </p>
        </div>
      </div>
    </div>
  )
}

export default Privacy

let styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  blueContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.superLightBlue,
    alignItems: "center",
  },
  whiteContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  subtitle: {
    color: colors.darkGray,
    fontWeight: "500",
  },
  spaceAbove: {
    marginTop: "1rem",
  },
}