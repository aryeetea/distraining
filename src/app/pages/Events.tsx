export function Events() {
  const events = [
    {
      title: 'Open House - Spring 2026',
      date: 'March 15, 2026',
      time: '10:00 AM - 2:00 PM',
      description: 'Join us for a campus tour and meet our instructors. Learn about our programs and ask questions.',
      color: '#FF8C42'
    },
    {
      title: 'Certification Workshop',
      date: 'April 8, 2026',
      time: '9:00 AM - 5:00 PM',
      description: 'Intensive one-day workshop preparing students for sterile processing certification exams.',
      color: '#003087'
    },
    {
      title: 'Alumni Networking Event',
      date: 'May 20, 2026',
      time: '6:00 PM - 9:00 PM',
      description: 'Connect with fellow graduates and industry professionals. Expand your network and career opportunities.',
      color: '#00A651'
    }
  ];

  return (
    <div className="py-12 md:py-20" style={{ backgroundColor: '#f8fafc' }}>
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        <h1 
          className="mb-12 text-center"
          style={{ 
            fontFamily: 'Poppins, sans-serif', 
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '800',
            color: '#003087'
          }}
        >
          Upcoming Events
        </h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div 
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
              style={{
                border: '1px solid rgba(0, 48, 135, 0.08)'
              }}
            >
              {/* Accent Top Bar */}
              <div 
                className="h-2"
                style={{ backgroundColor: event.color }}
              />
              
              <div className="p-6">
                <div 
                  className="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-white"
                  style={{ 
                    backgroundColor: event.color,
                    fontSize: '13px',
                    fontWeight: '600',
                    fontFamily: 'Rubik, sans-serif'
                  }}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {event.date}
                </div>
                
                <h3 
                  className="mb-3"
                  style={{ 
                    fontFamily: 'Poppins, sans-serif', 
                    fontSize: '22px',
                    fontWeight: '700',
                    color: '#0c121c'
                  }}
                >
                  {event.title}
                </h3>
                
                <div 
                  className="mb-4 flex items-center gap-2"
                  style={{ 
                    fontFamily: 'Rubik, sans-serif',
                    fontSize: '14px',
                    color: '#0c121c',
                    opacity: '0.6'
                  }}
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {event.time}
                </div>
                
                <p 
                  style={{ 
                    fontFamily: 'Rubik, sans-serif',
                    fontSize: '15px',
                    lineHeight: '1.6',
                    color: '#0c121c',
                    opacity: '0.8'
                  }}
                >
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}