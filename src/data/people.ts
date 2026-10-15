// Generated from the CHIL WordPress site (chil.ahli.cc) during the static migration.
// Edit freely — this file is now the source of truth.

export type Person = { name: string; affil?: string; photo?: string; url?: string; role?: string };
export type Talk = Person & { title?: string; role?: string; abstract?: string[]; bio?: string[] };
export type Session = { title: string; talks: Talk[] };
export type UnconfSpeaker = Person & { bio: string[] };

// Speakers & panelists shown on the home page.
export const FEATURED_SPEAKERS: Person[] = [
  {
    "name": "Tim Althoff",
    "affil": "University of Washington",
    "photo": "people/ad32c87888.png"
  },
  {
    "name": "Bradd Busick",
    "affil": "Frazier Healthcare Partners",
    "photo": "people/eb5840d419.png"
  },
  {
    "name": "Andy Chu",
    "affil": "Chartis",
    "photo": "people/ad06c6f8b2.png"
  },
  {
    "name": "Jessilyn Dunn",
    "affil": "Duke University",
    "photo": "people/718b4fc451.png"
  },
  {
    "name": "Jean Feng",
    "affil": "University of California, San Francisco",
    "photo": "people/6cef243071.png"
  },
  {
    "name": "Saadia Gabriel",
    "affil": "University of California, Los Angeles",
    "photo": "people/d02d7ed514.png"
  },
  {
    "name": "Michael Han",
    "affil": "Multicare Health System",
    "photo": "people/77c56305b1.png"
  },
  {
    "name": "Ragan Hart",
    "affil": "Washington Research Foundation",
    "photo": "people/e7eaf9639f.png"
  },
  {
    "name": "Martin Kang",
    "affil": "Danaher Corporation",
    "photo": "people/3fc9633f25.png"
  },
  {
    "name": "Pang Wei Koh",
    "affil": "University of Washington",
    "photo": "people/a19aadcafa.png"
  },
  {
    "name": "Nikesh Kotecha",
    "affil": "Stanford University",
    "photo": "people/e22f4ddbfc.png"
  },
  {
    "name": "Clara Lin",
    "affil": "Seattle Children's",
    "photo": "people/91c268684c.png"
  },
  {
    "name": "Christopher Longhurst",
    "affil": "Seattle Children's",
    "photo": "people/89f12c74e7.png"
  },
  {
    "name": "Arjun (Raj) Manrai",
    "affil": "Harvard University",
    "photo": "people/b768672150.png"
  },
  {
    "name": "Ryan McRobert",
    "affil": "Fenwick & West",
    "photo": "people/7d9f52ca5e.png"
  },
  {
    "name": "Jay Nanduri",
    "affil": "Truveta",
    "photo": "people/b1334b6452.png"
  },
  {
    "name": "Neha Patadia",
    "affil": "SeaHealthTech",
    "photo": "people/752fef5477.png"
  },
  {
    "name": "Arun Ravi",
    "affil": "Microsoft",
    "photo": "people/2142769c00.png"
  },
  {
    "name": "Corinne Stroum",
    "affil": "SCAN",
    "photo": "people/62decd759f.png"
  },
  {
    "name": "Harini Suresh",
    "affil": "Brown University",
    "photo": "people/a68a245998.png"
  },
  {
    "name": "Hong Truong",
    "affil": "Define Ventures",
    "photo": "people/9a5bfcf24c.png"
  },
  {
    "name": "Lucy Wang",
    "affil": "University of Washington",
    "photo": "people/12e59a002e.png"
  }
];

