import React from 'react';

const Dashboard = React.lazy(() => import('./Dashboard/Dashboard'));

const Home = React.lazy(() => import('./Home/Home'))

const InputForm = React.lazy(() => import('./InputForm/InputForm'))

const Page404 = React.lazy(() => import('./Page404/Page404'))

export { 
    Dashboard,
    Home,
    InputForm,
    Page404
}