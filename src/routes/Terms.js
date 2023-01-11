import React from "react"
import colors from "../colors"
import useWindowDimensions from "../useWindowDimensions"

const Terms = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  document.title = "Terms of Service | Lively"

  const { _, width } = useWindowDimensions()

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

  const h2Control = () => {
    if (width > 900) {
      return {
        fontSize: "2.6rem",
        fontWeight: 500,
      }
    } else {
      return {
        fontSize: "2rem",
        fontWeight: 500,
      }
    }
  }

  const h3Control = () => {
    if (width > 900) {
      return {
        fontSize: "2rem",
        fontWeight: 500,
      }
    } else {
      return {
        fontSize: "1.4rem",
        fontWeight: 500,
      }
    }
  }
  
  return (
    <div style={styles.container}>
      <div style={{...styles.whiteContainer, ...paddingControl()}}>
        <div style={{maxWidth: "76rem"}}>
          <p className="p2" style={styles.subtitle}>EFFECTIVE AUGUST 9TH, 2022</p>
          <p style={h2Control()}>Bubbly Studios Terms of Service</p>

          <p className="p2" style={styles.spaceAbove}>
            Welcome aboard, we're glad you're here to join us!
          </p>
          <p className="p2" style={styles.spaceAbove}>
            These terms are between you and Bubbly Studios LLC, 14214 Cypress 
            Hill Drive, Chesterfield, MO 63017, USA, and they govern your use 
            and access to Bubbly Studios' services.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            When we say "Bubbly Studios," “we,” “us,” and “our” in these terms, we are 
            referring to Bubbly Studios LLC. When we say "services" in these terms, we 
            mean Bubbly Studios' services, apps, websites, and other products. When we 
            say "you" or "your," we mean you as an individual. If you're using our 
            services on behalf of a company, organization, or brand (a legal entity besides 
            yourself), you agree that you have the authority to bind that legal entity 
            to these terms, and "you" and "your" will refer to that legal entity.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>What you can expect from us</p>
          <p className="p2" style={styles.spaceAbove}>
            Bubbly Studios develops lifestyle and productivity apps to make everyday 
            life more exciting. Our services may also include access to certain 
            features and content that you can purchase from us. We are committed 
            to improving all of Bubbly Studios' apps, and we may add or remove 
            features or services to accomplish this. We try to avoid disruptions, 
            but we cannot guarantee that our services will not change or experience 
            an outage. Bubbly Studios has no liability to you for these service 
            changes or outages.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Age and eligibility requirements</p>
          <p className="p2" style={styles.spaceAbove}>
            By using any of Bubbly Studios' services, you affirm that you are 18 
            years or older to enter into these terms, or that you are 13 years or older 
            and have obtained consent from a parent or guardian to enter into these 
            terms.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            You may not download or use our services if you are located in any 
            country to which the United States has embargoed goods or has otherwise 
            applied any economic sanctions. For any users residing in the European Union 
            or outside of the United States: by using our services and providing your 
            personal data to us, you authorize Bubbly Studios to collect, use, and store 
            your data outside of the European Union or the country in which you are located.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Your account and rights to use our services</p>
          <p className="p2" style={styles.spaceAbove}>
            To access Bubbly Studios' services, you will need to create an 
            account for the app you want to use. For example, if you want to use the Lively 
            app, you must create a Lively account. Using multiple services requires separate 
            accounts for each service. You can sign up manually by providing 
            a name, username, email address, and password, or you can use social 
            login to access our services via an existing third-party 
            account. If you elect to use social login, you still must provide a username. 
            To access certain features, you may need to verify your account or provide 
            additional information.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            Bubbly Studios may reclaim or require you to change your username for any reason.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            If you get locked out of your account, we'll need to contact 
            you with the information you used to register. If this information isn't 
            accurate, we may not be able to restore your account. Thus, you 
            affirm that any registration and account information that 
            you submit to Bubbly Studios is true, accurate, and complete, 
            and you agree to keep it that way at all times.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            Subject to your compliance with these terms, we grant you limited, non-exclusive, 
            revocable permission to make personal, non-commercial use of Bubbly Studios' services. 
            You'll be able to use our services until terminated by you or Bubbly Studios. You agree 
            that you will not redistribute or transfer any of our services.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            You agree that you will not redistribute or transfer any of 
            our services or use our services in any manner not permitted by these 
            terms explicitly. Furthermore, you acknowledge that these terms do not grant 
            you any rights to use features of the Bubbly Studios brand or the brand of our 
            products and services, whether that be for commercial or non-commercial use.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Content in Bubbly Studios' services</p>
          <p className="p2" style={styles.spaceAbove}>
            When we say "your content" in these terms, we mean all the things 
            you add to our services. This includes text, emojis, documents, 
            links, images, video, audio clips, or other media you upload or 
            share. Some of the content you add may be accessible to people you do 
            not know, such as the picture displayed on your profile. Other times, the 
            content will be accessible through shared content (i.e. a group event 
            through the Lively app).
          </p>
          <p className="p2" style={styles.spaceAbove}>
            You are not obligated to add content to any of our services. 
            However, if you add content to any of Bubbly Studios' services, 
            you are responsible for ensuring you have the right to do so 
            and that your content is lawful. You may not post objectionable 
            content on our services, and if your content is reported, we 
            reserve the right to delete your content and suspend your account. 
            Bubbly Studios is not responsible for any of your content or others' 
            use of your content.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            You retain rights to your content, but we do need a license to it when 
            you add it to any of our services. By using our services, you grant us a 
            license to (1) use, copy, store, distribute, and communicate your content, (2) 
            publish or publicly display your content, (3) modify, translate, and 
            reformat your content, and (4) sublicense your content. This allows us to 
            display your content within our services, resize content to fit on devices with 
            varying screen sizes, store your content with cloud service providers, and more.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            This license is non-exclusive, sub-licensable, fully paid, royalty-free, 
            transferable, and perpetual. We reserve the right to block, remove, or 
            permanently delete your content for any reason (i.e. if your content 
            violates these terms or a law or regulation).
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Feedback</p>
          <p className="p2" style={styles.spaceAbove}>
            If you provide feedback, ideas, or suggestions related to your use of any of 
            Bubbly Studios' services ("Feedback"), this Feedback is not 
            confidential and is considered a type of your content. Feedback may 
            be used by Bubbly Studios without restriction and without payment 
            to you. We may use Feedback for promotional purposes, in new features 
            within our services, and more.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Restrictions on your use of Bubbly Studios' services</p>
          <p className="p2" style={styles.spaceAbove}>
            You must comply with these terms and all applicable laws, rules, and 
            regulations when you use Bubbly Studios' services. You agree that 
            you will not use our services to harm yourself, others, or Bubbly Studios (i.e. 
            attempting to access another user's account, transmitting viruses or malicious 
            code to our services, using any intellectual property without permission, etc.), and 
            you will not use our services for anything else illegal.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Indemnity</p>
          <p className="p2" style={styles.spaceAbove}>
            You agree to indemnify and hold Bubbly Studios harmless from and against all damages, 
            liabilities, claims, and expenses (including reasonable legal and accounting fees) 
            related to (1) your access to or use of our services, (2) your content, or 
            (3) your violation of these terms or any law or the rights of a third party.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Termination</p>
          <p className="p2" style={styles.spaceAbove}>
            You have the right to terminate your use of Bubbly Studios' services 
            at any time and for any reason. You can delete the account of the app you 
            are using through the settings page of that app.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            Bubbly Studios reserves the right to terminate your account and your access 
            to some or all of our services with or without notice. This includes if (1) 
            termination is necessary to comply with a court order or legal requirement, (2) 
            termination is necessary to prevent harm to you, other users, third parties, or Bubbly 
            Studios, and (3) you violate these terms or our privacy policy.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Rights of third parties</p>
          <p className="p2" style={styles.spaceAbove}>
            These terms are not intended to grant rights to anyone except you and Bubbly Studios other than what 
            is stated in this section.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            If you have downloaded any of our mobile software applications (each is an "App") from the Apple 
            App Store or if you are using the App on an iOS device, you agree to the following notice regarding Apple. Apple is not 
            responsible for any of Bubbly Studios' services and related content, and Apple has no obligation to furnish any 
            maintenance and support related to the App. If the App fails to conform to any applicable warranty, you may 
            notify Apple and Apple will refund the app purchase price to you if applicable. To the fullest extent permitted by 
            applicable law, Apple will have no other warranty obligation relating to the App. Apple is not responsible for 
            addressing any claims by you or any third party relating to the App or your use of it, which includes, but is not 
            limited to (1) product liability claims, (2) any claim that Bubbly Studios' services fail to conform to any applicable 
            legal or regulatory requirement, and (3) claims arising under consumer protection or similar legislation.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Disputes and liabilities</p>
          <p className="p2" style={styles.spaceAbove}>
            Since most disputes can be resolved informally without pursuing formal legal action, 
            if you have an issue with our services, you agree to try to resolve a dispute with us informally 
            first by contacting contact@bubblystudios.com.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            Both you and Bubbly Studios agree that any disputes between you and Bubbly Studios arising 
            under these terms or related to your relationship with us as a user of our services will be determined 
            by mandatory binding individual arbitration in the U.S. state you reside in. You agree that you 
            may bring claims against Bubbly Studios only in your individual capacity and not as a plaintiff 
            or class member in any purported class or representative action.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            The Federal Arbitration Act, federal arbitration law, and Missouri law will apply to these 
            terms and any disputes related to these terms or our services, regardless of conflict of laws 
            rules.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            To the extent allowed by applicable law, Bubbly Studios is only liable if it breaches these terms. 
            We are not liable for any (1) indirect, special, incidental, punitive, exemplary, or consequential 
            damages, (2) any loss of use, data, business, profits, revenue, or goodwill, whether direct or indirect, 
            or (3) aggregate liability for all claims relating to Bubbly Studios' services and third-party 
            applications. Bubbly Studios' total liabilities arising out of or relating to these terms are limited 
            to the greater of (1) $30.00 or (2) the amounts paid by you to Bubbly Studios during the 3 months 
            before the first claim.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            Any claim arising under these terms must be commenced within one year after the date the party asserting the 
            claim first knows or reasonably should know of the act giving rise to the claim. There shall be no right to 
            any remedy for any claim not asserted within this time period.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Warranty disclaimer</p>
          <p className="p2" style={styles.spaceAbove}>
            The following applies to the fullest extent permitted by applicable law:
          </p>
          <p className="p2" style={styles.spaceAbove}>
            All of Bubbly Studios' services are provided "as is" without warranties of any kind, whether express, 
            implied, or statutory. Bubbly Studios and any owners of content uploaded to our services disclaim any 
            express, implied, and statutory warranties on such content, including warranties of merchantability, 
            fitness for a particular purpose, satisfactory quality, or non-infringement.
          </p>
          <p className="p2" style={styles.spaceAbove}>
            Certain jurisdictions or states do not allow limitations on implied warranties or applicable statutory 
            rights of a consumer. If such warranties cannot be disclaimed under the laws of your jurisdiction, 
            we limit the duration and remedies of these warranties to the fullest extent possible under 
            applicable laws.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Updates to these terms</p>
          <p className="p2" style={styles.spaceAbove}>
            The effective date at the top of this document indicates when these terms were last 
            updated. We may update these terms from time to time, and for material changes, we will 
            give notice to users through reasonable means (i.e. via email, a pop-up message within our 
            services, and more). If you continue to use Bubbly Studios' services after changes to 
            these terms have taken effect, this means that you agree to the updated terms. If you do not 
            wish to continue using our services under our updated terms, please terminate your account.
          </p>

          <p style={{...space4Above(), ...h3Control()}}>Contact us</p>
          <p className="p2" style={styles.spaceAbove}>
            If you have any questions about these terms 
            of service, you can reach us at contact@bubblystudios.com.
          </p>
        </div>
      </div>

    </div>
  )
}

export default Terms

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