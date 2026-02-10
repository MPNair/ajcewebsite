// College Information and Academic Data for AMAL JYOTHI COLLEGE OF ENGINEERING

export const collegeInfo = {
  name: 'AMAL JYOTHI COLLEGE OF ENGINEERING',
  shortName: 'AJCE',
  established: 2000,
  location: {
    city: 'Kottayam',
    state: 'Kerala',
    country: 'India',
    fullAddress: 'Koovathpauly, Kottayam, Kerala - 686573',
    latitude: 9.6048,
    longitude: 76.5197,
  },
  contact: {
    phone: '+91-481-2500000',
    email: 'info@ajce.ac.in',
    website: 'www.ajce.ac.in',
  },
  affiliation: 'APJ Abdul Kalam Technological University (AKTU)',
  accreditation: 'NAAC A+ Grade (Valid till 2027)',
  tagline: "Empowering Engineers for Tomorrow's Challenges",
  motto: 'Excellence in Engineering Education',
}

export const departments = [
  {
    id: 'cse',
    code: 'CS',
    name: 'Computer Science & Engineering',
    fullName: 'Department of Computer Science and Engineering',
    established: 2000,
    seatsPerYear: 120,
    headOfDepartment: {
      name: 'Dr. James Wilson',
      email: 'james.wilson@ajce.ac.in',
      phone: '+91-9847-000001',
    },
    faculty: 45,
    students: 480,
    description:
      'The CSE department focuses on software development, web technologies, artificial intelligence, machine learning, and cloud computing.',
    vision:
      'To develop globally competent software professionals with strong technical skills and ethical values capable of solving real-world problems.',
    mission:
      'To provide quality education in computer science with emphasis on hands-on learning, innovation, and industry collaboration.',
    laboratories: [
      'Programming Lab (50 systems)',
      'Web Development Lab',
      'AI & Machine Learning Lab',
      'Database Management Lab',
      'Cloud Computing Lab',
      'Cybersecurity Lab',
      'Mobile App Development Lab',
    ],
    specializations: [
      'Artificial Intelligence & Machine Learning',
      'Cloud Computing & DevOps',
      'Web & Mobile Application Development',
      'Cybersecurity & Network Security',
      'Big Data Analytics',
      'Internet of Things (IoT)',
    ],
  },
  {
    id: 'ec',
    code: 'EC',
    name: 'Electronics & Communication Engineering',
    fullName: 'Department of Electronics and Communication Engineering',
    established: 2001,
    seatsPerYear: 80,
    headOfDepartment: {
      name: 'Dr. Sophia Martinez',
      email: 'sophia.martinez@ajce.ac.in',
      phone: '+91-9847-000002',
    },
    faculty: 35,
    students: 320,
    description:
      'The EC department specializes in communication systems, embedded systems, signal processing, and VLSI design.',
    vision:
      'To be a center of excellence in electronics and communication engineering, fostering innovation and research.',
    mission:
      'To provide comprehensive education in electronics and communication engineering with emphasis on practical skills and industry standards.',
    laboratories: [
      'Digital Electronics Lab',
      'Analog Electronics Lab',
      'Microprocessors & Microcontrollers Lab',
      'Communication Systems Lab',
      'Signal Processing Lab',
      'RF & Microwave Lab',
      'VLSI Design Lab',
    ],
    specializations: [
      'Embedded Systems Design',
      '5G & Wireless Communications',
      'Signal Processing & Digital Signal Processing',
      'Internet of Things (IoT)',
      'VLSI & Microelectronics',
      'Satellite Communications',
    ],
  },
  {
    id: 'mechanical',
    code: 'ME',
    name: 'Mechanical Engineering',
    fullName: 'Department of Mechanical Engineering',
    established: 2000,
    seatsPerYear: 100,
    headOfDepartment: {
      name: 'Dr. Rajesh Kumar',
      email: 'rajesh.kumar@ajce.ac.in',
      phone: '+91-9847-000003',
    },
    faculty: 38,
    students: 400,
    description:
      'The ME department covers thermal systems, machinery design, manufacturing processes, and renewable energy.',
    vision:
      'To develop mechanical engineers who are innovative, ethical, and capable of contributing to sustainable development.',
    mission:
      'To provide quality education in mechanical engineering with focus on design, manufacturing, and energy systems.',
    laboratories: [
      'Thermodynamics Lab',
      'Fluid Mechanics Lab',
      'Strength of Materials Lab',
      'Manufacturing Engineering Lab',
      'CAD/CAM Lab',
      'Thermal Engineering Lab',
      'Automotive Engineering Lab',
    ],
    specializations: [
      'Advanced Manufacturing & Robotics',
      'Thermal Engineering & Renewable Energy',
      'Automobile Engineering',
      'Computational Fluid Dynamics (CFD)',
      'Mechanical System Design',
    ],
  },
  {
    id: 'civil',
    code: 'CE',
    name: 'Civil Engineering',
    fullName: 'Department of Civil Engineering',
    established: 2002,
    seatsPerYear: 70,
    headOfDepartment: {
      name: 'Dr. Priya Sharma',
      email: 'priya.sharma@ajce.ac.in',
      phone: '+91-9847-000004',
    },
    faculty: 32,
    students: 280,
    description:
      'The Civil Engineering department builds expertise in infrastructure, structural design, and environmental engineering.',
    vision:
      'To develop civil engineers committed to sustainable infrastructure development and environmental protection.',
    mission:
      'To provide comprehensive education in civil engineering with emphasis on infrastructure design and sustainable development.',
    laboratories: [
      'Soil Mechanics Lab',
      'Concrete Technology Lab',
      'Surveying Lab',
      'Hydraulics & Fluid Mechanics Lab',
      'Environmental Engineering Lab',
      'Structural Analysis Lab',
      'Transportation Lab',
    ],
    specializations: [
      'Smart Infrastructure Design',
      'Structural Engineering & Design',
      'Transportation Engineering',
      'Water Resources & Hydraulics',
      'Green Building Technology & Sustainability',
    ],
  },
  {
    id: 'ee',
    code: 'EE',
    name: 'Electrical & Electronics Engineering',
    fullName: 'Department of Electrical and Electronics Engineering',
    established: 2003,
    seatsPerYear: 90,
    headOfDepartment: {
      name: 'Dr. Mohammed Ahmed',
      email: 'mohammed.ahmed@ajce.ac.in',
      phone: '+91-9847-000005',
    },
    faculty: 36,
    students: 360,
    description:
      'The EE department focuses on power systems, electrical machines, renewable energy, and smart grid technology.',
    vision:
      'To be a leader in electrical engineering education with focus on sustainable power systems and renewable energy.',
    mission:
      'To provide quality education in electrical engineering with emphasis on power systems, energy efficiency, and innovation.',
    laboratories: [
      'Power Systems Lab',
      'Electrical Machines Lab',
      'Power Electronics Lab',
      'Control Systems Lab',
      'High Voltage Lab',
      'Renewable Energy Lab',
      'Smart Grid Lab',
    ],
    specializations: [
      'Power System Operation & Control',
      'Renewable Energy Systems',
      'Smart Grid Technology',
      'Industrial Automation & Control',
      'Electric Vehicle Technology',
    ],
  },
]

