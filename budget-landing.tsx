import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';

// Budget Template Component
const BudgetTemplate = () => {
  const [income, setIncome] = useState({
    salary1: '',
    salary2: '',
    benefits: '',
    other: ''
  });

  const [expenses, setExpenses] = useState({
    housing: {
      mortgage: '',
      utilities: '',
      'council tax': '',
      insurance: '',
      maintenance: ''
    },
    daily: {
      groceries: '',
      transport: '',
      childcare: '',
      phone: '',
      internet: ''
    },
    savings: {
      emergency: '',
      future: '',
      children: ''
    },
    lifestyle: {
      entertainment: '',
      dining: '',
      hobbies: '',
      holidays: ''
    }
  });

  const calculateTotal = (obj) => {
    return Object.values(obj).reduce((sum, val) => sum + (Number(val) || 0), 0);
  };

  const calculateCategoryTotal = (category) => {
    return Object.values(expenses[category]).reduce((sum, val) => sum + (Number(val) || 0), 0);
  };

  const totalIncome = calculateTotal(income);
  const totalExpenses = Object.keys(expenses).reduce((sum, category) => sum + calculateCategoryTotal(category), 0);
  const remaining = totalIncome - totalExpenses;

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-purple-800">💜 Savvy Annie's Simple Family Budget</CardTitle>
        </CardHeader>
        <CardContent>
          {/* Monthly Income Section */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Monthly Income 💰</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="salary1">Primary Salary</Label>
                <Input
                  id="salary1"
                  type="number"
                  value={income.salary1}
                  onChange={(e) => setIncome({...income, salary1: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="salary2">Secondary Salary</Label>
                <Input
                  id="salary2"
                  type="number"
                  value={income.salary2}
                  onChange={(e) => setIncome({...income, salary2: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="benefits">Benefits</Label>
                <Input
                  id="benefits"
                  type="number"
                  value={income.benefits}
                  onChange={(e) => setIncome({...income, benefits: e.target.value})}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="other">Other Income</Label>
                <Input
                  id="other"
                  type="number"
                  value={income.other}
                  onChange={(e) => setIncome({...income, other: e.target.value})}
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Housing Expenses */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Housing 🏠</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(expenses.housing).map(([key, value]) => (
                <div key={key}>
                  <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                  <Input
                    id={key}
                    type="number"
                    value={value}
                    onChange={(e) => setExpenses({
                      ...expenses,
                      housing: {...expenses.housing, [key]: e.target.value}
                    })}
                    className="mt-1"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Daily Living */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Daily Living 📅</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(expenses.daily).map(([key, value]) => (
                <div key={key}>
                  <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                  <Input
                    id={key}
                    type="number"
                    value={value}
                    onChange={(e) => setExpenses({
                      ...expenses,
                      daily: {...expenses.daily, [key]: e.target.value}
                    })}
                    className="mt-1"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Savings */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Savings Goals 🎯</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(expenses.savings).map(([key, value]) => (
                <div key={key}>
                  <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                  <Input
                    id={key}
                    type="number"
                    value={value}
                    onChange={(e) => setExpenses({
                      ...expenses,
                      savings: {...expenses.savings, [key]: e.target.value}
                    })}
                    className="mt-1"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Lifestyle */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-purple-700 mb-4">Lifestyle & Fun 🌟</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(expenses.lifestyle).map(([key, value]) => (
                <div key={key}>
                  <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                  <Input
                    id={key}
                    type="number"
                    value={value}
                    onChange={(e) => setExpenses({
                      ...expenses,
                      lifestyle: {...expenses.lifestyle, [key]: e.target.value}
                    })}
                    className="mt-1"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <Card className="bg-purple-50">
            <CardContent className="pt-6">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-bold">Total Monthly Income:</span>
                  <span className="text-green-600">£{totalIncome.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Total Monthly Expenses:</span>
                  <span className="text-red-600">£{totalExpenses.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pt-2 border-t">
                  <span className="font-bold">Remaining:</span>
                  <span className={remaining >= 0 ? "text-green-600" : "text-red-600"}>
                    £{remaining.toFixed(2)}
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      <Card className="bg-purple-50">
        <CardContent className="pt-6">
          <h3 className="text-lg font-bold text-purple-800 mb-2">💡 Savvy Annie's Tips:</h3>
          <ul className="list-disc pl-6 space-y-2 text-purple-700">
            <li>Aim to save at least 10% of your total income</li>
            <li>Try to keep housing costs under 35% of your income</li>
            <li>Build your emergency fund before lifestyle spending</li>
            <li>Review and adjust your budget monthly</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

// Landing Page Component
const BudgetLanding = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Here you would integrate with your email service
    setIsSubscribed(true);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-purple-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Simple Family Budget Template</h1>
          <p className="text-xl mb-6">Take control of your family finances with this easy-to-use budget planner 💜</p>
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center">
              <span className="text-purple-200 mr-2">✨</span>
              <span>Simple to use</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-200 mr-2">💰</span>
              <span>Family-focused</span>
            </div>
            <div className="flex items-center">
              <span className="text-purple-200 mr-2">🎯</span>
              <span>Goal-oriented</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Welcome Message */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Welcome to Your Financial Journey! 🌟</h2>
            <p className="text-purple-700 mb-4">
              I'm Annie, and I've designed this budget template specifically for families who want to take control of their finances. 
              No complicated formulas or confusing terms - just a simple, effective way to manage your money.
            </p>
            <div className="space-y-2 text-purple-700">
              <p className="flex items-center">
                <span className="mr-2">✅</span> Track income and expenses easily
              </p>
              <p className="flex items-center">
                <span className="mr-2">✅</span> Set realistic savings goals
              </p>
              <p className="flex items-center">
                <span className="mr-2">✅</span> Plan for your family's future
              </p>
              <p className="flex items-center">
                <span className="mr-2">✅</span> Get helpful budgeting tips
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Budget Template Component */}
        <div className="mb-8">
          <BudgetTemplate />
        </div>

        {/* Tips Section */}
        <Card className="mb-8 bg-purple-100">
          <CardHeader>
            <CardTitle className="text-purple-800">Getting Started Tips 💡</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-purple-700">
                <span className="font-bold">1. Start with your income:</span> Include all regular sources of money coming in.
              </p>
              <p className="text-purple-700">
                <span className="font-bold">2. List fixed expenses:</span> Begin with bills that stay the same each month.
              </p>
              <p className="text-purple-700">
                <span className="font-bold">3. Track variable spending:</span> Keep receipts for a week to understand your daily expenses.
              </p>
              <p className="text-purple-700">
                <span className="font-bold">4. Set realistic goals:</span> Start small and build up your savings over time.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Email Signup */}
        <Card className="mb-8">
          <CardContent className="pt-6">
            <h3 className="text-xl font-bold text-purple-800 mb-4">Get More Money-Saving Tips! ✉️</h3>
            {isSubscribed ? (
              <Alert className="bg-purple-100 border-purple-200">
                <AlertDescription className="text-purple-700">
                  Thanks for subscribing! Check your inbox for your welcome email. 💜
                </AlertDescription>
              </Alert>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-4">
                <div>
                  <Label htmlFor="email">Email address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-1"
                    required
                  />
                </div>
                <Button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white">
                  Sign Up for Tips
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <div className="text-sm text-purple-600">
          <p className="mb-2">💜 Sharing what worked for me in my budgeting journey.</p>
          <p>The tips and templates shared here are based on personal experience and general budgeting principles. 
          This content is for informational purposes only and should not be considered financial advice. 
          Every financial situation is unique - please consult qualified financial professionals for advice specific to your circumstances.</p>
        </div>
      </div>
    </div>
  );
};

export default BudgetLanding;