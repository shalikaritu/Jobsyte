
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Star, ExternalLink } from 'lucide-react';

const Companies = () => {
  const companies = [
    {
      id: 1,
      name: 'Google India',
      logo: '🟢',
      description: 'Leading technology company focused on search, cloud computing, and AI innovation in India.',
      locations: ['Bangalore', 'Hyderabad', 'Mumbai', 'Pune'],
      employees: '10,000+',
      rating: 4.5,
      openJobs: 45,
      avgSalary: '₹28,00,000',
      benefits: ['Health Insurance', 'Stock Options', 'Flexible Working', 'Learning Budget'],
      techStack: ['Python', 'Java', 'Go', 'JavaScript', 'Machine Learning']
    },
    {
      id: 2,
      name: 'Microsoft India',
      logo: '🔵',
      description: 'Global technology company developing productivity software and cloud services.',
      locations: ['Hyderabad', 'Bangalore', 'Noida', 'Mumbai'],
      employees: '8,000+',
      rating: 4.4,
      openJobs: 32,
      avgSalary: '₹25,00,000',
      benefits: ['Health Coverage', 'Retirement Plans', 'Remote Work', 'Professional Development'],
      techStack: ['C#', '.NET', 'Azure', 'TypeScript', 'Power Platform']
    },
    {
      id: 3,
      name: 'Amazon India',
      logo: '🟠',
      description: 'E-commerce and cloud computing giant with significant operations across India.',
      locations: ['Bangalore', 'Hyderabad', 'Mumbai', 'Chennai'],
      employees: '12,000+',
      rating: 4.2,
      openJobs: 67,
      avgSalary: '₹22,00,000',
      benefits: ['Medical Insurance', 'Stock Purchase Plan', 'Career Development', 'Wellness Programs'],
      techStack: ['Java', 'Python', 'AWS', 'React', 'Node.js']
    },
    {
      id: 4,
      name: 'Netflix India',
      logo: '🔴',
      description: 'Streaming entertainment service creating and distributing content globally.',
      locations: ['Mumbai', 'Bangalore'],
      employees: '500+',
      rating: 4.6,
      openJobs: 23,
      avgSalary: '₹26,00,000',
      benefits: ['Unlimited PTO', 'Health Benefits', 'Stock Options', 'Creative Freedom'],
      techStack: ['Java', 'Python', 'React', 'Microservices', 'Data Science']
    },
    {
      id: 5,
      name: 'Apple India',
      logo: '🍎',
      description: 'Technology company known for innovative consumer electronics and software.',
      locations: ['Bangalore', 'Hyderabad', 'Mumbai'],
      employees: '2,000+',
      rating: 4.7,
      openJobs: 18,
      avgSalary: '₹30,00,000',
      benefits: ['Comprehensive Health', 'Stock Purchase', 'Education Assistance', 'Wellness'],
      techStack: ['Swift', 'Objective-C', 'iOS', 'macOS', 'Machine Learning']
    },
    {
      id: 6,
      name: 'Flipkart',
      logo: '🛒',
      description: 'India\'s leading e-commerce marketplace serving millions of customers.',
      locations: ['Bangalore', 'Hyderabad', 'Delhi', 'Mumbai'],
      employees: '15,000+',
      rating: 4.1,
      openJobs: 89,
      avgSalary: '₹18,00,000',
      benefits: ['Health Insurance', 'ESOP', 'Flexible Hours', 'Learning Opportunities'],
      techStack: ['Java', 'Python', 'React', 'Microservices', 'Big Data']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-jobsyte-dark via-jobsyte-darker to-jobsyte-dark">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Top Companies in India
          </h1>
          <p className="text-gray-300 text-lg">
            Explore career opportunities at India's most innovative tech companies
          </p>
        </div>

        {/* Companies Grid */}
        <div className="grid gap-8">
          {companies.map((company, index) => (
            <Card key={company.id} className="glass-effect border-white/10 hover:border-jobsyte-primary/30 transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-3xl">
                      {company.logo}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-white mb-2">{company.name}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-gray-300">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span>{company.rating}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{company.employees} employees</span>
                        </div>
                        <div className="text-jobsyte-accent font-semibold">
                          {company.openJobs} open positions
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="bg-gradient-to-r from-jobsyte-primary to-jobsyte-secondary hover:from-jobsyte-primary/80 hover:to-jobsyte-secondary/80">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Jobs
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  {company.description}
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      Locations
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {company.locations.map(location => (
                        <Badge key={location} variant="outline" className="border-white/20 text-gray-300">
                          {location}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-white font-semibold mb-3">Average Salary</h4>
                    <div className="text-2xl font-bold text-jobsyte-accent">
                      {company.avgSalary}
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.techStack.map(tech => (
                      <Badge key={tech} className="bg-jobsyte-primary/20 text-jobsyte-primary border-jobsyte-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-white font-semibold mb-3">Benefits & Perks</h4>
                  <div className="flex flex-wrap gap-2">
                    {company.benefits.map(benefit => (
                      <Badge key={benefit} variant="outline" className="border-green-400/30 text-green-400">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
