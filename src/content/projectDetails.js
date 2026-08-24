/** Case-study body copy per project — structure mirrors nextio.co project pages */

import { assets } from './assets'

const viaspacesGallery = assets.projectDetail.viaspaces

export const projectDetails = {
  viaspaces: {
    intro:
      'A digital platform designed to streamline document management and internal workflows. The system helps organizations structure documents, automate processes and maintain compliance across their operations.',
    meta: [
      { label: 'Client', value: 'ViaSpaces' },
      { label: 'Industry', value: 'Document management & workflow automation' },
      { label: 'Scope of work', value: 'Product UI/UX design, front-end development' },
      { label: 'Timeline', value: 'Product design → front-end development' },
      { label: 'Role', value: 'UX/UI design, front-end engineering in collaboration with the client’s backend team' },
    ],
    features: [
      {
        title: 'A template for every deal',
        body: 'Over 300 business documents built in, across multiple languages and jurisdictions, ready to use.',
        icon: assets.projectDetail.viaspaces.featureIcons[0],
      },
      {
        title: 'Complexity made simple',
        body: 'We turned a dense document workflow into a clean, learnable experience anyone on a team can use.',
        icon: assets.projectDetail.viaspaces.featureIcons[1],
      },
      {
        title: 'Close deals faster',
        body: 'Built-in signing turns a multi-day paper process into a few clicks — with every signature on record.',
        icon: assets.projectDetail.viaspaces.featureIcons[2],
      },
      {
        title: 'A partner who stays',
        body: 'We keep designing and developing as the product grows — you get a long-term team, not a one-off delivery.',
        icon: assets.projectDetail.viaspaces.featureIcons[3],
      },
      {
        title: 'Hard features, handled in-house',
        body: 'E-signing, audit history, a template builder — the complex parts other agencies outsource, we build ourselves.',
        icon: assets.projectDetail.viaspaces.featureIcons[4],
      },
      {
        title: 'Production-grade from day one',
        body: 'Designed for real B2B and B2C transactions — secure, reliable, and ready for daily business use.',
        icon: assets.projectDetail.viaspaces.featureIcons[5],
      },
    ],
    challenge:
      'Organizations often manage critical documents across multiple tools, shared drives and email communication. As the number of documents and compliance requirements grows, maintaining structure and control becomes increasingly difficult.',
    solvedEyebrow: 'How we solved it',
    solvedTitle:
      'Our role focused on creating a clear and scalable product experience for the platform.',
    approach: [
      'Designing the full UI/UX for the platform',
      'Creating a product interface focused on clarity and usability',
      'Implementing the front-end application',
      'Collaborating with the client’s backend team to integrate the platform functionality',
    ],
    capabilities: [
      'Structured document management environment',
      'Workflow-based document handling',
      'User interface designed for clarity and efficiency',
      'Scalable front-end architecture integrated with the backend system',
    ],
    deliveredEyebrow: 'What we delivered',
    deliveredTitle:
      'We delivered the full product interface and front-end layer for the ViaSpaces platform.',
    built: [
      'Complete UI/UX design of the platform',
      'Front-end implementation of the product interface',
      'Integration with the client’s backend infrastructure',
      'Scalable interface supporting complex document workflows',
    ],
    impact: [
      'Clear and structured user experience for document workflows',
      'Improved usability of the platform',
      'Efficient collaboration between front-end and backend systems',
    ],
    testimonial: {
      name: 'Jaro Kacina',
      role: 'Carlavia Technolgies s.r.o. - CEO',
      quote:
        'We got here based on a recommendation, and it was a great decision. The company offers services that we are extremely satisfied with. The biggest added value is their lightning-fast responsiveness to the problems and challenges that arise in business constantly. We highly recommend them.',
    },
    relevanceEyebrow: 'Relevance beyond this project',
    relevanceTitle:
      'This project demonstrates how strong product design and front-end engineering can significantly improve complex internal platforms.',
    relevantIf: [
      'Building SaaS or internal workflow platforms',
      'Managing complex document or compliance processes',
      'Looking to improve usability of existing systems',
      'Developing products with distributed development teams',
    ],
    gallery: {
      afterChallenge: [
        {
          type: 'full',
          src: viaspacesGallery.signingWorkflow,
          mobileSrc: viaspacesGallery.mobile.signingWorkflow,
          alt: 'ViaSpaces document signing workflow',
        },
        {
          type: 'split',
          left: {
            src: viaspacesGallery.mobileEditor,
            mobileSrc: viaspacesGallery.mobile.mobileEditor,
            alt: 'ViaSpaces mobile document editor',
          },
          right: {
            src: viaspacesGallery.webDashboard,
            mobileSrc: viaspacesGallery.mobile.webDashboard,
            alt: 'ViaSpaces web dashboard document workflows',
          },
        },
      ],
      afterSolved: [
        {
          type: 'full',
          src: viaspacesGallery.mobileNotifications,
          mobileSrc: viaspacesGallery.mobile.mobileNotifications,
          alt: 'ViaSpaces invoice and price offer notifications',
        },
      ],
      afterDelivered: [
        {
          type: 'split',
          left: {
            src: viaspacesGallery.projectLinkDesktop,
            mobileSrc: viaspacesGallery.mobile.laptopAgreement,
            alt: 'ViaSpaces service agreement on laptop',
          },
          right: {
            src: viaspacesGallery.templateBuilder,
            mobileSrc: viaspacesGallery.mobile.templateBuilder,
            alt: 'ViaSpaces template builder',
          },
        },
      ],
      testimonialImage: {
        src: viaspacesGallery.statusTags,
        mobileSrc: viaspacesGallery.mobile.statusTags,
        alt: 'ViaSpaces signed, sent, and pending document statuses',
      },
    },
  },

  'gym-app': {
    intro:
      'A digital platform designed to support a network of self-service private fitness studios. The system allows users to register, book training sessions, manage memberships and access the gym through a fully automated entry system.',
    meta: [
      { label: 'Client', value: 'GymApp' },
      { label: 'Industry', value: 'Fitness & smart facility management' },
      { label: 'Scope of work', value: 'Web platform, reservation system, access management' },
      { label: 'Timeline', value: 'Discovery → design → development → launch' },
      { label: 'Role', value: 'Product architecture, UX design, full-stack development' },
    ],
    features: [
      {
        title: 'We build the model that doesn’t need staff',
        body: 'The gym runs 24/7 without a front desk — we designed the booking, payment, and access flow that makes that possible.',
      },
      {
        title: 'Solo, duo, or group — one clean flow',
        body: 'We handle booking logic other teams simplify away: single sessions, pairs, and groups up to five, in one interface.',
      },
      {
        title: 'A credit system built to be trusted',
        body: 'We built the credit system behind the app — cashback, refunds, and balances that update the moment a booking changes.',
      },
      {
        title: 'Access control that has to work every time',
        body: 'A QR code generates at the exact reservation time and opens the door — code we build to be reliable, not just functional.',
      },
      {
        title: 'Mobile-first, without cutting the desktop',
        body: 'We design for the device people actually book on, and still ship a full desktop experience alongside it.',
      },
      {
        title: 'One app, the whole operation',
        body: 'Booking, payments, access, and credits — we didn’t build separate pieces, we built one system that runs the business.',
      },
    ],
    challenge:
      'Traditional fitness centers rely on staffed operations and shared spaces, which can limit flexibility and create operational overhead.',
    solvedEyebrow: 'How we solved it',
    solvedTitle:
      'We designed the platform as a digital infrastructure for a fully automated fitness operation.',
    approach: [
      'Mapping the end-to-end member journey from signup to door access',
      'Designing booking, credit, and access flows in one product',
      'Building the mobile-first interface and supporting desktop experience',
      'Integrating payments and automated entry hardware',
    ],
    capabilities: [
      'Reservation and membership management',
      'Credit balance and refund logic',
      'Time-bound QR access control',
      '24/7 unattended facility operation',
    ],
    deliveredEyebrow: 'What we delivered',
    deliveredTitle:
      'We delivered a digital platform that enables a network of self-service fitness studios.',
    built: [
      'Full product design and user experience',
      'Booking and membership application',
      'Credit and payment system',
      'Automated door-access integration',
    ],
    impact: [
      '500+ reservations booked through the app',
      'Zero staff required for day-to-day entry',
      'One system covering booking, pay, and access',
    ],
    testimonial: {
      name: 'Tina S.',
      role: 'Personal Trainer',
      quote:
        'A new gym with excellent equipment and a fantastic app that features simple and intuitive controls. The gym is designed to be versatile enough for working out all muscle groups while maintaining a minimalist feel with plenty of open space.',
    },
    relevanceEyebrow: 'Relevance beyond this project',
    relevanceTitle:
      'This project demonstrates how digital platforms can enable automated physical services and smart facility management.',
    relevantIf: [
      'Running unattended or low-staff physical locations',
      'Building booking products with real-world access hardware',
      'Need reliable payments and credit systems in one app',
      'Scaling a service network with consistent digital ops',
    ],
  },

  fincare: {
    intro:
      'A mortgage and lead platform that connects website calculators to closed deals — routing every inquiry into one system sales teams can actually work from.',
    meta: [
      { label: 'Client', value: 'FinCare' },
      { label: 'Industry', value: 'Financial services & mortgage advisory' },
      { label: 'Scope of work', value: 'Lead platform, automation, advisor dashboard' },
      { label: 'Timeline', value: 'Discovery → design → automation → launch' },
      { label: 'Role', value: 'Product design, workflow automation, web development' },
    ],
    features: [
      {
        title: 'From calculator click to qualified lead',
        body: 'Website tools feed straight into the CRM — no lost forms, no manual spreadsheet chase.',
      },
      {
        title: 'Routing that matches the right advisor',
        body: 'Leads land with the people who can close them, based on product, region, and capacity.',
      },
      {
        title: 'One timeline for every deal',
        body: 'Status, documents, and next steps live in one place so nothing stalls between teams.',
      },
      {
        title: 'Automation without losing the human touch',
        body: 'Reminders and handoffs run automatically — advisors stay focused on clients, not admin.',
      },
      {
        title: 'Visibility for managers',
        body: 'Pipeline and conversion metrics surface clearly so leadership sees bottlenecks early.',
      },
      {
        title: 'Built to scale with the book of business',
        body: 'Architecture ready for more products, partners, and volume without rewriting the core.',
      },
    ],
    challenge:
      'Mortgage leads often scatter across website forms, email, and spreadsheets — slowing response times and making deal status hard to track.',
    solvedEyebrow: 'How we solved it',
    solvedTitle:
      'We connected acquisition, routing, and deal completion into one continuous digital workflow.',
    approach: [
      'Mapping the lead-to-close journey with sales and operations',
      'Designing the advisor workspace around daily deal work',
      'Automating routing and follow-up rules',
      'Integrating calculator and website intake with the CRM',
    ],
    capabilities: [
      'Lead capture from web calculators',
      'Automated advisor assignment',
      'Deal pipeline and document tracking',
      'Management-ready reporting views',
    ],
    deliveredEyebrow: 'What we delivered',
    deliveredTitle: 'We delivered a lead and deal system that measurably improved conversion speed.',
    built: [
      'Advisor-facing deal dashboard',
      'Automated lead routing rules',
      'Website calculator integrations',
      'Pipeline analytics for leadership',
    ],
    impact: [
      '+36% more deals after automated lead routing',
      '+24% faster deal completion',
      'Fewer dropped leads between web and sales',
    ],
    testimonial: {
      name: 'David Kašper',
      role: 'Purple Holding a.s. — Co-Founder',
      quote:
        'For me, cooperation with MISK MANAGERS is absolutely top. For the first time, I met a group of people who quickly understand the direction of the project.',
    },
    relevanceEyebrow: 'Relevance beyond this project',
    relevanceTitle:
      'This project shows how connecting marketing intake to sales operations unlocks measurable growth.',
    relevantIf: [
      'Running lead-heavy sales organizations',
      'Using website calculators or self-serve tools',
      'Losing deals between marketing and sales handoffs',
      'Needing automation without losing advisor control',
    ],
  },

  atv: {
    intro:
      'A service management system that replaced paper-heavy ATV and quad bike case handling with one connected digital workflow for workshop staff and customers.',
    meta: [
      { label: 'Client', value: 'ATV' },
      { label: 'Industry', value: 'Vehicle service & field operations' },
      { label: 'Scope of work', value: 'Service CRM, operations dashboard, MVP delivery' },
      { label: 'Timeline', value: 'Discovery → MVP in 6 weeks → iterate' },
      { label: 'Role', value: 'Product design, full-stack development, process digitization' },
    ],
    features: [
      {
        title: 'Every case in one place',
        body: 'Service tickets, vehicle status, and history stop living on paper and sticky notes.',
      },
      {
        title: 'Workshop clarity in real time',
        body: 'Staff see which vehicles are in progress, waiting, or ready — without chasing updates.',
      },
      {
        title: 'Less admin on every job',
        body: 'Forms and handoffs are streamlined so mechanics spend time fixing bikes, not filing.',
      },
      {
        title: 'MVP that lands in weeks',
        body: 'We shipped a working core in six weeks — then expanded from real usage, not theory.',
      },
      {
        title: 'Built for the floor, not the slide deck',
        body: 'Interfaces designed for busy workshop environments with speed and clarity first.',
      },
      {
        title: 'Ready to grow with the yard',
        body: 'Architecture that absorbs more service types, sites, and staff as volume rises.',
      },
    ],
    challenge:
      'Service centers often run on paper trails and informal updates — creating delays, missing context, and heavy admin load on every case.',
    solvedEyebrow: 'How we solved it',
    solvedTitle:
      'We digitized the service lifecycle into a single operational system the workshop can trust daily.',
    approach: [
      'Shadowing shop-floor workflows and paperwork bottlenecks',
      'Designing case statuses that match real service states',
      'Shipping an MVP focused on the highest-pain steps first',
      'Iterating with staff feedback after first live weeks',
    ],
    capabilities: [
      'Service case management',
      'Vehicle-in-service overview',
      'Activity history and handoffs',
      'Admin workflows with fewer steps',
    ],
    deliveredEyebrow: 'What we delivered',
    deliveredTitle: 'We delivered a connected service CRM that replaced paper-run case handling.',
    built: [
      'Service case and vehicle dashboard',
      'Staff-facing operational workflows',
      'History and status tracking',
      'MVP launch within six weeks',
    ],
    impact: [
      '~70% less admin time on every service case',
      '6 weeks to the first working MVP',
      'Clearer visibility across the workshop',
    ],
    testimonial: {
      name: 'Mária Kavecká',
      role: 'TITANS — Head of marketing',
      quote:
        'We have been working with MISK MANAGERS for several years. What I especially appreciate is the speed, professionalism and willingness.',
    },
    relevanceEyebrow: 'Relevance beyond this project',
    relevanceTitle:
      'This project shows how operational software can cut admin and bring field reality into one system.',
    relevantIf: [
      'Running paper-heavy service or workshop operations',
      'Need a fast MVP that staff will actually use',
      'Managing assets, jobs, and handoffs across a team',
      'Want clearer live status without more meetings',
    ],
  },

  webglobe: {
    intro:
      'A customer portal for domains, hosting, and cloud services — designed so the business controls the full purchase and management experience in one product.',
    meta: [
      { label: 'Client', value: 'Webglobe' },
      { label: 'Industry', value: 'Hosting, domains & cloud services' },
      { label: 'Scope of work', value: 'Customer portal, UX, service catalog experience' },
      { label: 'Timeline', value: 'Product design → front-end → launch iterations' },
      { label: 'Role', value: 'UX/UI design, front-end engineering, product partnership' },
    ],
    features: [
      {
        title: 'Everything for a website, one portal',
        body: 'Domains, hosting, and cloud options presented clearly so customers buy with confidence.',
      },
      {
        title: 'A catalog that feels commercial',
        body: 'We shaped browsing and checkout flows around conversion — not internal tooling habits.',
      },
      {
        title: 'Self-serve without support overload',
        body: 'Customers manage key actions themselves while complex paths stay guided and safe.',
      },
      {
        title: 'Brand presence that matches the product',
        body: 'Visual system and UI that feel premium on laptop and mobile alike.',
      },
      {
        title: 'Faster delivery with AI-aware workflow',
        body: 'Internal process improvements shortened build cycles without sacrificing quality.',
      },
      {
        title: 'A portal you fully control',
        body: 'Architecture and UI owned by the business — not locked behind a black-box reseller shell.',
      },
    ],
    challenge:
      'Hosting and domain businesses lose conversion and brand control when customers bounce between fragmented tools and generic reseller interfaces.',
    solvedEyebrow: 'How we solved it',
    solvedTitle:
      'We designed a unified portal experience that puts the full service catalog under one clear interface.',
    approach: [
      'Structuring the service catalog around customer intent',
      'Designing purchase and management journeys end to end',
      'Implementing a scalable front-end for the portal',
      'Partnering on ongoing UX improvements after launch',
    ],
    capabilities: [
      'Domain and hosting catalog UX',
      'Customer account self-serve flows',
      'Responsive marketing-to-product continuity',
      'Front-end architecture ready for more services',
    ],
    deliveredEyebrow: 'What we delivered',
    deliveredTitle: 'We delivered a portal experience customers can buy and manage services from.',
    built: [
      'Portal UI/UX for core service journeys',
      'Front-end implementation of key catalog flows',
      'Responsive layouts for desktop and mobile',
      'Iterative improvements after go-live',
    ],
    impact: [
      '30% faster delivery through AI-powered workflow',
      'Clearer path from browse to purchase',
      'Stronger brand control over the customer journey',
    ],
    testimonial: {
      name: 'Giacomo Tognoni',
      role: 'Webglobe a.s. — CEO',
      quote:
        'MISK MANAGERS helped us design the UI and UX for our new websites and then proceeded with coding them.',
    },
    relevanceEyebrow: 'Relevance beyond this project',
    relevanceTitle:
      'This project shows how a owned portal can replace fragmented reseller experiences with one commercial product.',
    relevantIf: [
      'Selling multiple digital services under one brand',
      'Depending on third-party reseller skins today',
      'Need higher conversion from catalog to checkout',
      'Want one portal for domains, hosting, and cloud',
    ],
  },

  mindwio: {
    intro:
      'An AI-powered daily assistant that brings notes, tasks, reminders, and events into one conversational product people can talk to throughout the day.',
    meta: [
      { label: 'Client', value: 'Mindwio' },
      { label: 'Industry', value: 'AI productivity & consumer apps' },
      { label: 'Scope of work', value: 'Mobile product design, AI chat UX, development' },
      { label: 'Timeline', value: 'Concept → design → build → launch' },
      { label: 'Role', value: 'Product design, AI interaction design, mobile engineering' },
    ],
    features: [
      {
        title: 'Chat that actually gets work done',
        body: 'Create events, check the calendar, and capture notes without jumping between apps.',
      },
      {
        title: 'A personality users trust',
        body: 'The orb avatar and tone make AI assistance feel approachable, not cold or technical.',
      },
      {
        title: 'Quick actions when speech isn’t enough',
        body: 'Suggested chips accelerate common tasks while free text stays available for anything else.',
      },
      {
        title: 'Voice-ready input',
        body: 'Microphone-first paths for when typing is slower than speaking.',
      },
      {
        title: 'Designed for the pocket',
        body: 'Mobile layouts prioritized so daily use feels fast on a single screen.',
      },
      {
        title: 'Built for iteration',
        body: 'Architecture ready to grow with more AI capabilities without redesigning the core chat.',
      },
    ],
    challenge:
      'People juggle notes, calendars, and task tools separately — and most AI assistants feel either gimmicky or too complex for everyday use.',
    solvedEyebrow: 'How we solved it',
    solvedTitle:
      'We designed a conversational product centered on real daily actions, not generic chatbot demos.',
    approach: [
      'Defining the core AI actions worth shipping first',
      'Designing chat, avatar, and quick-action patterns',
      'Building the mobile experience around speed of capture',
      'Structuring the product for future AI capabilities',
    ],
    capabilities: [
      'Conversational task and event creation',
      'Calendar-aware suggestions',
      'Notes and reminder capture',
      'Voice and text input modes',
    ],
    deliveredEyebrow: 'What we delivered',
    deliveredTitle: 'We delivered a polished AI assistant experience people can use every day.',
    built: [
      'Mobile AI chat interface',
      'Quick-action suggestion patterns',
      'Avatar and brand expression in product',
      'Core note, task, and event flows',
    ],
    impact: [
      '30% faster delivery through AI-powered workflow',
      '5.0* app review rating',
      'Clearer daily assistant experience for end users',
    ],
    testimonial: {
      name: 'Product partner',
      role: 'AI consumer app',
      quote:
        'MISK MANAGERS moved quickly from concept to a product people enjoy talking to — the interaction design feels intentional, not bolted on.',
    },
    relevanceEyebrow: 'Relevance beyond this project',
    relevanceTitle:
      'This project shows how AI products succeed when the interface centers on real tasks, not novelty prompts.',
    relevantIf: [
      'Building consumer or workplace AI assistants',
      'Need chat UX that drives concrete actions',
      'Shipping mobile-first AI experiences',
      'Want brand personality baked into the product UI',
    ],
  },

  momentka: {
    intro:
      'A photo-printing app that takes people from capture to print formats and doorstep delivery — designed for simplicity, delight, and repeat orders.',
    meta: [
      { label: 'Client', value: 'Momentka' },
      { label: 'Industry', value: 'Consumer photo & print commerce' },
      { label: 'Scope of work', value: 'Mobile app UX, print ordering flow, product design' },
      { label: 'Timeline', value: 'Design → development → store launch' },
      { label: 'Role', value: 'Product design, mobile UX, front-end development' },
    ],
    features: [
      {
        title: 'From camera roll to print in minutes',
        body: 'Clear upload and format selection so ordering feels as easy as sharing a photo.',
      },
      {
        title: 'Formats people actually want',
        body: 'Print sizes and finish options presented simply — with confirmation before checkout.',
      },
      {
        title: 'A brand color that owns the screen',
        body: 'Bold red visual language that feels consumer-ready and memorable.',
      },
      {
        title: 'Built for repeat customers',
        body: 'Flows designed so the second order is faster than the first.',
      },
      {
        title: 'Mobile commerce without friction',
        body: 'Checkout steps that respect phone habits — thumb-friendly, few screens, clear totals.',
      },
      {
        title: 'Delivery you can trust',
        body: 'Order status and confirmation paths that reduce anxiety after payment.',
      },
    ],
    challenge:
      'Photo printing apps fail when format choices, uploads, and checkout feel heavy — people abandon before they order.',
    solvedEyebrow: 'How we solved it',
    solvedTitle:
      'We designed a focused mobile commerce flow that makes print ordering feel effortless.',
    approach: [
      'Simplifying format selection and upload states',
      'Designing a strong consumer brand presence in-product',
      'Reducing checkout steps without losing clarity',
      'Validating flows against real mobile usage patterns',
    ],
    capabilities: [
      'Photo upload and print format selection',
      'Order and delivery confirmation flow',
      'Consumer-ready mobile visual system',
      'Repeat-order friendly navigation',
    ],
    deliveredEyebrow: 'What we delivered',
    deliveredTitle: 'We delivered a mobile print-ordering experience built for everyday customers.',
    built: [
      'Mobile ordering UI/UX',
      'Print size and finish selection flows',
      'Upload and preview experience',
      'Checkout and confirmation screens',
    ],
    impact: [
      '1.000+ happy customers',
      '400+ prints ordered monthly',
      'Clear, delightful path from photo to doorstep',
    ],
    testimonial: {
      name: 'Customer success partner',
      role: 'Consumer print brand',
      quote:
        'The app finally feels as warm as the product — ordering prints went from a chore to something people want to do again.',
    },
    relevanceEyebrow: 'Relevance beyond this project',
    relevanceTitle:
      'This project shows how strong mobile commerce UX turns emotional products into repeatable revenue.',
    relevantIf: [
      'Selling physical goods from a mobile-first brand',
      'Need simpler upload / configure / checkout flows',
      'Want consumer identity to show up inside the product',
      'Growing repeat purchase rates on mobile',
    ],
  },

  roomvio: {
    intro:
      'A home inventory app that lets people label and track everything they own — from remotes to books — in a visual, room-based experience.',
    meta: [
      { label: 'Client', value: 'Roomvio' },
      { label: 'Industry', value: 'Consumer productivity & home organization' },
      { label: 'Scope of work', value: 'iOS & Android apps, product design, inventory UX' },
      { label: 'Timeline', value: 'Design → native builds → App Store / Play launch' },
      { label: 'Role', value: 'Product design, mobile engineering, dual-platform delivery' },
    ],
    features: [
      {
        title: 'Your home, labeled',
        body: 'Tag items in context of rooms so finding things later feels spatial, not like a spreadsheet.',
      },
      {
        title: 'Visual first',
        body: 'Illustration-led screens that make inventory feel inviting instead of administrative.',
      },
      {
        title: 'Native on both platforms',
        body: 'iOS and Android experiences shipped to stores with shared product logic.',
      },
      {
        title: 'Fast add, less friction',
        body: 'Capture flows designed so adding an item never feels like data entry homework.',
      },
      {
        title: 'Find it later, reliably',
        body: 'Search and room views that answer “where did I put that?” in seconds.',
      },
      {
        title: 'Store-ready quality',
        body: 'Polish and ratings focus so listing quality matches product usefulness.',
      },
    ],
    challenge:
      'People lose track of belongings across drawers and rooms — and most inventory tools feel too rigid for everyday home use.',
    solvedEyebrow: 'How we solved it',
    solvedTitle:
      'We built a dual-platform home inventory product that feels visual, light, and actually usable.',
    approach: [
      'Centering the experience on rooms and visual recall',
      'Designing fast item capture for mobile',
      'Shipping native apps for iOS and Android',
      'Polishing for store listing quality and reviews',
    ],
    capabilities: [
      'Room-based inventory organization',
      'Item tagging and search',
      'Native iOS and Android delivery',
      'Consumer-friendly empty states and visuals',
    ],
    deliveredEyebrow: 'What we delivered',
    deliveredTitle: 'We delivered Roomvio as a live inventory app on both major mobile platforms.',
    built: [
      'Product UX for home inventory',
      'Native apps for iOS and Android',
      'Room and item management features',
      'Store launch assets and polish',
    ],
    impact: [
      'iOS + Android apps live on both stores',
      '5.0* rated on the App Store',
      'A friendlier way to track what you own',
    ],
    testimonial: {
      name: 'App Store reviewer',
      role: 'Early customer',
      quote:
        'Finally an inventory app that doesn’t feel like spreadsheet software. Tagging things by room is brilliant.',
    },
    relevanceEyebrow: 'Relevance beyond this project',
    relevanceTitle:
      'This project shows how consumer utility apps win when spatial thinking beats form-heavy data entry.',
    relevantIf: [
      'Building dual-platform consumer apps',
      'Need inventory or catalog UX people enjoy using',
      'Want store-ready polish and ratings focus',
      'Designing products around real home or space contexts',
    ],
  },
}
