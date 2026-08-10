export const intro = {
  title: "Seamless Access to Global Financial Markets",
  description: `The Gujarat International Finance Tec-City (GIFT City) is India's first and only International Financial Services Centre (IFSC), created to position India as a global financial hub. It is located between Ahmedabad and Gandhinagar, Gujarat. Established as India's only IFSC, it operates under the International Financial Services Centres Authority (IFSCA), offering a globally competitive ecosystem for banking, capital markets, insurance, fund management, fintech, leasing, and other international financial services.`,
};

export const whyGiftItems = [
  {
    title: "Global Investment Access",
    description:
      "Invest in international markets and diversify your portfolio beyond domestic boundaries.",
    color: "#0054A6",
  },
  {
    title: "Investor-Friendly Regulatory Framework",
    description:
      "Benefit from a simplified, globally aligned regulatory environment designed to facilitate international financial transactions.",
    color: "#2387E8",
  },
  {
    title: "Tax & Business Advantages",
    description:
      "Enjoy an ecosystem that offers attractive tax incentives and a business-friendly framework for eligible participants within the IFSC.",
    color: "#67B4FF",
  },
  {
    title: "World-Class Infrastructure",
    description:
      "Operate from a smart city built with cutting-edge digital infrastructure, sustainable urban planning, and global connectivity.",
    color: "#9CCEFF",
  },
];

export const ifsca = {
  title: "About IFSCA",
  description: `The International Financial Services Centres Authority (IFSCA) is the unified regulator for India's International Financial Services Centres (IFSCs), including GIFT City. It oversees financial institutions, products, and services, fostering a globally competitive, transparent, and investor-friendly financial ecosystem.`,
};

export const registrationDetails = [
  {
    label: "IFSCA registration number:",
    value: "IFSC/BD/2023-24/0019",
  },
  {
    label: "NSEIX:",
    value: "10076",
  },
  {
    label: "CIN:",
    value: "U67190GJ2022PTC131772",
  },
  {
    label: "GUJARAT GSTIN No:",
    value: "24AAFCL0189B1ZW",
  },
];

export const firstLinks = [
  {
    label: "Privacy Policy",
    href: "/privacy-policy",
  },
  {
    label: "Disclaimer",
    href: "/disclaimer",
  },
  {
    label: "Advisory for Investors",
    href: "/advisory-for-investors",
  },
  {
    label: "Investor Information",
    href: "/investor-information",
  },
  {
    label: "NSEIX",
    href: "https://www.nseix.com/",
  },
  {
    label: "IFSCA",
    href: "https://www.ifsca.gov.in/",
  },
  {
    label: "GIFT City",
    href: "https://www.giftgujarat.in/",
  },
  {
    label: "GIFT SEZ",
    href: "https://giftsez.com/#welcome",
  },
];

export type ContentBlock =
  | {
      type: "paragraph";
      text: string;
    }
  | {
      type: "heading";
      text: string;
    }
  | {
      type: "orderedList";
      items: string[];
    }
  | {
      type: "unorderedList";
      items: string[];
    }
  | {
      type: "link";
      text: string;
      url: string;
    };

// =====================================================
// 1. PRIVACY POLICY
// =====================================================