export const academicPrograms = {
  btech: {
    name: 'Bachelor of Technology',
    duration: '4 years',
    totalSemesters: 8,
    totalCredits: 160,
    minCGPA: 2.0,
    structure: [
      {
        year: 1,
        semesters: [
          {
            number: 1,
            courses: 12,
            credits: 20,
            focus: 'Foundational Mathematics, Physics, Chemistry, and Basic Engineering',
          },
          {
            number: 2,
            courses: 12,
            credits: 20,
            focus: 'Engineering Mathematics, Physics, Chemistry, and Programming Basics',
          },
        ],
      },
      {
        year: 2,
        semesters: [
          {
            number: 3,
            courses: 14,
            credits: 22,
            focus: 'Core Engineering Subjects and Department-Specific Courses',
          },
          {
            number: 4,
            courses: 14,
            credits: 22,
            focus: 'Advanced Core Engineering and Department Specialization',
          },
        ],
      },
      {
        year: 3,
        semesters: [
          {
            number: 5,
            courses: 16,
            credits: 24,
            focus: 'Specialization Courses, Electives, and Lab Work',
          },
          {
            number: 6,
            courses: 16,
            credits: 24,
            focus: 'Advanced Specialization, Internship, and Practical Experience',
          },
        ],
      },
      {
        year: 4,
        semesters: [
          {
            number: 7,
            courses: 14,
            credits: 20,
            focus: 'Advanced Topics and Project Work',
          },
          {
            number: 8,
            courses: 14,
            credits: 18,
            focus: 'Capstone Project and Comprehensive Exams',
          },
        ],
      },
    ],
  },
}

