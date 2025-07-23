import { useState } from 'react'
import Layout from './Components/Layout'
import Logo from './assets/FosterLogoProfilePicture.png'
import './App.css'
import './index.css'

function App() {
  const people = [
  {
    name: 'Business General Questionaire',
  },
  {
    name: 'Business History Form',
  },
  {
    name: 'Credit Report Authorization Form',
  },
  {
    name: 'Personal Financial Statement',
  },
  {
    name: 'Borrower Information Form',
  },
  {
    name: 'Commercial Loan Application',
  },
  {
    name: 'Management Resume Form',
  },
  {
    name: 'Schedule of Real Estate',
  },
  {
    name: 'Business Debt Schedule',
  },
]

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-4 mt-5">
        {people.map((person) => (
          <div className="relative flex items-center space-x-3 rounded-lg bg-white px-6 py-5 shadow-xs focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400">
            <div className="shrink-0">
              <img alt="" src={Logo} className="size-10 rounded-full" />
            </div>
            <div className="min-w-0 flex-1">
              <a href="#" className="focus:outline-hidden">
                <span aria-hidden="true" className="absolute inset-0" />
                <p className="text-sm font-medium text-gray-900">{person.name}</p>
              </a>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
}

export default App