export const privacyPolicyData: ContentBlock[] = [
  {
    type: "paragraph",
    text: `This privacy policy (“Privacy Policy”) has been drafted and published in accordance with the Information Technology Act, 2000 and the Information Technology (Reasonable security practices and procedures and sensitive personal data or information) Rules, 2011.`,
  },

  {
    type: "paragraph",
    text: `LKP IFSC PRIVATE LIMITED ("Company") is concerned about the privacy of the users (hereinafter referred to as “You”, “Your” or “User”) of its website located at www.lkpsec.com (“Website”) and Appreciate mobile application available on Apple AppStore and Google Play Store (“App”). Where the context so requires, the Website and the App shall be collectively referred to as the “Platform”. This Privacy Policy describes the Company’s policies and procedures for collection, use, storage, processing, disclosure and protection of any information, including, but not limited to, business or personal information provided by You while using the Platform.`,
  },

  {
    type: "paragraph",
    text: `This policy constitutes a legal agreement between You, as the user of the Platform, and the Company, as the owner of the Platform. You must be a natural person who is at least 18 (eighteen) years of age. If You are less than 18 (eighteen) years of age, please read through this Privacy Policy with Your parent or legal guardian, and in such a case this Privacy Policy shall be deemed to be a contract between the Company and Your legal guardian or parent and to the extent permissible under Applicable Laws, enforceable against You.`,
  },

  {
    type: "paragraph",
    text: `By availing the Services, visiting or accessing the Platform and voluntarily providing the Company with information (personal and/ or non-personal), You are consenting to the Company’s use of it in accordance with this Privacy Policy. This Privacy Policy does not apply to third-party websites/ applications that are connected via links to the Platform. If You do not agree with the terms and conditions of this Privacy Policy, please do not proceed further to use and access this Platform.`,
  },

  {
    type: "paragraph",
    text: `Your use of the Platform will be governed by this Privacy Policy as applicable to the Platform together with all policies, notices, guidelines, disclaimers that are published and shared with You from time to time which are incorporated herein by way of reference including but not limited to Terms and Conditions and such other terms as may be applicable to You in Your capacity as a user of the Platform. This Privacy Policy shall be enforceable against You in the same manner as any other written agreement.`,
  },

  {
    type: "paragraph",
    text: `The Company may update this Privacy Policy from time to time. You must periodically review the Privacy Policy for the latest information on the Company’s privacy practices.`,
  },

  // Definitions
  {
    type: "heading",
    text: "Definitions and Interpretations",
  },

  {
    type: "paragraph",
    text: `“Applicable Law” means all laws, ordinance, statutes, rules, orders, decrees, injunctions, licenses, permits, approvals, authorizations, consents, waivers, privileges, agreements and regulations of any governmental authority/court of law having jurisdiction over the relevant matter including any interpretations thereof, in effect.`,
  },

  {
    type: "paragraph",
    text: `“Cookies” means small files that reside on Your computer or other mobile device' shard drive and generally contain an anonymous unique identifier and are accessible only by the website/ application that placed them there and not any other sites.`,
  },

  {
    type: "paragraph",
    text: `“Force Majeure Event” means any event that is beyond the Company’s reasonable control and shall include, without limitation, sabotage, fire, flood, explosion, acts of God, civil commotion, strikes or industrial action of any kind, riots, insurrection, war, acts of government, computer hacking, unauthorised access to computer, computer system or computer network, computer crashes, breach of security and encryption (provided beyond the Company’s reasonable control), power or electricity failure or unavailability of adequate power or electricity.`,
  },

  {
    type: "paragraph",
    text: `“Services” means and includes provision of investment advice, and facilitation of investments on Company’s Platform, as well as all ancillary activities performed to support the provision of investment advice and the facilitation of investments on the Platform.`,
  },

  {
    type: "paragraph",
    text: `“Terms and Conditions” means the terms and conditions available on the Platform.`,
  },

  {
    type: "paragraph",
    text: `“User Account” means the personal online account created by User to gain access and use the Platform.`,
  },

  // Purpose
  {
    type: "heading",
    text: "Purpose",
  },

  {
    type: "paragraph",
    text: `The purpose of this Privacy Policy is to ensure that the Your information provided by You is used, processed, disclosed and stored in accordance with the Applicable Laws. The information stored in such manner shall be protected by the Company in accordance with the terms and conditions set out in this Privacy Policy. Company’s Privacy Policy explains:`,
  },

  {
    type: "orderedList",
    items: [
      "What information is collected and why such information is collected;",
      "How such information is used;",
      "How such information can be accessed and updated.",
    ],
  },

  {
    type: "paragraph",
    text: `Please read the following Privacy Policy to learn about the Company’s information gathering and dissemination practices.`,
  },

  // Information Company Collects
  {
    type: "heading",
    text: "Information the Company Collects",
  },

  {
    type: "paragraph",
    text: `During Your use of the Platform and with respect to the Company’s Services availed by you, the Company may collect and process such information from You, including but not limited to the information mentioned below:`,
  },

  {
    type: "paragraph",
    text: `A. Personal Information: This includes the information that can be used to uniquely identify or contact You (“Personal Information”). While you create the User Account on the Platform and avail the Company’s Services through the Platform, the Company may collect a variety of Personal Information, including but not limited to, Your name, postal address, phone number, email address, contact preferences, etc.`,
  },

  {
    type: "paragraph",
    text: `You are required to ensure that Your contact information and preferences are accurate, complete and up to date by logging into the User Account. The Company shall also provide You with the opportunity to request correction of data relating to Your Personal Information if the same is inaccurate or delete the data. Further, the Company may decline to process requests which the Company finds to be contrary to the terms laid down under this Privacy Policy, the Terms and Conditions or any Applicable Laws, or which require disproportionate technical effort, jeopardize the privacy of others or are extremely impractical.`,
  },

  {
    type: "paragraph",
    text: `In the event You make payments on the Platform via a payment gateway to complete any transaction on the Platform, the Company may collect and store Your credit, debit card and other financial information in accordance with Applicable Law. You acknowledge that the payment gateway may be provided by a third party service provider, in which case applicable terms of use and privacy policy of such service provider shall be applicable.`,
  },

  {
    type: "paragraph",
    text: `The Personal Information is collected from You in a voluntary fashion when You provide your credentials on the Platform. You may choose to not provide such Personal Information to the Company.`,
  },

  {
    type: "paragraph",
    text: `B. Non-Personal Information: Non-personal information is any information that does not reveal Your specific identity, such as, browser information, information collected through, pixel tags and other technologies, demographic information, etc., (“Non- Personal Information”). As is true with most websites and applications, the Company’s Platform gathers some information automatically when You visit the Platform and stores it in log files. When You use the Platform, the Company may collect certain information about Your computer to facilitate, evaluate and verify Your use of the Platform. For example, the Company may store environmental variables, such as browser type, operating system, speed of the central processing unit (CPU), referring or exit web pages, click patterns and the internet protocol (IP) address of Your computer. This information is generally collected in aggregate form, without identifying any user individually.`,
  },

  {
    type: "paragraph",
    text: `The Website may use also temporary Cookies to help you access some of the special functions within the database driven areas of the Website. Once you leave the Website, these Cookies expire.`,
  },

  {
    type: "paragraph",
    text: `We, or third parties authorised by the Company, may use the information provided by You in the following ways, viz:`,
  },

  {
    type: "unorderedList",
    items: [
      "To create User Account and to support You with any services related to Your User Account;",
      "To Provide You the Services through the Platform;",
      "To update you upon the development and news with respect to Services or any other products or related services of the Company;",
      "To collect any monies owed by You to the Company;",
      "Conduct research and analysis to detect, prevent, mitigate and investigate fraudulent or illegal activities;",
      "Analyze how the Platform is used, diagnose service or technical problems, maintain security;",
      "To help You efficiently access the Platform and avail the Services;",
      "Monitor aggregate metrics such as total number of users, traffic, and demographic patterns;",
      "To notify You regarding your User Account, to troubleshoot problems with Your User Account, to resolve a dispute, to confirm Your identity in order to ensure that You are eligible to use the Platform;",
      "For advertising and marketing communications. The Company may also share Non-Personal Information with third parties such as, the Company’s advertisers, sponsors, investors, business partners;",
      "To carry out the Company’s obligations and to process transactions arising from any contracts entered into between You and the Company;",
      "To notify You about changes on the Platform;",
      "Notify You, if possible, in the event The Company becomes aware of any breach of the security of Your information and take appropriate action to the best of the Company’s ability to remedy such a breach;",
      "To enable the Company to comply with legal and regulatory obligations;",
      "To act on your behalf as a power of attorney holder, where you authorize us to do so;",
      "To carry out operation of bank accounts (including but not limited to managing remittances) exclusively associated with the making investments supported by the Company, where you authorize us to do so;",
    ],
  },

  {
    type: "paragraph",
    text: `The Company will use and retain Your information for such periods as necessary to comply with the Company’s legal obligations, resolve disputes, and enforce the Company’s agreements.`,
  },

  // Information Security
  {
    type: "heading",
    text: "Information Security",
  },

  {
    type: "paragraph",
    text: `a. The Company uses reasonable safeguards to protect and preserve the integrity and security of Your information against unauthorized access, loss, theft, unauthorised reproduction, use or amendment, disclosure or destruction of information the Company holds. The Company encrypts its Services using secure server software, which is the industry standard and among the best software available today for secure transactions. The Company uses reasonable security practices and procedures and use secure servers as mandated under Applicable Laws for the protection of Your information. The Company reviews its information collection, storage and processing practices, including physical security measures to guard against unauthorized access to systems.`,
  },

  {
    type: "paragraph",
    text: `b. The Company limits the disclosure of Personal Information to its employees, independent contractors including vendors, affiliates, consultants, business associates, service providers and distributors of the Services, on a “need-to-know” basis, and only if the disclosure will enable that entity to provide the Company with business, professional, or technical support or fulfill Your request. However, the Company is not responsible for any breach of security or for any actions of any third parties that receive Your Personal Information. The Company shall not be liable for any loss or injury caused to You as a result of You providing Your Personal Information to third party (including any third party websites) even if links to such third party websites are provided on the Platform.`,
  },

  {
    type: "paragraph",
    text: `c. As a registered user with a User Account, You are responsible for keeping Your password confidential. By submitting Your information on the Platform, You agree to the handling of Your information by the Company in a manner as stated under this Privacy Policy. The Company will take such steps as it considers reasonably necessary to ensure that Your information is treated securely and in accordance with the Privacy Policy.`,
  },

  {
    type: "paragraph",
    text: `d. By using the Platform, You accept the inherent security implications of data transmission over the internet and the world wide web cannot always be guaranteed as completely secure. Therefore, Your use of the Platform will be at your own risk.`,
  },

  {
    type: "paragraph",
    text: `e. Notwithstanding anything contained in this Privacy Policy or elsewhere, the Company shall not be held responsible for any loss, damage or misuse of Your Personal Information, if such loss, damage or misuse is attributable to a Force Majeure Event.`,
  },

  {
    type: "paragraph",
    text: `f. You agree and acknowledge that the Company shall retain all information provided by You until such time as is required by the Applicable Law or until it is required for the Company’s internal use, whichever is later.`,
  },

  // Information Company Shares
  {
    type: "heading",
    text: "Information the Company Shares",
  },

  {
    type: "paragraph",
    text: `a. The Company may disclose any information provided by You on the Platform as may be deemed to be necessary or appropriate: (a) under Applicable Law, including laws outside Your country of residence; (b) to comply with legal process; (c) to respond to requests from public and government authorities including public and government authorities outside Your country of residence; (d) to enforce Terms and Conditions; (e) to protect the Company’s operations or those of any of its affiliates; (f) to protect the Company’s rights, privacy, safety or property, and/or that of its affiliates, You or others; and (g) to allow the Company to pursue available remedies or limit the damages that the Company may sustain.`,
  },

  {
    type: "paragraph",
    text: `b. The Company may share Personal Information with other corporate entities and affiliates to help detect and prevent identity theft, fraud and other potentially illegal acts and to prevent abuse of the Platform or Services. The Company may disclose Personal Information to the Company’s third party providers including but not limited to those who provide products or services such as contact information verification, payment processing, Platform hosting, data analysis, infrastructure provision, IT services, auditing services and other similar services. In such an event, the third parties’ use of Your information will be bound, among other things, by confidentiality obligation and the Privacy Policy. The Company may store information in locations outside the direct control of the Company (for instance, on servers or databases co-located with hosting providers).`,
  },

  {
    type: "paragraph",
    text: `c. The Company may be involved in the transaction of a merger, acquisition, sale of assets, business re-organization, bankruptcy etc. During such a process, it may sell, transfer or otherwise share some or all of its assets which may include Your information. However, in such an event of sale or transfer, the Company shall reasonably ensure that Your information collected and stored by the Company is stored and used by the transferee in a manner that is consistent with this Privacy Policy. Any such third party to whom the Company transfers or sells shall have the right to continue to use the information that You provide to the Company or collected by the Company immediately prior to such transfer or sale. On completion of the sale or transfer, the Privacy Policy of the third party shall apply with respect to Your information. To stay updated about such business transactions, please read this Policy from time to time.`,
  },

  {
    type: "paragraph",
    text: `d. The Company assumes no liability for any disclosure of information due to errors in transmission, unauthorised third party access or other acts of third parties, or acts or omissions beyond the Company’s reasonable control and You agree that You will not hold the Company responsible for any breach of security unless such breach has been caused as a direct result of the Company’s gross negligence or wilful default. The Company may also collect Personal Information and information about your transactions with the Company and those You engage in with the Company’s affiliates, unaffiliated third parties, banking verification services and information from consumer reporting agencies. The Company may further collect information about You from third-party data sources, such as brokers, banks and government databases. The Company may combine data the Company collects about You from third-party data sources with data the Company collects from You and may use and share such data as described in this Privacy Policy.`,
  },

  // Change
  {
    type: "heading",
    text: "Change in Privacy Policy",
  },

  {
    type: "paragraph",
    text: `The Company may update this Privacy Policy at any time, with or without advance notice. In the event there are significant changes in the way the Company treats Your Personal Information, Company will display a notice on the Platform or send You an email, as provided for above. Unless stated otherwise, this Privacy Policy applies to all information that Company has about You and Your User Account. Notwithstanding the above, Company shall not be required to notify You of any changes made to the Privacy Policy. If You use the Platform after notice of changes have been sent to You or published on the Platform, You hereby provides Your consent to the changed practices.`,
  },

  // Choice
  {
    type: "heading",
    text: "Choice/Opt-Out",
  },

  {
    type: "paragraph",
    text: `a. Company provides all its Users with the opportunity to opt-out of receiving non-essential communications from the Company or on behalf of the Company’s partners after setting up a User Account.`,
  },

  {
    type: "paragraph",
    text: `b. If You want to remove Your contact information from the Company’s lists and newsletters, please write to the Company at unsubscribe@ppreciate.com with “unsubscribe” as the subject.`,
  },

  // Severability
  {
    type: "heading",
    text: "Severability",
  },

  {
    type: "paragraph",
    text: `The Company has taken every effort to ensure that this Privacy Policy adheres with the Applicable Laws. The invalidity or unenforceability of any part of this Policy shall not prejudice or affect the validity or enforceability of the remainder of this Privacy Policy. This Privacy Policy does not apply to any information other than the information collected by the Company through the Platform. This Privacy Policy shall be inapplicable to any unsolicited information You provide the Company through this Platform or through any other means. This includes, but is not limited to, information posted in any public areas of the Platform. All unsolicited information shall be deemed to be non-confidential and the Company shall be free to use and/ or disclose such unsolicited information without any limitations.`,
  },

  // Waiver
  {
    type: "heading",
    text: "Waiver",
  },

  {
    type: "paragraph",
    text: `Any rights or remedies under this Privacy Policies may be waived only in writing. Delay in exercising or non-exercise of such any right or remedy does not constitute a waiver of that right or remedy, or any other right or remedy.`,
  },

  // Jurisdiction
  {
    type: "heading",
    text: "Governing law and Jurisdiction",
  },

  {
    type: "paragraph",
    text: `This Privacy Policy is governed by and construed in accordance with the laws of India. Any dispute arising out of or in connection with the use of the Platform or this Privacy Policy shall be subject to the exclusive jurisdiction of the courts in Gujrat, India.`,
  },
];

