import React from 'react'

const projectList = [
  {
    name: 'National Aquatic Championship 2025 – Website',
    description: `The official online platform for India's premier national-level swimming contest, designed to deliver a seamless and informative experience for athletes, coaches, and fans. The website features a visually engaging homepage with event highlights, a dynamic event schedule, and real-time updates. Users can easily register online, access downloadable resources like the rulebook and schedule, and explore detailed venue information with interactive maps and photo galleries. The site is fully responsive, ensuring smooth navigation on any device, and integrates social media feeds for live event coverage. With clear call-to-action buttons and a dedicated support section, the platform makes participation and information access effortless for everyone involved.`,
    venue: 'KRS Backwaters, Mysore',
    date: 'Mid-August 2025 (Exact dates to be announced)'
  },
  {
    name: 'Swimming Pool Access Management Website',
    description: 'A modern web-based ticketing and attendance system for swimming pools, replacing physical tickets with a digital QR code solution. Users can purchase passes, receive dynamic QR codes, and have their attendance verified by pool staff via QR scanning—all through an easy-to-use website.',
    features: [
      'Eliminate Physical Tickets: Digital QR code system for pool access, managed via the website.',
      'Flexible Payment Plans: Daily, monthly, and yearly subscriptions with secure online payments.',
      'User-Friendly Interface: Intuitive web dashboard for users and staff to manage access and attendance.',
      'Scalability: Designed to handle multiple users and pools across locations.',
      'Security: Secure payment processing and user data protection.'
    ]
  }
];

const Projects = () => {
  return (
    <>
     <div className='page-header'>
        <h1 className='page-title'>PROJECTS</h1>
    </div>
    <div style={{textAlign:'center', marginTop:'30px', marginBottom:'-10px'}}>
      <span style={{fontSize:'2rem', color:'#ff4d4d', fontWeight:700, letterSpacing:'2px', textTransform:'uppercase'}}>Upcoming Projects</span>
    </div>
    <div style={{maxWidth: '1200px', margin: '40px auto', display: 'grid', gap: '32px'}}>
      {projectList.map((project, idx) => (
        <div key={idx} style={{background:'#181818', borderRadius:'16px', boxShadow:'0 4px 16px #0008', padding:'32px', color:'#fff'}}>
          <h2 style={{color:'#ff4d4d', fontSize:'2rem', marginBottom:'12px'}}>{`${idx + 1}. ${project.name}`}</h2>
          {project.venue && <p style={{fontWeight:600, marginBottom:'4px'}}>Venue: <span style={{fontWeight:400}}>{project.venue}</span></p>}
          {project.date && <p style={{fontWeight:600, marginBottom:'10px'}}>Date: <span style={{fontWeight:400}}>{project.date}</span></p>}
          <p style={{fontSize:'1.15rem', lineHeight:1.7, marginBottom:'10px'}}>{project.description}</p>
          {project.features && (
            <ol style={{paddingLeft:'22px', marginBottom:0}}>
              {project.features.map((feature, i) => (
                <li key={i} style={{fontSize:'1.05rem', marginBottom:'6px', lineHeight:1.6}}>{feature}</li>
              ))}
            </ol>
          )}
        </div>
      ))}
    </div>
    </>
  )
}

export default Projects