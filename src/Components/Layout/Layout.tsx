// src/components/Layout.jsx
import './layoutStyle.css'

function Layout() {

  const people = [
    {
      name: 'Business General Questionnaire',
      url: '/business-general',
    },
    {
      name: 'Business History Form',
      url: '/business-history',
    },
    {
      name: 'Credit Report Authorization Form',
      url: '/credit-report-authorization',
    },
    {
      name: 'Personal Financial Statement',
      url: '/personal-financial-statement',
    },
    {
      name: 'Borrower Information Form',
      url: '/borrower-information',
    },
    {
      name: 'Commercial Loan Application',
      url: '/commercial-loan-application',
    },
    {
      name: 'Management Resume Form',
      url: '/management-resume',
    },
    {
      name: 'Schedule of Real Estate',
      url: '/schedule-of-real-estate',
    },
    {
      name: 'Business Debt Schedule',
      url: '/business-debt-schedule',
    },
  ];


  return (
    <>
      <h1 className="text-2xl font-semibold">SBA Loan Applications</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
        {people.map((person) => (
          <div key={person.url} className="relative flex items-center space-x-3 rounded-lg border-1 border-blue-100 px-6 py-5 shadow-xs hover:border-blue-400">
            <div className="shrink-0">
              <img alt="" src='./images/FosterLogoProfilePicture.png' className="size-10 rounded-full" />
            </div>
            <div className="min-w-0 flex-1">
              <a href={person.url} className="focus:outline-hidden hover:text-blue-400">
                <span aria-hidden="true" className="absolute inset-0" />
                <p className="text-sm font-medium text-gray-900 hover:text-blue-400">{person.name}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Layout