// Talks on the Program → Speakers page, grouped by session.
export const SPEAKER_SESSIONS: Session[] = [
  {
    "title": "Keynotes",
    "talks": [
      {
        "name": "Christopher Longhurst",
        "affil": "Seattle Children’s",
        "photo": "people/89f12c74e7.png",
        "title": "Evidence-based Medicine in the AI Era",
        "bio": [
          "As CEO of Seattle Children’s, Dr. Christopher Longhurst, MD, MS leads a world-class team of healthcare providers, researchers, and staff who are united by Children’s mission to provide hope, care and cures to help every child live the healthiest and most fulfilling life possible.",
          "A practicing pediatrician for the past 25 years, Dr. Longhurst joined Seattle Children’s in 2026 after serving in a dual role as chief medical officer (CMO) and chief digital officer (CDO) at UC San Diego Health, as well as Professor of Biomedical Informatics and Pediatrics at UC San Diego School of Medicine. Combining a passion for innovation with the drive to improve quality, safety, equity and patient experience, Longhurst was instrumental in securing a philanthropic gift to establish the Joan & Irwin Jacobs Center for Health Innovation where he served as the center’s founding executive director leading the AI portfolio across the system.",
          "Dr. Longhurst now serves as an affiliate Professor of Pediatrics and Biomedical Informatics at the University of Washington and continues to contribute thought leadership and scholarship in care quality, patient safety and health informatics. He has published over 150 peer-reviewed articles in journals like the New England Journal of Medicine, JAMA and Pediatrics, and serves on the National Academy of Medicine steering committee for Patient Safety in the AI Era.",
          "Before joining UC San Diego Health, Dr. Longhurst spent 15 years at Stanford University, serving as chief medical information officer for Stanford Children’s Health, where he led efforts to improve children’s health and provider workflow using information technology. He also founded and led the nation’s first accredited clinical informatics fellowship at Stanford, where he was a clinical professor of pediatrics and biomedical informatics.",
          "Dr. Longhurst is an elected fellow of the prestigious American College of Medical Informatics. He earned his medical degree and Master of Science in Medical Informatics from UC Davis, completed his residency at Stanford University, and holds a Bachelor of Science from UC San Diego."
        ]
      },
      {
        "name": "Jessilyn Dunn",
        "affil": "Duke University",
        "photo": "people/718b4fc451.png",
        "title": "The Digital Physiome: Wearables for Disease Detection and Monitoring",
        "abstract": [
          "Digital health is rapidly expanding due to surging healthcare costs, deteriorating health outcomes, and the growing prevalence and accessibility of mobile health and wearable technologies. Recent technological advancements make it possible to closely and continuously monitor individuals using multiple measurement modalities in real time. We are collecting and integrating such wearables data with clinical information to gain a more precise understanding of health and disease and develop actionable, predictive health models for improving outcomes. We are simultaneously developing open source data science and machine learning tools for the digital health community, including the Digital Biomarker Discovery Pipeline (DBDP), to facilitate the use of mobile device data in healthcare."
        ],
        "bio": [
          "Jessilyn Dunn, PhD, is Associate Professor of Biomedical Engineering and Biostatistics & Bioinformatics at Duke University. She directs the BIG IDEAs Lab, which is focused on digital health innovation, wearable sensors, and the development and validation of AI-driven digital biomarkers. Dr. Dunn is the Principal Investigator of research initiatives funded by the NIH, NSF, and FDA which are developing digital biomarkers of conditions ranging from pre- and type 2 diabetes to influenza-like illness to Opioid Use Disorder. She sits on the Google Consumer Health Advisory Panel and is a recipient of the NSF CAREER Award and the IEEE EMBS Early Career Achievement Award for her leadership and innovation across engineering and medicine."
        ]
      },
      {
        "name": "Arjun (Raj) Manrai",
        "affil": "Harvard University",
        "photo": "people/b768672150.png",
        "title": "Teaching Large Language Models to Reason like Expert Clinicians",
        "abstract": [
          "This talk will introduce Dr. CaBot (https://arxiv.org/abs/2509.12194), an agentic AI system that my lab built in collaboration with physicians to emulate an expert diagnostician by generating written and slide-based presentations based on a case presentation alone. I will discuss several cases, including a recent case in which CaBot became the first AI system to generate a diagnosis published in the 100+ year history of the NEJM CPCs (https://www.nejm.org/doi/abs/10.1056/NEJMcpc2412539) and a public demonstration of CaBot covered recently in the New Yorker (https://www.newyorker.com/magazine/2025/09/29/if-ai-can-diagnose-patients-what-are-doctors-for)."
        ],
        "bio": [
          "Arjun (Raj) Manrai, PhD is an Assistant Professor in the Department of Biomedical Informatics at Harvard Medical School, where he leads a research lab that works broadly on applying machine learning and statistical modeling to improve medical decision-making. Raj is also a founding Senior Deputy Editor of NEJM AI and co-host of the NEJM AI Grand Rounds podcast. Focus areas for Raj’s research group include artificial intelligence in diagnostic and management reasoning, evaluating and improving common clinical equations, cardiovascular disease and kidney disease, decision making across populations, and reproducibility and safety challenges for medical artificial intelligence. His work has informed national and international clinical practice guidelines that affect millions, and his lab recently created Dr. CaBot, which generated the first AI diagnosis published in the 100+ year history of the NEJM Clinicopathological Conferences. His work has been published in the New England Journal of Medicine, JAMA, and Science, presented at the National Academy of Sciences, and featured in the New York Times, New Yorker, Wall Street Journal, and NPR."
        ]
      }
    ]
  },
  {
    "title": "Invited Talk",
    "talks": [
      {
        "name": "Pang Wei Koh",
        "affil": "University of Washington",
        "photo": "people/a19aadcafa.png",
        "title": "Reinforcement Learning with Evolving Rubrics",
        "abstract": [
          "Evaluations are crucial for shaping model development, both directly through training and indirectly by influencing what model developers focus on. This is especially true in medical domains where evaluations are complex. We will briefly discuss PanCanBench, a benchmark for pancreatic cancer questions. Then, we discuss our work on training DR Tulu, a long-form deep research model, by using RL with rubrics that evolve as the model trains, thereby providing discriminative training signals even on complex deep research tasks."
        ],
        "bio": [
          "Pang Wei Koh is an assistant professor in the Allen School of Computer Science and Engineering at the University of Washington. His research interests are in the theory and practice of building reliable machine learning systems. His research has been published in Nature and Cell, featured in The New York Times and The Washington Post, and recognized by the AI2050 Early Career Fellowship, MIT Tech Review Innovators Under 35 Asia Pacific Award, Google ML and Systems Junior Faculty Award, a Singapore AI Visiting Professorship, and best paper awards at ICML, KDD, and ACL. He received his PhD and BS in Computer Science from Stanford University. Prior to his PhD, he was the 3rd employee and Director of Partnerships at Coursera."
        ]
      }
    ]
  },
  {
    "title": "Mental Health Talks",
    "talks": [
      {
        "name": "Tim Althoff",
        "affil": "University of Washington",
        "photo": "people/ad32c87888.png",
        "title": "Quantifying Harm: The Frontier of Contextual Safety Evaluation in Mental Health AI",
        "abstract": [
          "As generative AI steadily integrates into the social fabric of daily life, therapy and companionship have emerged as dominant use cases. An estimated 1 in 4 U.S. adults have utilized a large language model for mental health support, often operating entirely outside formal clinical oversight or supervised healthcare systems. However, standard machine learning safety benchmarks are fundamentally ill-equipped for this domain. By optimizing for nonmaleficence through single-turn text classification or token-filtering, existing frameworks miss the interactional, accumulative dynamics—such as dependency formation, therapeutic ruptures, and the reinforcement of cognitive distortions—that dictate real-world psychological harm over time. This talk introduces a new community-wide effort to establish the evaluation frameworks, multi-stakeholder governance, and technical infrastructure required to ensure these systems operate with clinical integrity. At the center of this effort is the open-source Virtual Sandbox: a continuous evaluation environment that simulates multi-turn, multi-session interactions at scale. By leveraging a comprehensive attribute taxonomy and a stateful simulation engine, the Sandbox generates psychologically plausible synthetic users whose internal emotional states dynamically evolve in response to model behavior. Rather than producing static, gamifiable leaderboard scores, this architecture yields multi-dimensional Safety Profiles that explain exactly why a model succeeds or fails, for which populations, and through what psychological mechanisms. Ultimately, we demonstrate how this continuous infrastructure translates clinical principles into enforceable market signals, bridging the gap between cutting-edge AI development and safe, beneficial human-centered AI applications."
        ],
        "bio": [
          "Tim Althoff is the Jean-Loup Baer Associate Professor at the University of Washington’s Allen School. Tim’s research seeks to better understand and empower people through data and computation. His AI research has directly improved mental health services utilized by over ten million people and informed federal policy. A Stanford Ph.D. and NSF CAREER Award recipient, his work has earned numerous Best Paper Awards (including WWW, ACL, ICWSM and UbiComp) and the 2019 SIGKDD Dissertation Award. His research is frequently featured in major global outlets such as The New York Times, The Economist, and The Wall Street Journal."
        ]
      },
      {
        "name": "Saadia Gabriel",
        "affil": "University of California, Los Angeles",
        "photo": "people/d02d7ed514.png",
        "title": "Multi-Objective Alignment of Language Models for Personalized Psychotherapy",
        "abstract": [
          "Large language models (LLMs) are increasingly used for mental health support, but existing AI alignment methods typically optimize therapeutic objectives in isolation, leading to trade-offs between empathy, safety, and patient autonomy. We introduce a multi-objective direct preference optimization (MODPO) framework that jointly aligns LLMs across multiple clinically grounded therapeutic criteria using patient-derived preference data. Through large scale persona-based evaluation and blinded clinician validation, we show that multi-objective alignment produces responses that are consistently preferred over baselines while maintaining non-negotiable safety standards."
        ],
        "bio": [
          "Saadia Gabriel is an Assistant Professor of Computer Science at UCLA, where she leads the Misinformation, AI and Responsible Society Lab. Her work aims is to develop NLP technologies that improve diverse users’ well-being, critical thinking skills, and civic agency without displacing human autonomy. Her research has received several best paper nominations or awards, and has been covered by a wide range of media outlets like Forbes and TechCrunch. She was named on Forbes’ 30 under 30 2024 list and has received research awards from Google and Amazon. She previously was a NYU Data Science Faculty Fellow and MIT CSAIL Postdoctoral Fellow. She received her PhD from the University of Washington."
        ]
      },
      {
        "name": "Harini Suresh",
        "affil": "Brown University",
        "photo": "people/a68a245998.png",
        "title": "Towards Practitioner-Informed Governance for AI in Mental Health",
        "abstract": [
          "As AI systems are introduced into high-stakes domains, decisions around their use and governance must center the specific contexts and communities they affect. My research explores participatory approaches that support community control and local agency in AI design and governance. I’ll first discuss challenges to incorporating meaningful participation into general-purpose foundation models, highlighting a tension between local agency and scale, and proposing more domain-specific opportunities for participatory governance. Building on this, I’ll share findings from an 18-month ethnographic collaboration with mental health practitioners evaluating LLM counselors agains professional codes of conduct. We surface violations that persist across model architectures and prompt strategies, such as deceptive empathy, where apparent emotional responses create false trust with vulnerable users. I’ll end with open questions around what sustained, community-led governance of AI in mental health should look like: how can practitioners collectively articulate clear ethical guidelines and boundaries, and how do we close the gap between those guidelines and actual, enforceable accountability?"
        ],
        "bio": [
          "Dr. Harini Suresh is an Assistant Professor of Computer Science at Brown University, a core faculty in the Center for Technological Responsibility, Reimagination, and Redesign (CNTR), and a CRA Trustworthy AI Fellow. She leads the Data in Society Collective (DISCO Lab), which studies and builds AI systems that center individual and community agency. Her research takes an interdisciplinary and human-centered approach, building on sustained collaborations with domain experts including journalists, civil society organizations, and mental health practitioners. Before joining Brown, Harini was a postdoctoral researcher at Cornell Tech, examining the limitations of participatory approaches in the era of “general-purpose” AI systems. She completed her PhD, M.Eng. and B.Sc. in Computer Science at MIT."
        ]
      },
      {
        "name": "Lucy Wang",
        "affil": "University of Washington",
        "photo": "people/12e59a002e.png",
        "role": "Panel Moderator",
        "bio": [
          "Lucy Lu Wang is an Assistant Professor at the University of Washington Information School, where she leads the Language Accessibility Research (LARCH) lab. She holds adjunct appointments in the Paul G. Allen School of Computer Science & Engineering, Department of Biomedical Informatics & Medical Education, and Department of Human Centered Design & Engineering at the University of Washington, and is a Research Scientist at the Allen Institute for AI (Ai2). Her work spans scholarly document understanding, document accessibility, scientific evidence synthesis, and health communication. She focuses on developing language technologies to improve access to and understanding of information in high-expertise domains like science and healthcare, with an emphasis on dataset development and evaluation practices. Her work on supplement interaction detection, document accessibility, and academic publishing trends have been featured in media outlets such as Geekwire, Boing Boing, Axios, VentureBeat, and the New York Times."
        ]
      }
    ]
  },
  {
    "title": "Interactive Translation Talks",
    "talks": [
      {
        "name": "Jean Feng",
        "affil": "University of California, San Francisco",
        "photo": "people/6cef243071.png",
        "title": "AI at an Urban Safety-net Hospital",
        "abstract": [
          "This talk will share the journey and learnings of the PROSPECT lab, the data science arm of the Zuckerberg San Francisco General Hospital. Our mission is to apply AI/ML and digital technologies to improve health outcomes and equity in vulnerable and underserved populations. We will start from the very beginning—how our resource-constrained, urban safety-net hospital decided to commit funds towards a data science team—and walk through key projects that have shaped our team’s role in the hospital today."
        ],
        "bio": [
          "Jean Feng is an Associate Professor in the Department of Epidemiology and Biostatistics at the University of California, San Francisco and the UCSF-UC Berkeley Joint Program in Computational Precision Health. As a principal investigator at the UCSF-Stanford Center of Excellence in Regulatory Science and Innovation (CERSI), she collaborates closely with researchers from the US Food and Drug Administration to develop methods that improve the safety, reliability, and interpretability of artificial intelligence (AI)/machine learning (ML) algorithms in healthcare. She is also the data science lead on the PROSPECT team, the digital innovation task-force for the Zuckerberg San Francisco General Hospital."
        ]
      },
      {
        "name": "Nikesh Kotecha",
        "affil": "Stanford University",
        "photo": "people/e22f4ddbfc.png",
        "title": "Operationalizing AI at Stanford Healthcare: From Data Foundations to Agentic Workflows",
        "abstract": [
          "This talk shares practical lessons from deploying AI at scale in a large academic medical center. I’ll cover Stanford Healthcare’s responsible AI framework, evaluation and monitoring approaches, and clinical and operational workflows enabled by the ChatEHR platform."
        ],
        "bio": [
          "Nikesh Kotecha is currently the Head of Data Science at Stanford Health Care (SHC). Operating at the intersection of research and clinical implementation, Nikesh has built and scaled a cross-functional data science group charged with a two-fold mandate: establishing frameworks for organization-wide AI adoption, and leveraging in-house capabilities to solve problems for the enterprise. Previously, Nikesh led informatics at the Parker Institute for Cancer Immunotherapy and co-founded Cytobank Inc. (acquired by Danaher Life Sciences), a cloud-based single-cell analytics company. He also served as an Entrepreneur-in-Residence at FactoryHQ and delivered enterprise solutions at TIBCO Spotfire.",
          "Nikesh holds a Ph.D. in Biomedical Informatics from Stanford University and a B.S. in Bioengineering from Boston University. He stays involved in entrepreneurship and medicine through his work with StartX and as an Adjunct Professor at Stanford Medicine."
        ]
      },
      {
        "name": "Clara Lin",
        "affil": "Seattle Children’s",
        "photo": "people/91c268684c.png",
        "title": "Escaping Pilot Purgatory: The Operational Realities of Scaling Healthcare AI in a Pediatric Organization",
        "bio": [
          "Dr. Clara Lin is the Chief Medical Information Officer (CMIO) and VP of Digital Health and Informatics at Seattle Children’s, where she leads organizational growth through informatics and innovation. Board certified in Internal Medicine, Pediatrics, and Clinical Informatics, she possesses a unique perspective on the intersection of technology and patient care. In her current role, Dr. Lin facilitates the organization’s clinical and operational AI portfolio and co-chairs the Artificial Intelligence Review Board (AIRB). Her mission is to leverage technology to improve quality of care and clinician wellness. Outside of her leadership at the hospital, she serves as a Clinical Associate Professor in the Department of Pediatrics and Affiliate Associate Professor in the Department of Biomedical Informatics and Medical Education (BIME) at the University of Washington."
        ]
      }
    ]
  }
];