// =====================================================
// 2. ADVISORY FOR INVESTORS
// =====================================================

export const advisoryForInvestorsData: ContentBlock[] = [
  {
    type: "heading",
    text: "Attention Investors",
  },

  {
    type: "paragraph",
    text: `Beware of fixed/guaranteed/regular returns/ capital protection schemes. Brokers or their authorized persons or any of their associates are not authorized to offer fixed/guaranteed/regular returns/ capital protection on your investment or authorized to enter into any loan agreement with you to pay interest on the funds offered by you. Please note that in case of default of a member claim for funds or securities given to the broker under any arrangement/ agreement of indicative return will not be accepted by the relevant Committee of the Exchange as per the approved norms.`,
  },

  {
    type: "paragraph",
    text: `Do not keep funds idle with the Stock Broker. Please note that your stock broker has to return the credit balance lying with them, within three working days in case you have not done any transaction within last 30 calendar days. Please note that in case of default of a Member, claim for funds and securities, without any transaction on the exchange will not be accepted by the relevant Committee of the Exchange as per the approved norms.`,
  },

  {
    type: "paragraph",
    text: `Check the frequency of accounts settlement opted for. If you have opted for running account, please ensure that your broker settles your account and, in any case, not later than once in 90 days (or 30 days if you have opted for 30 days settlement). In case of declaration of trading member as defaulter, the claims of clients against such defaulter member would be subject to norms for eligibility of claims for compensation from IPF to the clients of the defaulter member. These norms are available on Exchange website at following link:`,
  },

  {
    type: "link",
    text: "NSE India",
    url: "https://www.nseindia.com/invest/about-defaulter-section",
  },

  {
    type: "paragraph",
    text: `Brokers are not permitted to accept transfer of securities as margin. Securities offered as margin/ collateral MUST remain in the account of the client and can be pledged to the broker only by way of ‘margin pledge’, created in the Depository system. Clients are not permitted to place any securities with the broker or associate of the broker or authorized person of the broker for any reason. Broker can take securities belonging to clients only for settlement of securities sold by the client.`,
  },

  {
    type: "paragraph",
    text: `Always keep your contact details viz. Mobile number/Email ID updated with the stock broker. Email and mobile number is mandatory and you must provide the same to your broker for updation in Exchange records. You must immediately take up the matter with Stock Broker/Exchange if you are not receiving the messages from Exchange/Depositories regularly.`,
  },

  {
    type: "paragraph",
    text: `Don't ignore any emails/SMSs received from the Exchange for trades done by you. Verify the same with the Contract notes/Statement of accounts received from your broker and report discrepancy, if any, to your broker in writing immediately and if the Stock Broker does not respond, please take this up with the Exchange/Depositories forthwith.`,
  },

  {
    type: "paragraph",
    text: `Check messages sent by Exchanges on a weekly basis regarding funds and securities balances reported by the trading member compare it with the weekly statement of account sent by broker ond immediately raise a concern to the exchange if you notice a discrepancy.`,
  },

  {
    type: "paragraph",
    text: `Please do not trametar tunes for the purposes of trading to anyone, including an authored person or on associate of the car, other thon a SEBI registered Stock broker.`,
  },
];

