import React from 'react';

const WelcomePosts = () => {
  return (
    <div className="space-y-8 p-6">
      {/* Post 1: Welcome Introduction */}
      <div className="max-w-sm mx-auto">
        <div className="w-full aspect-square bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
          <div className="bg-white rounded-lg p-6 shadow-md w-full">
            <h1 className="text-purple-800 text-2xl font-bold mb-4 text-center">Welcome to Savvy Annie ✨</h1>
            <div className="space-y-3 text-purple-700">
              <p className="flex items-center">
                <span className="mr-2">💜</span> Your guide to financial confidence
              </p>
              <p className="flex items-center">
                <span className="mr-2">💰</span> Simple money management
              </p>
              <p className="flex items-center">
                <span className="mr-2">🏠</span> Family finance made easy
              </p>
              <p className="flex items-center">
                <span className="mr-2">✨</span> Practical tips that work
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="font-bold">Caption:</p>
          <p className="text-sm">
            "Hello and welcome! 👋 

            I'm so excited to create this space where we can talk about money without the confusion or judgment. Here you'll find practical tips, simple strategies, and real talk about family finances.

            What you'll get here:
            ✨ Easy-to-follow money tips
            💰 Budgeting made simple
            🏠 Family finance strategies
            💜 A supportive community

            Ready to take control of your finances? Drop a '👋' below and let's get started!

            #SavvyAnnie #PersonalFinance #UKMoney #FinancialFreedom"
          </p>
        </div>
      </div>

      {/* Post 2: Core Values Quote */}
      <div className="max-w-sm mx-auto">
        <div className="w-full aspect-square bg-purple-700 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center">
          <div className="text-purple-200 text-6xl mb-4">"</div>
          <p className="text-white text-xl text-center mb-6">Smart money management isn't about perfection. It's about progress.</p>
          <div className="text-purple-200">
            <p>Savvy Annie</p>
            <p className="text-sm mt-2">UK Money Coach</p>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="font-bold">Caption:</p>
          <p className="text-sm">
            "This is what I believe in 💫 

            Every financial journey starts with a single step. Whether you're:
            • Starting your first budget
            • Building emergency savings
            • Working towards big goals

            You're in the right place.

            What's one small money win you're proud of? Share below! 💜

            #MoneyMindset #FinancialWellness #UKMoney #MoneyTips"
          </p>
        </div>
      </div>

      {/* Post 3: First Tip */}
      <div className="max-w-sm mx-auto">
        <div className="w-full aspect-square bg-gradient-to-br from-purple-200 to-purple-300 rounded-lg shadow-lg p-8">
          <div className="text-purple-800 text-xl font-bold mb-2">Savvy Annie Tip #1</div>
          <h2 className="text-purple-900 text-2xl font-bold mb-4">Emergency Fund Basics</h2>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <div className="space-y-4 text-purple-800">
              <p className="flex items-center">
                <span className="mr-2">🎯</span> Goal: Your first £500
              </p>
              <p className="flex items-center">
                <span className="mr-2">💰</span> Save £20/week
              </p>
              <p className="flex items-center">
                <span className="mr-2">🏦</span> Separate savings account
              </p>
              <p className="flex items-center">
                <span className="mr-2">✨</span> Peace of mind priceless
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <p className="font-bold">Caption:</p>
          <p className="text-sm">
            "Let's start your financial journey with the most important step: your emergency fund! 🎯

            £500 is your first milestone. It's enough to handle most unexpected expenses, but not so overwhelming that it feels impossible.

            Top tip: Set up a weekly auto-transfer of £20. You'll reach your goal in 6 months! 

            Ready to start? Comment '💰' below for more saving strategies!

            #EmergencyFund #SavingMoney #UKFinance #MoneyTips"
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePosts;