
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import JobCard from '@/components/JobCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { useJob } from '@/contexts/JobContext';
import { Search, TrendingUp, Users, Building, Briefcase } from 'lucide-react';
import { toast } from 'sonner';

const Index = () => {
  const { jobs } = useJob();
  const [searchQuery, setSearchQuery] = useState('');

  const featuredJobs = jobs.slice(0, 3);
  
  const stats = [
    { label: 'Active Jobs', value: '12,000+', icon: Briefcase, color: 'text-jobsyte-primary' },
    { label: 'Top Companies', value: '500+', icon: Building, color: 'text-jobsyte-secondary' },
    { label: 'Job Seekers', value: '1M+', icon: Users, color: 'text-jobsyte-accent' },
    { label: 'Success Rate', value: '95%', icon: TrendingUp, color: 'text-green-400' },
  ];

  const topCompanies = [
    { name: 'Google India', logo: '🟢', openings: 45 },
    { name: 'Microsoft India', logo: '🔵', openings: 32 },
    { name: 'Amazon India', logo: '🟠', openings: 67 },
    { name: 'Netflix India', logo: '🔴', openings: 23 },
    { name: 'Apple India', logo: '🍎', openings: 18 },
    { name: 'Flipkart', logo: '🛒', openings: 89 },
  ];

  const handleApply = (jobId: string) => {
    toast.success('Application submitted successfully!', {
      description: 'We will review your application and get back to you soon.',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-jobsyte-dark via-jobsyte-darker to-jobsyte-dark">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-jobsyte-primary/10 to-jobsyte-secondary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center space-y-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-white via-jobsyte-primary to-jobsyte-secondary bg-clip-text text-transparent">
                Find Your Dream
              </span>
              <br />
              <span className="bg-gradient-to-r from-jobsyte-secondary to-jobsyte-accent bg-clip-text text-transparent">
                Tech Job in India
              </span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Connect with top Indian tech companies and international giants. 
              Discover opportunities with competitive INR salaries at Google, Microsoft, Amazon, and more.
            </p>
            
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search jobs, companies, or skills..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-12 pr-4 py-4 text-lg glass-effect border-white/20 focus:border-jobsyte-primary/50"
                />
                <Button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gradient-to-r from-jobsyte-primary to-jobsyte-secondary"
                >
                  Search
                </Button>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/jobs">
                <Button size="lg" className="bg-gradient-to-r from-jobsyte-primary to-jobsyte-secondary hover:from-jobsyte-primary/80 hover:to-jobsyte-secondary/80">
                  Explore All Jobs
                </Button>
              </Link>
              <Link to="/companies">
                <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                  Browse Companies
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={stat.label} className="glass-effect border-white/10 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Jobs */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Opportunities
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Hand-picked jobs from India's most sought-after tech companies
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {featuredJobs.map((job, index) => (
              <div key={job.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <JobCard job={job} onApply={handleApply} />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/jobs">
              <Button size="lg" variant="outline" className="border-jobsyte-primary/30 text-jobsyte-primary hover:bg-jobsyte-primary/10">
                View All Jobs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Top Companies */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-jobsyte-gray/20 to-jobsyte-gray-light/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Top Companies Hiring
            </h2>
            <p className="text-gray-300 text-lg">
              Join the best tech companies in India
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {topCompanies.map((company, index) => (
              <Card key={company.name} className="glass-effect border-white/10 hover:border-jobsyte-primary/30 transition-all duration-300 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-4 text-center">
                  <div className="text-3xl mb-3">{company.logo}</div>
                  <h3 className="font-semibold text-white mb-1 text-sm">{company.name}</h3>
                  <p className="text-jobsyte-accent text-xs">{company.openings} openings</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Tech Journey?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of developers who have found their dream jobs through JobSyte. 
            Your next career move is just a click away.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/jobs">
              <Button size="lg" className="bg-gradient-to-r from-jobsyte-primary to-jobsyte-secondary hover:from-jobsyte-primary/80 hover:to-jobsyte-secondary/80">
                Start Job Search
              </Button>
            </Link>
            <Link to="/profile">
              <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/5">
                Complete Profile
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
