import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const TermsConditions = () => {
  
  const navigate = useNavigate();
  return (
    <>
    <h1>Terms & Conditions</h1>
    <h2>Welcome to Our Service!</h2>

<h3>Acceptance of Terms By accessing or using our service, you agree to be bound by these terms and conditions.</h3>

<li>Use of the Service You agree to use the service only for lawful purposes. You must not use the service in any way that breaches any applicable local, national, or international law or regulation.</li><br />

<li>User Accounts You may need to create an account to use some features of the service. You agree to provide accurate, complete, and current information during the registration process and to update such information as necessary.</li><br />

<li>Privacy Policy Our privacy policy, available here, explains how we collect, use, and protect your personal information.</li><br />

<li>Intellectual Property Rights All content, trademarks, service marks, and logos are owned by or licensed to us. You may not use these without our prior written consent.</li><br />

<li>Prohibited Activities You agree not to engage in activities such as:</li><br />

<li>Hacking or accessing the service without authorization.</li><br />

<li>Distributing viruses or other harmful software.</li><br />

<li>Engaging in any form of harassment or abusive behavior.</li><br />

<li>Termination We reserve the right to terminate or suspend your account and access to the service at our sole discretion, without notice, for conduct that we believe violates these terms or is harmful to other users.</li><br />

<li>Disclaimer of Warranties The service is provided "as is" and "as available." We disclaim all warranties of any kind, whether express or implied, including but not limited to the implied warranties of merchantability, fitness for a particular purpose, and non-infringement.</li><br />

<li>Limitation of Liability In no event shall we be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of the service.</li><br />

<li>Changes to the Terms We reserve the right to modify these terms at any time. We will provide notice of changes through the service or via email. Your continued use of the service after such notice constitutes your acceptance of the modified terms.</li><br />

<li>Governing Law These terms shall be governed by and construed in accordance with the laws.</li><br /><br />
    <Link onClick={() => navigate(-1)}>Go Back</Link>
    </>
  )
}
export default TermsConditions;