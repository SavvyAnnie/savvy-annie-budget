import React from 'react';

const TipCard = ({ tipNumber, tipTitle, tipContent }) => {
  return (
    <div className="w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-300 p-6 rounded-lg shadow-lg flex flex-col items-center justify-between">
      {/* Header */}
      <div className="w-full text-center">
        <div className="text-purple-800 text-xl font-bold mb-2">Savvy Annie Tip #{tipNumber}</div>
        <h2 className="text-purple-900 text-2xl font-bold mb-4">{tipTitle}</h2>
      </div>
      
      {/* Content */}
      <div className="text-purple-800 text-lg text-center mb-6">
        {tipContent}
      </div>
      
      {/* Logo */}
      <div className="text-purple-700 text-sm">
        @SavvyAnnie
      </div>
    </div>
  );
};

const QuotePost = ({ quote, author }) => {
  return (
    <div className="w-96 h-96 bg-purple-700 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <div className="text-purple-200 text-6xl mb-4">"</div>
      <div className="text-white text-xl text-center mb-6">
        {quote}
      </div>
      <div className="text-purple-200 text-lg">
        - {author}
      </div>
    </div>
  );
};

const CarouselSlide = ({ slideNumber, totalSlides, title, content }) => {
  return (
    <div className="w-96 h-96 bg-white p-6 rounded-lg shadow-lg">
      {/* Header */}
      <div className="border-b-2 border-purple-300 pb-4 mb-6">
        <h2 className="text-purple-800 text-xl font-bold">{title}</h2>
        <div className="flex mt-2">
          {[...Array(totalSlides)].map((_, i) => (
            <div
              key={i}
              className={`h-1 w-8 mr-1 rounded ${
                i + 1 <= slideNumber ? 'bg-purple-600' : 'bg-purple-200'
              }`}
            />
          ))}
        </div>
      </div>
      
      {/* Content */}
      <div className="text-purple-900 text-lg">
        {content}
      </div>
    </div>
  );
};

const StatisticPost = ({ statistic, description }) => {
  return (
    <div className="w-96 h-96 bg-purple-100 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
      <div className="text-purple-800 text-5xl font-bold mb-4">
        {statistic}
      </div>
      <div className="text-purple-700 text-xl text-center">
        {description}
      </div>
    </div>
  );
};

const PersonalUpdate = ({ image, title, content }) => {
  return (
    <div className="w-96 h-96 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="h-2/3 bg-purple-200 flex items-center justify-center">
        {/* Placeholder for image */}
        <div className="text-purple-600">
          [Photo Space]
        </div>
      </div>
      <div className="p-4">
        <h3 className="text-purple-800 text-xl font-bold mb-2">{title}</h3>
        <p className="text-purple-700">{content}</p>
      </div>
    </div>
  );
};

// Example usage component
const TemplateExamples = () => {
  return (
    <div className="space-y-8">
      <TipCard 
        tipNumber={1}
        tipTitle="Start an Emergency Fund"
        tipContent="Begin with just £500 - it's your first step to financial security! Save a little each week and watch it grow. 💰"
      />
      
      <QuotePost 
        quote="The best time to start saving was yesterday. The next best time is today."
        author="Savvy Annie"
      />
      
      <CarouselSlide 
        slideNumber={1}
        totalSlides={3}
        title="3 Steps to Better Budgeting"
        content="Step 1: Track every expense for one week - yes, even that coffee! ☕"
      />
      
      <StatisticPost 
        statistic="78%"
        description="of families feel more confident after creating their first budget"
      />
      
      <PersonalUpdate 
        title="My Weekend Money Win"
        content="Found great deals at the farmer's market and saved £30 on our weekly shop! 🥬"
      />
    </div>
  );
};

export default TemplateExamples;