export const admissionCriteria = {
  eligibility: [
    'Passed 12th Grade (10+2) with Physics, Chemistry, and Mathematics',
    'Minimum aggregate score of 60% in qualifying examination',
    'Valid JEE (Main) or KEAM score',
    'Age limit: Generally not exceeding 25 years as on the rank list date',
    'Must be an Indian national or NRI/PIO/OCI as per government regulations',
  ],
  requiredDocuments: [
    '10th and 12th mark sheets (original and attested copies)',
    'JEE (Main) or KEAM scorecard (original or certified copy)',
    'Aadhaar card (photocopy)',
    'PAN card (photocopy)',
    'Birth certificate (original or attested copy)',
    'School leaving certificate',
    'Community certificate (if applicable)',
    'Medical fitness certificate',
    'Migration certificate (if from another state)',
    'Passport-size photographs (4-6 copies)',
    'Transfer certificate from previous institution',
  ],
  fees: {
    tuitionFeePerSemester: 70000,
    otherChargesPerYear: 15000,
    hostelChargesPerYear: 80000,
    totalApproximatePerYear: 155000,
  },
}

export const placements = {
  averagePlacementRate: 95,
  averagePackage: 6.5, // in LPA
  highestPackage: 18.0, // in LPA
  year: 2024,
  topRecruiters: [
    'TCS',
    'Infosys',
    'Cognizant',
    'HCL Technologies',
    'IBM',
    'Wipro',
    'KPMG',
    'Deloitte',
    'Microsoft',
    'Google',
    'Amazon',
    'Accenture',
  ],
  sectors: [
    'Information Technology',
    'Software Development',
    'Consulting',
    'Financial Services',
    'Manufacturing',
    'Renewable Energy',
    'Infrastructure',
    'Startups',
  ],
}

export const accreditations = [
  {
    body: 'NAAC (National Assessment and Accreditation Council)',
    status: 'Accredited with A+ Grade',
    year: 2022,
    validUpto: 2027,
    description: 'Institutional accreditation for overall excellence in academic and administrative functions',
  },
  {
    body: 'AKTU (APJ Abdul Kalam Technological University)',
    status: 'Affiliated',
    year: 2000,
    validUpto: 'Ongoing',
    description: 'Curriculum design and academic standards approval',
  },
  {
    body: 'NBA (National Board of Accreditation)',
    status: 'Programme Accreditation',
    year: 2021,
    validUpto: 2026,
    description: 'Programme-level accreditation for select engineering departments',
  },
  {
    body: 'ISO 9001:2015',
    status: 'Quality Management System Certified',
    year: 2018,
    validUpto: 2026,
    description: 'Quality management and continuous improvement certification',
  },
]

export const achievements = [
  {
    category: 'Academics',
    items: [
      '95% average placement rate across all departments',
      'Consistent NAAC A+ institutional rating',
      'NBA accreditation for multiple engineering programs',
      'Strong academic performance with high pass percentages',
    ],
  },
  {
    category: 'Research & Innovation',
    items: [
      '500+ research publications in peer-reviewed journals',
      '50+ faculty members with PhD qualifications',
      'Multiple patents filed and granted',
      'Active research centers and innovation labs',
    ],
  },
  {
    category: 'Infrastructure',
    items: [
      'State-of-the-art laboratories and computing facilities',
      'Modern library with extensive digital resources',
      'Campus Wi-Fi and smart classrooms',
      'Sports and recreational facilities',
    ],
  },
  {
    category: 'Student Achievements',
    items: [
      'Winners of national and international competitions',
      'Active participation in hackathons and coding contests',
      'Student projects with industry applications',
      'Active student clubs and societies',
    ],
  },
  {
    category: 'Industry Partnerships',
    items: [
      'Collaborations with major IT and engineering companies',
      'Industry-sponsored projects and internships',
      'Guest lectures and workshops by industry experts',
      'Regular campus recruitment drives',
    ],
  },
]

export const scholarships = [
  {
    name: 'Merit-based Scholarship',
    eligibility: 'Students with excellent academic records',
    percentage: '25-50%',
    merit: 'CGPA ≥ 3.5 in previous semester',
  },
  {
    name: 'Financial Aid',
    eligibility: 'Economically weaker sections',
    percentage: '50-100%',
    merit: 'Family income below government threshold',
  },
  {
    name: 'Sports Scholarship',
    eligibility: 'Students excelling in sports',
    percentage: '25-50%',
    merit: 'Achievement at state/national level',
  },
  {
    name: 'SC/ST Scholarship',
    eligibility: 'Scheduled Caste/Scheduled Tribe students',
    percentage: 'As per government norms',
    merit: 'Government regulations compliance',
  },
]