// Unconference speakers (Program → Unconference).
export const UNCONFERENCE_SPEAKERS: UnconfSpeaker[] = [
  {
    "name": "Bradd Busick",
    "photo": "people/eb5840d419.png",
    "bio": [
      "Bradd Busick is Principal, AI, Data & Technology Enablement at Frazier Healthcare Partners, where he focuses on integrating artificial intelligence across the investment lifecycle. He joined Frazier in 2026 after serving as Senior Vice President and Chief Information Officer at MultiCare Health System, where he led enterprise-wide digital transformation including Epic optimization, Workday ERP migration, and cloud infrastructure buildout. He received the 2023 Healthcare ORBIE award from SeattleCIO and brings more than 20 years of experience across finance, aerospace, retail, philanthropy, and healthcare, including prior roles at the Bill & Melinda Gates Foundation and MacDonald-Miller."
    ]
  },
  {
    "name": "Chris Carruthers",
    "photo": "people/6af9e111d6.png",
    "bio": [
      "Chris Carruthers is Chief Innovation Officer at DexCare, where he leads the Customer Solutions Architecture Team and helps bridge customer business needs with the DexCare platform. He brings more than two decades of experience across enterprise IT systems, software development, business consulting, and entrepreneurship. Prior to DexCare's spin-out, he worked at Providence St. Joseph commercializing the technology that became DexCare, and earlier led enterprise digital delivery teams at Slalom Consulting and his own consulting firm, Carhea Technologies."
    ]
  },
  {
    "name": "Andy Chu",
    "photo": "people/ad06c6f8b2.png",
    "bio": [
      "Andy Chu serves as Senior Vice President of AI and Technology at Chartis, where he leads a multidisciplinary team of product managers, engineers, data scientists, and designers building technology-forward solutions for health systems and payers. He previously served as Chief Product and Technology Officer at Providence's Digital Innovation Group, where he led the incubation of companies including Circle, Xealth, DexCare, and Praia Health. Before healthcare, he held senior leadership roles at Microsoft and other high-growth technology companies. He holds a B.S. in Electrical Engineering from the University of Virginia."
    ]
  },
  {
    "name": "Michael Han",
    "photo": "people/77c56305b1.png",
    "bio": [
      "Michael Han, MD, MBA serves as Chief Medical Officer at Ambience Healthcare, the leading AI platform for clinical documentation and revenue integrity. He brings over two decades of experience spanning clinical practice, physician leadership, and health IT, most recently as Enterprise CMIO at MultiCare Health System. Board-certified in both urology and clinical informatics, he received his MD from the University of Michigan and his MBA from the Wharton School of the University of Pennsylvania."
    ]
  },
  {
    "name": "Ragan Hart",
    "photo": "people/e7eaf9639f.png",
    "bio": [
      "Ragan Hart, Ph.D., is Senior Associate for Strategic Investments at Washington Research Foundation, where she focuses on investments in life sciences and healthtech. She joined WRF from MultiCare Capital Partners, the strategic investment arm of MultiCare Health System, where she focused on healthtech and AI/ML. She co-founded MDisrupt to connect companies with life-sciences experts to accelerate the development and clinical validation of healthcare products. She holds a doctorate in public health genetics with a concentration in health economics from the University of Washington and was a postdoctoral scholar at Stanford's Department of Biomedical Data Science."
    ]
  },
  {
    "name": "Martin Kang",
    "photo": "people/3fc9633f25.png",
    "bio": [
      "Martin Kang, MD is a Seattle-based physician and Senior Director of AI Product Management at Danaher Corporation, working at the intersection of digital health, AI, and medical innovation. He earned his medical degree from the Icahn School of Medicine at Mount Sinai and focuses on applying AI and emerging technologies to advance medical research and clinical practice."
    ]
  },
  {
    "name": "Nikesh Kotecha",
    "photo": "people/e22f4ddbfc.png",
    "bio": [
      "Nikesh Kotecha, Ph.D is a senior leader in biomedical informatics and a seasoned entrepreneur driving innovation in cancer immunotherapy. As Vice President of Informatics at the Parker Institute for Cancer Immunotherapy (PICI), he spearheads the integration of computational and molecular technologies to accelerate the development of transformative immune-based treatments. He co-founded Cytobank Inc., a pioneering company in single-cell proteomics and cytometry analytics. Dr. Kotecha holds a Ph.D. in Biomedical Informatics from Stanford University and a B.S. in Biomedical Engineering from Boston University. His career spans roles in engineering, business development, and technical leadership at organizations including TIBCO Spotfire and Pfizer."
    ]
  },
  {
    "name": "Ryan McRobert",
    "photo": "people/7d9f52ca5e.png",
    "bio": [
      "Ryan McRobert is a Partner at Fenwick & West, where he provides strategic counsel to public and private technology and life sciences companies, including digital health and AI healthcare-related companies. He advises clients ranging from early-stage startups to mature public companies and hosts office hours for CoMotion Labs cohort companies at the University of Washington. He holds a B.A. from the University of Washington."
    ]
  },
  {
    "name": "Jay Nanduri",
    "photo": "people/b1334b6452.png",
    "bio": [
      "Jay Nanduri is co-founder and Chief Technology Officer of Truveta, where he leads engineering, AI/ML, security, privacy, and compliance for the company's health data platform. He spent more than two decades at Microsoft, culminating as a Technical Fellow and Corporate Vice President leading engineering for fraud protection, financial services, and supply chain, and earlier serving as GM of Bing Mobile Engineering. He holds an MBA from The Wharton School, an M.Tech from the National Institute of Technology Warangal, and a B.E. from Osmania University."
    ]
  },
  {
    "name": "Neha Patadia",
    "photo": "people/752fef5477.png",
    "bio": [
      "Neha Patadia is Founding Head of Partnerships and Growth at FounderNexus, based in Kirkland, Washington. She is the founder of SeaHealthTech, the community-led healthtech organization connecting founders, investors, clinicians, and technologists across Seattle and the Pacific Northwest, and also the founder of AIHealthTech, a boutique advisory firm supporting health tech companies on strategy, sales, and data infrastructure. Earlier in her career, she served as Director of Data and Analytics at SeniorLink. She holds an M.S. in Health Informatics & Policy from Weill Cornell Medical College."
    ]
  },
  {
    "name": "Arun Ravi",
    "photo": "people/2142769c00.png",
    "bio": [
      "Arun Ravi is Seniorf Director, Health AI at Microsoft, where he oversees first-party Microsoft products, product marketing, portfolio planning, and platform commercialization strategy on the Health and Life Sciences Platform & AI team. He has been deeply involved in the development of DAX and DAX Copilot. Before Microsoft, he was part of the founding team at AWS Health AI, where he helped launch Amazon Comprehend Medical, Amazon HealthLake, and Amazon Transcribe Medical. Earlier, he was co-founder and CEO of Mevoked, a behavioral health company acquired by WellBrain in 2017."
    ]
  },
  {
    "name": "Corinne Stroum",
    "photo": "people/62decd759f.png",
    "bio": [
      "Corinne Stroum is Head of Emerging Technology at SCAN, where she leads cross-functional teams focused on improving experiences for older adults. She brings a decade of product and program leadership in healthcare analytics and machine learning, with prior roles at Advata, KenSci, Caradigm, and Microsoft. Earlier in her career, she worked in clinical and biomedical engineering roles, including as a clinical technician for intra-aortic balloon pumps and a systems validation engineer for PET/CT scanners. She holds a B.S. in Biomedical and Electrical Engineering from Washington University in St. Louis and an M.S. in Engineering & Technology Innovation Management from Carnegie Mellon University."
    ]
  },
  {
    "name": "Hong Truong",
    "photo": "people/9a5bfcf24c.png",
    "bio": [
      "Hong Truong is a Principal at Define Ventures, an early-stage healthcare-focused venture fund. Her career spans the intersection of healthcare, venture capital, and entrepreneurship, with prior roles at California Health Care Foundation, Summation Health Ventures (Cedars-Sinai and MemorialCare), Kaiser Permanente Ventures, and Analysis Group. She holds a B.A. and B.S. from Brown University and an MPH in Health Management from the Yale School of Public Health."
    ]
  }
];

