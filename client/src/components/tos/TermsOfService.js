import React, { Component } from 'react';
import Sidebar from '../layout/Sidebar';

export default class TermsOfService extends Component {

  componentDidMount() {
    document.getElementById('title').style.display = 'block';
  }

  render() {
    return (
      <div className="Dashboard">
        <Sidebar />
        <h1 id="title">Terms of Service:</h1>
        <div className="text-container">
          <p><b>Last updated: September 24, 2018</b></p>
          <p>Please read these Terms of Service ("Terms", "Terms of Service") 
            carefully before using the first-pr.net website (the "Service") operated by First PR
            ("us", "we", or "our").</p>
          <p>Your access to and use of the Service is conditioned on your acceptance of and
            compliance with these Terms. These Terms apply to all visitors, users and
            others who access or use the Service.</p>
          <p>By accessing or using the Service you agree to be bound by these Terms. If you 
            disagree with any part of the terms then you may not access the Service.</p>
          <hr/>
          <h4>Links To Other Web Sites:</h4>
          <p>Our Service may contain links to third-party web sites or services that are
             not owned or controlled by First PR.</p>
          <p>First PR has no control over, and assumes no responsibility for, the content,
             privacy policies, or practices of any third party web sites or services.</p>
          <p>You further acknowledge and agree that First PR shall not be responsible or
             liable, directly or indirectly, for any damage or loss caused or alleged to be
             caused by or in connection with use of or reliance on any such content, goods
             or services available on or through any such web sites or services.</p>
          <p>We strongly advise you to read the terms and conditions and privacy policies
             of any third-party web sites or services that you visit.</p>
          <hr/>
          <h4>Termination:</h4>
          <p>We may terminate or suspend access to our Service immediately, without prior
             notice or liability, for any reason whatsoever, including without limitation
             if you breach the Terms.</p>
          <p>All provisions of the Terms which by their nature should survive termination
             shall survive termination, including, without limitation, ownership
             provisions, warranty disclaimers, indemnity and limitations of liability.</p>
          <hr/>
          <h4>Governing Law:</h4>
          <p>These Terms shall be governed and construed in accordance with the laws of
             Bosnia and Herzegovina, without regard to its conflict of law provisions.</p>
          <p>Our failure to enforce any right or provision of these Terms will not be
             considered a waiver of those rights.</p>
          <p>If any provision of these Terms is held
             to be invalid or unenforceable by a court, the remaining provisions of these
             Terms will remain in effect.</p>
          <p>These Terms constitute the entire agreement
             between us regarding our Service, and supersede and replace any prior
             agreements we might have between us regarding the Service.</p>
          <hr/>
          <h4>Changes:</h4>
          <p>We reserve the right, at our sole discretion, to modify or replace these Terms
             at any time.</p>
          <p>If a revision is material we will try to provide at least 30 days
             notice prior to any new terms taking effect.</p>
          <p>What constitutes a material
             change will be determined at our sole discretion.</p>
          <p>By continuing to access or use our Service after those revisions become
             effective, you agree to be bound by the revised terms.</p>
          <p>If you do not agree to
             the new terms, please stop using the Service.</p>
          <hr/>
        </div>
      </div>
    )
  }
}
