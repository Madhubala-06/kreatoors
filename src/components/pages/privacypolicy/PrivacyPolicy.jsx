import React from 'react';

const PrivacyPolicySection = ({ title, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-medium mb-4">{title}</h2>
    <div className="text-sub-gray space-y-4">{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <div className='bg-blue-custom-400 pt-44'>
      <div className="mx-auto ">
        <div className="text-center mb-12 rounded-b-[50px] py-10">
          <h1 className="text-5xl mb-4"><span className='font-playfair'>Privacy</span> Policy</h1>
        </div>
        <div className='bg-white py-16 px-5'>
          <div className="max-w-6xl mx-auto p-6 md:p-0 bg-white rounded-lg">
            <div className="space-y-6">
              <PrivacyPolicySection title="Who we are">
                <p>Our website address is: https://kreatoors.com.</p>
              </PrivacyPolicySection>

              <PrivacyPolicySection title="Introduction">
                <p className='py-3'>
                  All organizations that process personal data are required to comply with data protection legislation. This includes in particular the Data Protection Act 1998 (or its successor) and the EU General Data Protection Regulation (together the ‘Data Protection Laws’). The Data Protection Laws give individuals (known as ‘data subjects’) certain rights over their personal data whilst imposing certain obligations on the organizations that process their data.
                </p>
                <p className='py-3'>
                  As a recruitment business, the Company collects and processes both personal data and sensitive personal data. It is required to do so to comply with other legislation. It is also required to keep this data for different periods depending on the nature of the data.
                </p>
                <p className='py-3'>
                  This policy sets out how the Company implements the Data Protection Laws. It should be read in conjunction with the Data Protection Procedure.
                </p>
              </PrivacyPolicySection>

              <PrivacyPolicySection title="Definitions">

                <p>In this policy the following terms have the following meanings:</p>
                <p className='py-3'><strong>'consent'</strong> means any freely given, specific, informed and unambiguous indication of an individual’s wishes by which he or she, by a statement or by a clear affirmative action, signifies agreement to the processing of personal data relating to him or her;</p>
                <p className='py-3'><strong>'data controller'</strong> means an individual or organization which, alone or jointly with others, determines the purposes and means of the processing of personal data;</p>
                <p className='py-3'><strong>'data processor'</strong> means an individual or organization which processes personal data on behalf of the data controller; “personal data” means any information relating to an individual who can be identified, such as by a name, an identification number, location data, an online identifier or to one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person.</p>
                <p className='py-3'><strong>'personal data breach'</strong> means a breach of security leading to the accidental or unlawful destruction, loss, alteration, or unauthorized disclosure of, or access to, personal data;</p>
                <p className='py-3'><strong>'processing'</strong> means any operation or set of operations performed on personal data, such as collection, recording, organization, structuring, storage (including archiving), adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction.</p>
                <p className='py-3'><strong>'profiling'</strong> means any form of automated processing of personal data consisting of the use of personal data to evaluate certain personal aspects relating to an individual, in particular, to analyze or predict aspects concerning that natural person’s performance at work, economic situation, health, personal preferences, interests, reliability, behavior, location or movements;</p>
                <p className='py-3'><strong>'pseudonymization'</strong> means the processing of personal data in such a manner that the personal data can no longer be attributed to an individual without the use of additional information, provided that such additional information is kept separately and is subject to technical and organizational measures to ensure that the personal data are not attributed to an identified or identifiable individual;</p>
                <p className='py-3'><strong>'sensitive personal data'</strong> means personal data revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data, data concerning health, an individual’s sex life or sexual orientation and an individual’s criminal convictions. [Note 1]</p>
                <p>* For the purposes of this policy we use the term ‘personal data’ to include ‘sensitive personal data’ except where we specifically need to refer to sensitive personal data.</p>

                <p className='py-3'><strong>Supervisory authority</strong> means an independent public authority that is responsible for monitoring the application of data protection in the UK. The supervisory authority is the Information Commissioner’s Office (ICO).</p>

                <p>All of these definitions are italicized throughout this policy to remind the reader that they are defined terms.</p>
              </PrivacyPolicySection>

              <PrivacyPolicySection title="Data Processing">
                <p className="py-3">
                  The Company processes personal data in relation to its own staff, work-seekers and individual client contacts and is a data controller for the purposes of the Data Protection Laws. The Company has registered with the ICO and its registration number is PZ3534169.                </p>

                <p>The Company may hold personal data on individuals for the following purposes</p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Staff administration</li>
                  <li>Advertising, marketing, and public relations</li>
                  <li>Accounts and records</li>
                  <li>
                    Administration and processing of work-seekers’ personal data for the purposes of providing work-finding services, including processing using software solution providers and back office support Administration and processing of clients’ personal data for the purposes of supplying/introducing work-seekers.                  </li>
                </ul>
              </PrivacyPolicySection>

              <PrivacyPolicySection title="The Data Protection Principles">
                <p className="py-3">
                  The Data Protection Laws require the Company to act as either a data controller or data processor to process data in accordance with the principles of data protection. These require that personal data be:                 </p>

                <ul className="list-disc pl-6 space-y-2">




                  <li>     Processed lawfully, fairly and in a transparent manner;</li>
                  <li> Collected for specified and legitimate purposes and not further processed in a manner that is incompatible with those purposes;</li>
                  <li> Adequate, relevant and limited to what is necessary in relation to the purposes for which they are processed;</li>
                  <li> Accurate and kept up to date; every reasonable step must be taken to ensure that personal data that are inaccurate, having regard to the purposes for which they are processed, are erased or rectified without delay;</li>
                  <li> Kept for no longer than is necessary for the purposes for which the personal data are processed;</li>
                  <li> Processed in a manner that ensures appropriate security of the personal data, including protection against unauthorized or unlawful processing and against accidental loss, destruction, or damage, using appropriate technical or organizational measures; and that</li>
                  <li> The data controller shall be responsible for, and be able to demonstrate, compliance with the principles.</li>

                </ul>

              </PrivacyPolicySection>

              <PrivacyPolicySection title="Legal Bases for Processing">
                <div>

                  <p className="py-3">
                    The Company will only process personal data where it has a
                    legal basis for doing so (see Annex A). Where the Company does
                    not have a legal reason for processing personal data any
                    processing will be a breach of the Data Protection Laws.
                  </p>
                  <p className="py-3">
                    The Company will review the personal data it holds on a
                    regular basis to ensure it is being lawfully processed and it
                    is accurate, relevant, and up to date, and those people listed
                    in the Appendix shall be responsible for doing this.
                  </p>
                  <p className="py-3">
                    Before transferring personal data to any third party (such as
                    past, current or prospective employers, suppliers, customers
                    and clients, intermediaries such as umbrella companies,
                    persons making an inquiry or complaint, and any other third
                    party (such as software solutions providers and back-office
                    support)), the Company will establish that it has a legal
                    reason for making the transfer.
                  </p>
                </div>


              </PrivacyPolicySection>




              <PrivacyPolicySection title={" Privacy by Design and by Default"}>
                <div>

                  <p className="py-3">
                    The Company has implemented measures and procedures that
                    adequately protect the privacy of individuals and ensure that
                    data protection is integral to all processing activities. This
                    includes implementing measures such as:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Data minimization (i.e., not keeping data for longer than is necessary).</li>
                    <li>Pseudonymisation.</li>
                    <li>Anonymization.</li>
                    <li>Cyber security.</li>
                  </ul>
                  <p className="py-3">
                    For further information, please refer to the Company&apos;s
                    Information Security Policy.
                  </p>
                  <p className="py-3">
                    The Company shall provide any information relating to data
                    processing to an individual in a concise, transparent,
                    intelligible, and easily accessible form, using clear and
                    plain language. The information shall be provided in writing,
                    or by other means, including, where appropriate, by
                    electronic means. The Company may provide this information
                    orally if requested to do so by the individual.
                  </p>
                </div>
              </PrivacyPolicySection>


              <PrivacyPolicySection title={"Rights of the Individual"}>
                <strong>Privacy notices</strong>

                <p className="py-3">



                  Where the Company collects personal data from the individual, the Company will give the individual a privacy notice at the time when it first obtains the personal data.

                </p>

                <p className="py-3">

                  Where the Company collects personal data other than from the individual directly, it will give the individual a privacy notice within a reasonable period after obtaining the personal data, but at the latest within one month. If the Company intends to disclose the personal data to a third party then the privacy notice will be issued when the personal data are first disclosed (if not issued sooner).

                </p>

                <p className="py-3">

                  Where the Company intends to further process the personal data for a purpose other than that for which the data was initially collected, the Company will give the individual information on that other purpose and any relevant further information before it does the further processing.

                </p>
              </PrivacyPolicySection>

              <PrivacyPolicySection title={"Subject access requests"}>
                <p className="py-3">
                  The individual is entitled to access their data on request from the data controller
                </p>
              </PrivacyPolicySection>


              <PrivacyPolicySection title={"Rectification"}>
                <p className="py-3">

                  The individual or another data controller at the individual’s request, has the right to ask the Company to rectify any inaccurate or incomplete personal data concerning an individual

                </p>

                <p className="py-3">

                  If the Company has given the personal data to any third parties it will tell those third parties that it has received a request to rectify the personal data unless this proves impossible or involves disproportionate effort. Those third parties should also rectify the personal data they hold – however, the Company will not be in a position to audit those third parties to ensure that the rectification has occurred
                </p>

              </PrivacyPolicySection>

              <PrivacyPolicySection title={"Erasure"}>
                <p className="py-3">

                  The individual or another data controller at the individual’s request, has the right to ask the Company to erase an individual’s data
                </p>

                <p className="py-3">

                  If the Company receives a request to erase it will ask the individual if s/he wants his data to be removed entirely or whether s/he is happy for his or her details to be kept on a list of individuals who do not want to be contacted in the future (for a specified period or otherwise). The Company cannot keep a record of individuals whose data it has erased so the individual may be contacted again by the Company should the Company come into possession of the individual’s data at a later date.
                </p>
                <p className="py-3">

                  If the Company has made the data public, it shall take reasonable steps to inform other data controllers and data processors processing the personal data to erase the personal data, taking into account available technology and the cost of implementation.
                </p>

                <p className="py-3">

                  If the Company has given the personal data to any third parties it will tell those third parties that it has received a request to erase the personal data, unless this proves impossible or involves disproportionate effort. Those third parties should also rectify the personal data they hold – however, the Company will not be in a position to audit those third parties to ensure that the rectification has occurred
                </p>

              </PrivacyPolicySection>

              <PrivacyPolicySection title={"Data portability"}>
                <p className="py-3">

                  The individual shall have the right to receive personal data concerning him or her, which he or she has provided to the Company, in a structured, commonly used, and machine readable format and have the right to transmit those data to another data controller in circumstances where:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>

                    The processing is based on the individual’s consent or a contract; and
                  </li>
                  <li>
                    The processing is carried out by automated means.
                  </li>
                </ul>

                <p className="py-3">

                  Where feasible, the Company will send the personal data to a named third party at the individual’s request.
                </p>
              </PrivacyPolicySection>



              <PrivacyPolicySection title={"Object to processing"}>


                <p className="py-3">

                  The individual has the right to object to their personal databeing processed based on a public interest or a legitimate interest. The individual will also be able to object to the profiling of their data based on a public interest or a legitimate interest.

                </p>

                <p className="py-3">

                  The Company shall cease processing unless it has compelling legitimate grounds to continue to process the personal data that override the individual’s interests, rights, and freedoms or for the establishment, exercise, or defense of legal claims.

                </p>

                <p className="py-3">

                  The individual has the right to object to their personal data for direct marketing. Please refer to the Company’s Marketing Policy for further information.
                </p>
              </PrivacyPolicySection>

              <PrivacyPolicySection title={"Enforcement of rights"}>



                <p className="py-3">



                  All requests regarding individual rights should be sent to the person whose details are listed in the Appendix.

                </p>

                <p className="py-3">

                  The Company shall act upon any subject access request, or any request relating to rectification, erasure, restriction, data portability objection or automated decision-making processes or profiling within one month of receipt of the request. The Company may extend this period for two further months where necessary, taking into account the complexity and the number of requests

                </p>

                <p className="py-3">

                  Where the Company considers that a request under this section is manifestly unfounded or excessive due to the request’s repetitive nature the Company may either refuse to act on the request or may charge a reasonable fee taking into account the administrative costs involved.
                </p>
              </PrivacyPolicySection>

              <PrivacyPolicySection title={"Automated decision making"}>
                <p className="py-3">
                  The Company will not subject individuals to decisions based on automated processing that have a legal effect or a similarly significant effect on the individual, except where the automated decision:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Is necessary for the entering into or performance of a contract between the data controller and the individual;
                  </li>
                  <li>Is authorized by law; or</li>
                  <li>The individual has given their explicit consent.</li>
                </ul>
                <p className="py-3">
                  The Company will not carry out any automated decision making or profiling using the personal data of a child.
                </p>
              </PrivacyPolicySection>


              <PrivacyPolicySection title={"Reporting personal data breaches"}>



                <p className="py-3">
                  All data breaches should be referred to the persons whose details are listed in the Appendix.</p>

              </PrivacyPolicySection>


              <PrivacyPolicySection title={"Personal data breaches where the Company is the data controller:"} >
                <p className="py-3">

                  Where the Company establishes that a personal data breach has taken place, the Company will take steps to contain and recover the breach. Where a personal data breach is likely to result in a risk to the rights and freedoms of any individual the Company will notify the ICO.
                </p>
                <p className="py-3">

                  Where the personal data breach happens outside the UK, the Company shall alert the relevant supervisory authority for data breaches in the affected jurisdiction.
                </p>
              </PrivacyPolicySection>
              <PrivacyPolicySection title={"Personal data breaches where the Company is the data processor:"}>

                <p className="py-3">
                  The Company will alert the relevant data controller as to the personal data breach as soon as they are aware of the breach.
                </p>



              </PrivacyPolicySection>


              <PrivacyPolicySection title={"Communicating personal data breaches to individuals"}>
                <p className="py-3">


                  Where the Company has identified a personal data breach resulting in a high risk to the rights and freedoms of any individual, the Company shall tell all affected individuals without undue delay. The Company will not be required to tell individuals about the personal data breach where:

                </p>

                <ul className="list-disc pl-6 space-y-2">


                  <li>
                    The Company has implemented appropriate technical and organisational protection measures to the personal data affected by the breach, in particular to make the personal data unintelligible to any person who is not authorised to access it, such as encryption.

                  </li>

                  <li>

                    The Company has taken subsequent measures which ensure that the high risk to the rights and freedoms of the individual is no longer likely to materialise.

                  </li>

                  <li>
                    It would involve disproportionate effort to tell all affected individuals. Instead, the Company shall make a public communication or similar measure to tell all affected individuals


                  </li>

                </ul>
              </PrivacyPolicySection>



              <PrivacyPolicySection title={"The Human Rights Act 1998"}>
                <p className="py-3">

                  All individuals have the following rights under the Human Rights Act 1998 (HRA) and in dealing with personal data these should be respected at all times:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    Right to respect for private and family life (Article 8).

                  </li>
                  <li>
                    Freedom of thought, belief and religion (Article 9).

                  </li>
                  <li>

                    Freedom of expression (Article 10).

                  </li>
                  <li>
                    Freedom of assembly and association (Article 11).

                  </li>

                  <li>

                    Protection from discrimination in respect of rights and freedoms under the HRA (Article 14).

                  </li>
                </ul>
              </PrivacyPolicySection>


              <PrivacyPolicySection title={"Complaints"}>
                <p className="py-3">
                  If you have a complaint or suggestion about the Company’s handling of personal data, please contact us at the following email address: info@ailoveshr.com.
                </p>
                <p className="py-3">
                  Alternatively, you can contact the ICO directly on 0303 123 1113 or at
                  <a href="https://ico.org.uk/global/contact-us/email" target="_blank" rel="noopener noreferrer">https://ico.org.uk/global/contact-us/email</a>.
                </p>
                <p className="py-3">
                  The following are responsible for adding, amending, or deleting personal data, and responding to:
                </p>

                <ul className="list-disc pl-6 space-y-2">
                  <li>Subject access requests/requests for rectification, erasure, restriction, data portability, objection, and automated decision-making processes and profiling.</li>
                  <li>Reporting data breaches/dealing with complaints.</li>
                </ul>

                <p className="py-2">
                  Arzo Nadi – Director
                </p>
                <p className="py-2">
                  Email: info@ailoveshr.com
                </p>
              </PrivacyPolicySection>


              <PrivacyPolicySection title={"The Lawfulness of Processing Conditions for Sensitive Personal Data are:"}>


              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Processing is necessary for carrying out data controller’s obligations under employment, social security or social protection law, or a collective agreement, providing for appropriate safeguards for the fundamental rights and interests of the individual.
                </li>
                <li>

                  Processing is necessary to protect the vital interests of the individual or another individual where the individual is physically or legally incapable of giving consent.

                </li>

                <li>

                  In the course of its legitimate activities, processing is carried out with appropriate safeguards by a foundation, association or any other not-for-profit body, with a political, philosophical, religious or trade union aim and on condition that the processing relates only to members or former members (or those who have regular contact with it in connection with those purposes) and provided there is no disclosure to a third party without the consent of the individual.

                </li>
                <li>

                  Processing relates to personal data which are manifestly made public by the individual.

                </li>

                <li>
                  Processing is necessary for the establishment, exercise or defence of legal claims or whenever courts are acting in their judicial capacity.

                </li>

                <li>
                  Processing is necessary for reasons of substantial public interest on the basis of EU or Member State law which shall be proportionate to the aim pursued, respects the essence of the right to data protection and provide for suitable and specific measures to safeguard the fundamental rights and interests of the individual

                </li>
                <li>
                  Processing is necessary for the purposes of preventative or occupational medicine, for assessing the working capacity of the employee, medical diagnosis, the provision of health or social care or treatment or the management of health or social care systems and services on the basis of EU or Member State law or a contract with a health professional and subject to the necessary conditions and safeguards.

                </li>

                <li>
                  Processing is necessary for reasons of public interest in the area of public health, such as protecting against serious cross-border threats to health or ensuring high standards of quality and safety of healthcare and of medicinal products or medical devices, on the basis of EU or Member State law which provides for suitable and specific measures to safeguard the rights and freedoms of the individual, in particular professional secrecy.

                </li>

              </ul>
              </PrivacyPolicySection>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
