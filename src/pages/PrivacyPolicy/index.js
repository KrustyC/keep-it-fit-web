import React, { Fragment } from 'react';
import styled, { css } from 'styled-components';

import EmptyNavbar from 'uikit/organisms/navbars/EmptyNavbar';
import Footer from 'uikit/organisms/Footer';
import Container from 'uikit/blocks/Container';
import Heading from 'uikit/elements/Heading';
import P from 'uikit/elements/P';
import Link from 'uikit/elements/Link';

const Layout = styled(Container)`
  ${({ theme }) => css`
    max-width: ${theme.dimensions.containerWidth.default};
    @media (max-width: ${theme.sizes.md}) {
      max-width: 100vw;
    }
  `}
`;

export default () => (
  <Fragment>
    <EmptyNavbar />
    <Layout>
      <Heading level="h1">Privacy Policy</Heading>

      <P>Effective date: January 16, 2019</P>

      <P>
        Healfit ({'"'}us{'"'}, {'"'}we{'"'}, or {'"'}our{'"'}) operates the
        healfit.co.uk website (the {'"'}Service{'"'}).
      </P>

      <P>
        This page informs you of our policies regarding the collection, use, and
        disclosure of personal data when you use our Service and the choices you
        have associated with that data. Our Privacy Policy for Healfit is based
        on the{' '}
        <Link to="https://www.freeprivacypolicy.com/blog/sample-privacy-policy-template/">
          Free Privacy Policy Template Website
        </Link>
        .
      </P>

      <P>
        We use your data to provide and improve the Service. By using the
        Service, you agree to the collection and use of information in
        accordance with this policy. Unless otherwise defined in this Privacy
        Policy, terms used in this Privacy Policy have the same meanings as in
        our Terms and Conditions, accessible from healfit.co.uk
      </P>

      <Heading level="h2">Information Collection And Use</Heading>

      <P>
        We collect several different types of information for various purposes
        to provide and improve our Service to you.
      </P>

      <Heading level="h3">Types of Data Collected</Heading>

      <Heading level="h4">Personal Data</Heading>

      <P>
        While using our Service, we may ask you to provide us with certain
        personally identifiable information that can be used to contact or
        identify you ({'"'}Personal Data{'"'}). Personally identifiable
        information may include, but is not limited to:
      </P>

      <ul>
        <li>Email address</li>
        <li>First name and last name</li>
        <li>Phone number</li>
        <li>Address, State, Province, ZIP/Postal code, City</li>
        <li>Cookies and Usage Data</li>
      </ul>

      <Heading level="h4">Usage Data</Heading>

      <P>
        We may also collect information how the Service is accessed and used (
        {'"'}Usage Data{'"'}). This Usage Data may include information such as
        your computer{"'"}s Internet Protocol address (e.g. IP address), browser
        type, browser version, the pages of our Service that you visit, the time
        and date of your visit, the time spent on those pages, unique device
        identifiers and other diagnostic data.
      </P>

      <Heading level="h4">Tracking {'&'} Cookies Data</Heading>
      <P>
        We use cookies and similar tracking technologies to track the activity
        on our Service and hold certain information.
      </P>
      <P>
        Cookies are files with small amount of data which may include an
        anonymous unique identifier. Cookies are sent to your browser from a
        website and stored on your device. Tracking technologies also used are
        beacons, tags, and scripts to collect and track information and to
        improve and analyze our Service.
      </P>
      <P>
        You can instruct your browser to refuse all cookies or to indicate when
        a cookie is being sent. However, if you do not accept cookies, you may
        not be able to use some portions of our Service.
      </P>
      <P>Examples of Cookies we use:</P>
      <ul>
        <li>
          <strong>Session Cookies.</strong> We use Session Cookies to operate
          our Service.
        </li>
        <li>
          <strong>Preference Cookies.</strong> We use Preference Cookies to
          remember your preferences and various settings.
        </li>
        <li>
          <strong>Security Cookies.</strong> We use Security Cookies for
          security purposes.
        </li>
      </ul>

      <Heading level="h2">Use of Data</Heading>

      <P>Healfit uses the collected data for various purposes:</P>
      <ul>
        <li>To provide and maintain the Service</li>
        <li>To notify you about changes to our Service</li>
        <li>
          To allow you to participate in interactive features of our Service
          when you choose to do so
        </li>
        <li>To provide customer care and support</li>
        <li>
          To provide analysis or valuable information so that we can improve the
          Service
        </li>
        <li>To monitor the usage of the Service</li>
        <li>To detect, prevent and address technical issues</li>
      </ul>

      <Heading level="h2">Transfer Of Data</Heading>
      <P>
        Your information, including Personal Data, may be transferred to — and
        maintained on — computers located outside of your state, province,
        country or other governmental jurisdiction where the data protection
        laws may differ than those from your jurisdiction.
      </P>
      <P>
        If you are located outside United Kingdom and choose to provide
        information to us, please note that we transfer the data, including
        Personal Data, to United Kingdom and process it there.
      </P>
      <P>
        Your consent to this Privacy Policy followed by your submission of such
        information represents your agreement to that transfer.
      </P>
      <P>
        Healfit will take all steps reasonably necessary to ensure that your
        data is treated securely and in accordance with this Privacy Policy and
        no transfer of your Personal Data will take place to an organization or
        a country unless there are adequate controls in place including the
        security of your data and other personal information.
      </P>

      <Heading level="h2">Disclosure Of Data</Heading>

      <Heading level="h3">Legal Requirements</Heading>
      <P>
        Healfit may disclose your Personal Data in the good faith belief that
        such action is necessary to:
      </P>
      <ul>
        <li>To comply with a legal obligation</li>
        <li>To protect and defend the rights or property of Healfit</li>
        <li>
          To prevent or investigate possible wrongdoing in connection with the
          Service
        </li>
        <li>
          To protect the personal safety of users of the Service or the public
        </li>
        <li>To protect against legal liability</li>
      </ul>

      <Heading level="h2">Security Of Data</Heading>
      <P>
        The security of your data is important to us, but remember that no
        method of transmission over the Internet, or method of electronic
        storage is 100% secure. While we strive to use commercially acceptable
        means to protect your Personal Data, we cannot guarantee its absolute
        security.
      </P>

      <Heading level="h2">Service Providers</Heading>
      <P>
        We may employ third party companies and individuals to facilitate our
        Service ({'"'}Service Providers{'"'}), to provide the Service on our
        behalf, to perform Service-related services or to assist us in analyzing
        how our Service is used.
      </P>
      <P>
        These third parties have access to your Personal Data only to perform
        these tasks on our behalf and are obligated not to disclose or use it
        for any other purpose.
      </P>

      <Heading level="h3">Analytics</Heading>
      <P>
        We may use third-party Service Providers to monitor and analyze the use
        of our Service.
      </P>
      <ul>
        <li>
          <P>
            <strong>Google Analytics</strong>
          </P>
          <P>
            Google Analytics is a web analytics service offered by Google that
            tracks and reports website traffic. Google uses the data collected
            to track and monitor the use of our Service. This data is shared
            with other Google services. Google may use the collected data to
            contextualize and personalize the ads of its own advertising
            network.
          </P>
          <P>
            You can opt-out of having made your activity on the Service
            available to Google Analytics by installing the Google Analytics
            opt-out browser add-on. The add-on prevents the Google Analytics
            JavaScript (ga.js, analytics.js, and dc.js) from sharing information
            with Google Analytics about visits activity.
          </P>{' '}
          <P>
            For more information on the privacy practices of Google, please
            visit the Google Privacy {'&'} Terms web page:{' '}
            <Link to="https://policies.google.com/privacy?hl=en">
              https://policies.google.com/privacy?hl=en
            </Link>
          </P>
        </li>
      </ul>

      <Heading level="h2">Links To Other Sites</Heading>
      <P>
        Our Service may contain links to other sites that are not operated by
        us. If you click on a third party link, you will be directed to that
        third party{"'"}s site. We strongly advise you to review the Privacy
        Policy of every site you visit.
      </P>
      <P>
        We have no control over and assume no responsibility for the content,
        privacy policies or practices of any third party sites or services.
      </P>

      <Heading level="h2">Children{"'"}s Privacy</Heading>
      <P>
        Our Service does not address anyone under the age of 18 ({'"'}Children
        {'"'}).
      </P>
      <P>
        We do not knowingly collect personally identifiable information from
        anyone under the age of 18. If you are a parent or guardian and you are
        aware that your Children has provided us with Personal Data, please
        contact us. If we become aware that we have collected Personal Data from
        children without verification of parental consent, we take steps to
        remove that information from our servers.
      </P>

      <Heading level="h2">Changes To This Privacy Policy</Heading>
      <P>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page.
      </P>
      <P>
        We will let you know via email and/or a prominent notice on our Service,
        prior to the change becoming effective and update the {'"'}effective
        date
        {'"'} at the top of this Privacy Policy.
      </P>
      <P>
        Fragment You are advised to review this Privacy Policy periodically for
        any changes. Changes to this Privacy Policy are effective when they are
        posted on this page.
      </P>

      <Heading level="h2">Contact Us</Heading>
      <P>
        If you have any questions about this Privacy Policy, please contact us:
      </P>
      <ul>
        <li>By email: davide.crestini94@gmail.com</li>
      </ul>
    </Layout>
    <Footer />
  </Fragment>
);