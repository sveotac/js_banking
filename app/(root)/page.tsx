import TotalBalanceBox from '@/components/TotalBalanceBox'
import HeaderBox from '@/components/HeaderBox'
import Head from 'next/head'
import React from 'react'
import RightSidebar from '@/components/RightSidebar'

const Home = () => {
    const loggedIn =  { firstName: 'Allfather', lastName: 'ALF', email: 'allfather@valhalla.com'}

  return (
   <section className="home">
    <div className="home-content">
        <header className="home-header">
            <HeaderBox
                type="greeting"
                title="Welcome"
                user = {loggedIn?.firstName || 'Guest'}
                subtext="Access and manage your account and transactions efficiently"
            />

            <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBalance={1250.35}
            />
        </header>

        RECENT TRANSACTIONS
    </div>

    <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{currentBalance:123.50}, {currentBalance:500.50}]}
    />
   </section>
  )
}

export default Home