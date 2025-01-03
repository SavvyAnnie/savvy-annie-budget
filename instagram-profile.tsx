import React from 'react';

const InstagramProfile = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Profile Header */}
      <div className="p-4 border-b">
        <div className="flex items-center">
          <div className="w-20 h-20 rounded-full bg-white border-2 border-purple-300 flex items-center justify-center overflow-hidden">
            {/* Logo placeholder - would be replaced with actual logo image */}
            <div className="w-16 h-16 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 opacity-10"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-purple-600 text-xs text-center">
                  Logo:
                  Hands cradling
                  house
                </div>
              </div>
            </div>
          </div>
          <div className="ml-4">
            <h1 className="text-lg font-bold">Savvy Annie</h1>
            <p className="text-sm text-gray-600">Mum | Money Saver | Been There 💜</p>
          </div>
        </div>
      </div>

      {/* Bio Section */}
      <div className="p-4">
        <p className="text-sm mb-2">✨ From struggling with money to saving with confidence</p>
        <p className="text-sm mb-2">💜 Sharing what actually works for families</p>
        <p className="text-sm mb-2">💰 Simple budgeting tips that fit real life</p>
        <p className="text-sm mb-2">🏠 Making family finance less scary</p>
        <p className="text-xs text-gray-500 mt-3 mb-2">Sharing my experience. Not financial advice.</p>
        <a href="#" className="text-purple-600 text-sm font-medium">Grab my free budget template ➜</a>
      </div>

      {/* Highlight Covers */}
      <div className="p-4 border-t">
        <h2 className="text-sm font-bold mb-3">Highlights</h2>
        <div className="flex space-x-4">
          {[
            {name: 'My Story', icon: '✨'},
            {name: 'Easy Tips', icon: '💡'},
            {name: 'Budget', icon: '💰'},
            {name: 'Win With Me', icon: '🎯'},
            {name: 'Free Tools', icon: '🎁'}
          ].map((highlight) => (
            <div key={highlight.name} className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-200 to-purple-300 flex items-center justify-center mb-1">
                <span className="text-base">{highlight.icon}</span>
              </div>
              <span className="text-xs">{highlight.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstagramProfile;