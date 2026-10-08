export const company = {
  name: 'Ausmore Building & Construction Services Limited',
  rc: '7569789',
  phone: '0806 164 5497',
  tel: 'tel:+2348061645497',
  email: 'ausmoreconstructionservices@gmail.com',
  whatsapp: 'https://wa.me/2348061645497',
  address: ['113 Edet Akpan Avenue,', 'Uyo, Akwa Ibom State,', 'Nigeria'],
  ceo: 'Augustine Udim',
}

const img = (slug, n) => `/images/projects/project-${slug}${n ? `-${n}` : ''}.jpg`

export const projects = [
  {
    slug: 'church-latter-day-saints',
    title: 'Church of Jesus Christ of Latter-day Saints',
    category: 'Construction',
    status: 'Completed',
    location: 'Oko Ita, Akwa Ibom State',
    year: '',
    description:
      'A completed church construction project delivered with a focus on quality workmanship, functional planning, structural integrity and a refined architectural finish.',
    image: img('church-latter-day-saints'),
    images: [2, 3, 4, 5].map((n) => img('church-latter-day-saints', n)),
  },
  {
    slug: 'judges-quarters',
    title: "Judges' Quarters",
    category: 'Construction / Government Project',
    status: 'Ongoing',
    location: 'Akwa Ibom State, Nigeria',
    year: '',
    description:
      'An ongoing government development project focused on quality workmanship, structural integrity, efficient project management and timely delivery in accordance with development standards.',
    image: img('judges-quarters'),
    images: [img('judges-quarters', 2), img('judges-quarters', 3)],
  },
  {
    slug: 'church-renovation',
    title: 'Church Extension & Renovation',
    category: 'Renovation',
    status: 'Completed',
    location: 'Nigeria',
    year: '',
    description:
      'A church extension and renovation project involving the improvement and expansion of an existing worship environment while maintaining functionality, architectural character and quality workmanship.',
    image: img('church-renovation'),
    images: [img('church-renovation', 2), img('church-renovation', 3)],
  },
]

export const services = [
  {
    n: '01',
    title: 'Architectural Design & Planning',
    text: 'Architectural design, 3D visualization, renovation and remodelling design, site planning and development.',
    items: ['Architectural design', '3D visualization', 'Renovation/remodelling design', 'Site planning', 'Development planning'],
  },
  {
    n: '02',
    title: 'Building & Construction',
    text: 'Residential construction, commercial and office buildings, property development, renovation, refurbishment and building improvement.',
    items: ['Residential construction', 'Commercial buildings', 'Office buildings', 'Property development', 'Renovation', 'Refurbishment', 'Building improvement'],
  },
  {
    n: '03',
    title: 'Project Management',
    text: 'Planning, coordination, construction supervision, procurement, quality control, consultant coordination, documentation and handover.',
    items: ['Project planning', 'Project coordination', 'Construction supervision', 'Procurement coordination', 'Quality control', 'Contractor coordination', 'Consultant coordination', 'Project documentation', 'Handover'],
  },
]

export const steps = [
  ['01', 'Discover', 'Understand the brief, site, needs and ambitions.'],
  ['02', 'Design', 'Shape the idea into a considered architectural solution.'],
  ['03', 'Plan', 'Coordinate drawings, procurement and project requirements.'],
  ['04', 'Build', 'Execute with supervision, quality control and disciplined construction.'],
  ['05', 'Deliver', 'Complete, document and hand over the project.'],
]

export const values = [
  ['Trust', 'We build relationships through clear communication and dependable execution.'],
  ['Transparency', 'We believe clients should understand what is being done, why it is being done and how their project is progressing.'],
  ['Quality', 'We pursue quality workmanship and thoughtful design at every stage.'],
  ['Reliability', 'We take commitments seriously and work toward predictable, professional delivery.'],
  ['Professionalism', 'Every project is approached with structure, discipline and accountability.'],
  ['Excellence', 'We continually pursue better design, better execution and better outcomes.'],
]
