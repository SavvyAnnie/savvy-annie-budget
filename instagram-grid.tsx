import React from 'react';

// Base components
const TipCard = ({ tipNumber, tipTitle, tipContent }) => (
  <div className="w-96 h-96 bg-gradient-to-br from-purple-200 to-purple-300 p-6 rounded-lg shadow-lg flex flex-col items-center justify-between">
    <div className="w-full text-center">
      <div className="text-purple-800 text-xl font-bold mb-2">Savvy Annie Tip #{tipNumber}</div>
      <h2 className="text-purple-900 text-2xl font-bold mb-4">{tipTitle}</h2>
    </div>
    <div className="text-purple-800 text-lg text-center mb-6">
      {tipContent}
    </div>
    <div className="text-purple-700 text-sm">@SavvyAnnie</div>
  </div>
);

const QuotePost = ({ quote, author }) => (
  <div className="w-96 h-96 bg-purple-700 p-8 rounded-lg shadow-lg flex flex-col items-center justify-center">
    <div className="text-purple-200 text-6xl mb-4">"</div>
    <div className="text-white text-xl text-center mb-6">{quote}</div>
    <div className="text-purple-200 text-lg">- {author}</div>
  </div>
);

const InstagramGrid = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-purple-800 mb-6">Instagram Launch Grid</h2>
      
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Row 1 */}
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800">Post 1: Welcome</h3>
          <p className="text-sm text-purple-600">Personal introduction</p>
          <div className="mt-2 text-xs text-purple-500">
            "Hi! I'm Annie, and I'm here to help you take control of your finances - one small step at a time! 💜"
          </div>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800">Post 2: Core Values</h3>
          <p className="text-sm text-purple-600">Quote post</p>
          <div className="mt-2 text-xs text-purple-500">
            "Making financial wisdom accessible to everyone. Because everyone deserves financial peace of mind. 💫"
          </div>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800">Post 3: First Tip</h3>
          <p className="text-sm text-purple-600">Emergency Fund</p>
          <div className="mt-2 text-xs text-purple-500">
            "Starting your financial journey? Here's your first step: The Emergency Fund Challenge 🎯"
          </div>
        </div>

        {/* Row 2 */}
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800">Post 4: Success Story</h3>
          <p className="text-sm text-purple-600">Personal journey</p>
          <div className="mt-2 text-xs text-purple-500">
            "From £10k in debt to financial freedom. My story could be yours too. 🌟"
          </div>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800">Post 5: Statistic</h3>
          <p className="text-sm text-purple-600">Key fact</p>
          <div className="mt-2 text-xs text-purple-500">
            "Did you know? 78% of families feel more confident after creating their first budget! 📊"
          </div>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800">Post 6: Carousel</h3>
          <p className="text-sm text-purple-600">Budget Myths</p>
          <div className="mt-2 text-xs text-purple-500">
            "Let's bust some common budget myths! Swipe to learn the truth 👉"
          </div>
        </div>

        {/* Row 3 */}
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800">Post 7: Daily Tip</h3>
          <p className="text-sm text-purple-600">Saving hack</p>
          <div className="mt-2 text-xs text-purple-500">
            "Small changes, big results! Try this 5-minute money saving hack 💡"
          </div>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800">Post 8: Challenge</h3>
          <p className="text-sm text-purple-600">Weekend Challenge</p>
          <div className="mt-2 text-xs text-purple-500">
            "Join me this weekend for a fun money-saving challenge! Who's in? 🙋‍♀️"
          </div>
        </div>
        
        <div className="bg-purple-100 p-4 rounded-lg">
          <h3 className="font-bold text-purple-800">Post 9: Community</h3>
          <p className="text-sm text-purple-600">Engagement</p>
          <div className="mt-2 text-xs text-purple-500">
            "What's your biggest financial goal? Let's support each other! 💭"
          </div>
        </div>
      </div>

      {/* Posting Schedule */}
      <div className="mt-8 p-6 bg-purple-50 rounded-lg">
        <h3 className="text-xl font-bold text-purple-800 mb-4">Launch Week Schedule</h3>
        <div className="space-y-2">
          <p className="text-purple-700"><strong>Day 1:</strong> Posts 1-3 (Welcome Series)</p>
          <p className="text-purple-700"><strong>Day 3:</strong> Posts 4-6 (Value Series)</p>
          <p className="text-purple-700"><strong>Day 5:</strong> Posts 7-9 (Engagement Series)</p>
        </div>
      </div>
    </div>
  );
};

export default InstagramGrid;