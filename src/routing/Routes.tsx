import React from 'react';
import { RouteObject } from 'react-router-dom';

import BusinessGeneral from '../Components/Layout/BusinessGeneral';
import BusinessHistoryForm from '../Components/Layout/BusinessHistoryForm';
import CreditReportAuthorization from '../Components/Layout/CreditReportForm';
import PersonalFinancialStatement from '../Components/Layout/PersonalStatement';
import BorrowerInformation from '../Components/Layout/BorrowerForm';
import CommercialApplication from '../Components/Layout/CommercialLoan';
import ManagementResume from '../Components/Layout/ManagementForm';
import ScheduleEstate from '../Components/Layout/ScheduleForm';
import BusinessDebtSchedule from '../Components/Layout/BusinessDebt';
import SidebarLayoutContainer from '../Components/Sidebar/SidebarLayoutContainer';
import LoginForm from '../Components/login/Login';
import SignUpForm from '../Components/signup/SignUp';

const routes: RouteObject[] = [
  { path: '/login', element: <LoginForm /> },
  { path: '/sign-up', element: <SignUpForm /> },
  { path: '/business-general', element: <BusinessGeneral /> },
  { path: '/', element: <SidebarLayoutContainer /> },
  { path: '/business-history', element: <BusinessHistoryForm /> },
  { path: '/credit-report-authorization', element: <CreditReportAuthorization /> },
  { path: '/personal-financial-statement', element: <PersonalFinancialStatement /> },
  { path: '/borrower-information', element: <BorrowerInformation /> },
  { path: '/commercial-loan-application', element: <CommercialApplication /> },
  { path: '/management-resume', element: <ManagementResume /> },
  { path: '/schedule-of-real-estate', element: <ScheduleEstate /> },
  { path: '/business-debt-schedule', element: <BusinessDebtSchedule /> },
];

export default routes;