// =====================================================
// 3. DISCLAIMER
// =====================================================

export const disclaimerData: ContentBlock[] = [
  {
    type: "paragraph",
    text: `The information, software, products, and services included in or available through the LKP Group sites/services may include inaccuracies or typographical errors. Changes are periodically made to the LKP Group sites/services and to the information therein. LKP Group and/or its respective suppliers may make improvements and/or changes in the LKP Group sites/services at any time. Advice received via the LKP Group sites/services should not be relied upon for personal, medical, legal or financial decisions and you should consult an appropriate professional for specific advice tailored to your situation.`,
  },

  {
    type: "paragraph",
    text: `LKP Group and/or its respective suppliers make no representations about the suitability, reliability, availability, timeliness, lack of viruses or other harmful components and accuracy of the information, software, products, services and related graphics contained within the LKP Group sites/services for any purpose. All such information, software, products, services and related graphics are provided "as is" without warranty of any kind. LKP Group and/or its respective suppliers hereby disclaim all warranties and conditions with regard to this information, software, products, services and related graphics, including all implied warranties and conditions of merchantability, fitness for a particular purpose, workmanlike effort, title and non-infringement.`,
  },

  {
    type: "paragraph",
    text: `This site may contain links to other web sites operated by third parties ("linked sites"). You acknowledge that, when you click on a link to visit a linked site, a frame may appear that contains the LKP Group logo, advertisements and/or other content selected by LKP Group. You acknowledge that LKP Group and its sponsors neither endorse nor are affiliated with the linked site and are not responsible for any content of any linked site or any link contained in a link site, or any changes or updates to such sites. You also acknowledge that LKP Group is providing these links to you only as a convenience.`,
  },

  {
    type: "paragraph",
    text: `You specifically agree that LKP Group shall not be responsible for unauthorized access to or alteration of your transmissions or data, any material or data sent or received or not sent or received, or any transactions entered into through an LKP Group site/service. You specifically agree that LKP Group is not responsible or liable for any threatening, defamatory, obscene, offensive or illegal content or conduct of any other party or any infringement of another's rights, including intellectual property rights. You specifically agree that LKP Group is not responsible for any content sent using and/or included in an LKP Group site/service by any third party.`,
  },

  {
    type: "paragraph",
    text: `In no event shall LKP Group and/or its suppliers be liable for any direct, indirect, punitive, incidental, special, consequential damages or any damages whatsoever including, without limitation, damages for loss of use, data or profits, arising out of or in any way connected with the use or performance of the LKP Group sites/services, with the delay or inability to use the LKP Group sites/services or related services, the provision of or failure to provide services, or for any information, software, products, services and related graphics obtained through the LKP Group sites/services, or otherwise arising out of the use of the LKP Group sites/services, whether based on contract, tort, negligence, strict liability or otherwise, even if LKP Group or any of its suppliers has been advised of the possibility of damages. LKP Group does not endorse in any way any advertisers/ contents of advertisers on its webpages. Please therefore verify the veracity of all information on your own before undertaking reliance and actioning thereupon. LKP Group shall not be responsible nor liable for any consequential damages arising on account of your relying on the contents of the advertisement, if any.`,
  },

  {
    type: "paragraph",
    text: `This agreement is governed by the laws of Republic of India. You hereby irrevocably consent to the exclusive jurisdiction and venue of courts in Ahmedabad, Gujarat, India in all disputes arising out of or relating to the use of the LKP Group sites/services. Use of the LKP Group sites/services is unauthorized in any jurisdiction that does not give effect to all provisions of these terms and conditions, including without limitation this paragraph. You agree to indemnify and hold LKP Group, its subsidiaries, affiliates, officers and employees, harmless from any claim, demand, or damage, including reasonable attorneys' fees, asserted by any third party due to or arising out of your use of or conduct on the LKP Group sites/services. LKP Group reserves the right to disclose any personal information about you or your use of the LKP Group sites/services, including its contents, without your prior permission if LKP Group has a good faith belief that such action is necessary to: (1) conform to legal requirements or comply with legal process; (2) protect and defend the rights or property of LKP Group or its affiliated companies; (3) enforce the terms of use; or (4) act to protect the interests of its members or others. LKP Group performance of this agreement is subject to existing laws and legal process, and nothing contained in this agreement is in derogation of LKP Group's right to comply with governmental, court and law enforcement requests or requirements relating to your use of the LKP Group sites/services or information provided to or gathered by LKP Group with respect to such use. If any part of this agreement is determined to be invalid or unenforceable pursuant to applicable law including, but not limited to, the warranty disclaimers and liability limitations set forth above, then the invalid or unenforceable provision will be deemed superseded by a valid, enforceable provision that most closely matches the intent of the original provision and the remainder of the agreement shall continue in effect. Unless otherwise specified herein, this agreement constitutes the entire agreement between the user and LKP Group with respect to the LKP Group sites/services and it supersedes all prior or contemporaneous communications and proposals, whether electronic, oral or written, between the user and LKP Group with respect to the LKP Group sites/services.`,
  },

  {
    type: "paragraph",
    text: `The LKP Group is not in any manner answerable, responsible or liable to any person or persons for any acts of omission or commission, errors, mistakes and/or violation, actual or perceived, by us or our partners, agents, associates etc.`,
  },

  {
    type: "paragraph",
    text: `The LKP Group is not answerable, responsible or liable for any information on this website or for any services rendered by us, our employees, and our servants.`,
  },
];

export const categories = [
  {
    categoryId: 6,
    categoryName: "Advisory – KYC Compliance",
  },
  {
    categoryId: 7,
    categoryName: "Annual Return",
  },
  {
    categoryId: 8,
    categoryName: "Annual Report",
  },
  {
    categoryId: 34,
    categoryName: "Compliance Policies GIFT City",
  },
  {
    categoryId: 35,
    categoryName: "Download",
  },
];