// 2026 Organizing Committee (About → Organizers).
export const ORGANIZERS: Person[] = [
  {
    "name": "Emily Alsentzer",
    "affil": "Stanford U",
    "role": "General Chair",
    "url": "https://emilyalsentzer.com/",
    "photo": "people/88c49cff30.png"
  },
  {
    "name": "Monica Agrawal",
    "affil": "Duke University",
    "role": "General Chair",
    "url": "http://monicaagrawal.com",
    "photo": "people/8797e87b1f.png"
  },
  {
    "name": "Michael Oberst",
    "affil": "Johns Hopkins U",
    "role": "Program Chair"
  },
  {
    "name": "Max Xu",
    "role": "Research Roundtables Chair"
  },
  {
    "name": "David Pellow",
    "affil": "U Toronto",
    "role": "Research Roundtables Chair"
  },
  {
    "name": "Kyle Heuton",
    "affil": "Harvard U",
    "role": "Doctoral Symposium Chair"
  },
  {
    "name": "Nikesh Kotecha",
    "affil": "Stanford University",
    "role": "Unconference Chair",
    "photo": "people/e22f4ddbfc.png"
  },
  {
    "name": "Connor O’Brian",
    "role": "Unconference Chair"
  },
  {
    "name": "Brett Beaulieu-Jones",
    "affil": "U Chicago",
    "role": "Local Chair",
    "url": "http://bbjlab.com",
    "photo": "people/e78ed45123.png"
  },
  {
    "name": "Sarah Jabbour",
    "affil": "Chicago Booth",
    "role": "Local Chair (Support)"
  },
  {
    "name": "Amin Adibi",
    "affil": "University of British Columbia",
    "role": "Comms Chair",
    "url": "https://www.adibi.ca/",
    "photo": "people/69dc56ee9e.png"
  },
  {
    "name": "Frances Dean",
    "affil": "UC Berkeley",
    "role": "Comms Chair"
  },
  {
    "name": "Kai Wang",
    "affil": "Georgia Tech",
    "role": "Fundraising Chair (Advisory)",
    "url": "https://guaguakai.com/",
    "photo": "people/80e5bc8de6.png"
  },
  {
    "name": "Olawale (Wale) Salaudeen",
    "affil": "Microsoft Research",
    "role": "Fundraising Chair"
  },
  {
    "name": "Elizabeth Healey",
    "affil": "Boston Children's",
    "role": "Review Chair (Advisory)",
    "url": "https://elizabethhealey.com/",
    "photo": "people/d6a10ec463.png"
  },
  {
    "name": "Nitya Thakkar",
    "affil": "Stanford U",
    "role": "Review Chair"
  },
  {
    "name": "Simon Lee",
    "affil": "UCLA",
    "role": "Review Chair"
  },
  {
    "name": "Tom Pollard",
    "affil": "MIT",
    "role": "Proceedings Chair",
    "photo": "people/6d7bed0a7f.png"
  },
  {
    "name": "Tom Hartvigsen",
    "affil": "U Virginia",
    "role": "Senior Area Chair",
    "url": "https://www.tomhartvigsen.com/",
    "photo": "people/df9bfd9864.png"
  },
  {
    "name": "Anna Zink",
    "affil": "Tufts University",
    "role": "Senior Area Chair",
    "url": "https://zinka88.github.io/",
    "photo": "people/a74d0bd542.png"
  },
  {
    "name": "Bill La Cava",
    "affil": "Boston Children's",
    "role": "Senior Area Chair"
  }
];
