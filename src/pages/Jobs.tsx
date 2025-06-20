
import { useState } from 'react';
import Header from '@/components/Header';
import JobCard from '@/components/JobCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useJob } from '@/contexts/JobContext';
import { Search, Filter, MapPin, Briefcase, DollarSign } from 'lucide-react';
import { toast } from 'sonner';

const Jobs = () => {
  const { jobs } = useJob();
  const [searchQuery, setSearchQuery] = useState('');
  const [locationFilter, setLocationFilter] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');
  const [companyFilter, setCompanyFilter] = useState('');

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.requirements.some(req => req.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesLocation = locationFilter === '' || job.location.includes(locationFilter);
    const matchesExperience = experienceFilter === '' || job.experience === experienceFilter;
    const matchesCompany = companyFilter === '' || job.company === companyFilter;

    return matchesSearch && matchesLocation && matchesExperience && matchesCompany;
  });

  const locations = [...new Set(jobs.map(job => job.location.split(',')[0]))];
  const experiences = [...new Set(jobs.map(job => job.experience))];
  const companies = [...new Set(jobs.map(job => job.company))];

  const handleApply = (jobId: string) => {
    toast.success('Application submitted successfully!', {
      description: 'We will review your application and get back to you soon.',
    });
  };

  const clearFilters = () => {
    setSearchQuery('');
    setLocationFilter('');
    setExperienceFilter('');
    setCompanyFilter('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-jobsyte-dark via-jobsyte-darker to-jobsyte-dark">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Discover Your Next Opportunity
          </h1>
          <p className="text-gray-300 text-lg">
            {filteredJobs.length} jobs available in India's top tech companies
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <Card className="glass-effect border-white/10 sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <Filter className="w-5 h-5" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block">
                    Search Jobs
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      type="text"
                      placeholder="Job title, company, skills..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 glass-effect border-white/20"
                    />
                  </div>
                </div>

                {/* Location Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Location
                  </label>
                  <Select value={locationFilter} onValueChange={setLocationFilter}>
                    <SelectTrigger className="glass-effect border-white/20">
                      <SelectValue placeholder="Select location" />
                    </SelectTrigger>
                    <SelectContent className="bg-jobsyte-gray border-white/20">
                      <SelectItem value="">All Locations</SelectItem>
                      {locations.map(location => (
                        <SelectItem key={location} value={location}>{location}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    Experience Level
                  </label>
                  <Select value={experienceFilter} onValueChange={setExperienceFilter}>
                    <SelectTrigger className="glass-effect border-white/20">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent className="bg-jobsyte-gray border-white/20">
                      <SelectItem value="">All Levels</SelectItem>
                      {experiences.map(exp => (
                        <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Company Filter */}
                <div>
                  <label className="text-sm font-medium text-gray-300 mb-2 block flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Company
                  </label>
                  <Select value={companyFilter} onValueChange={setCompanyFilter}>
                    <SelectTrigger className="glass-effect border-white/20">
                      <SelectValue placeholder="Select company" />
                    </SelectTrigger>
                    <SelectContent className="bg-jobsyte-gray border-white/20">
                      <SelectItem value="">All Companies</SelectItem>
                      {companies.map(company => (
                        <SelectItem key={company} value={company}>{company}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  variant="outline" 
                  onClick={clearFilters}
                  className="w-full border-white/20 hover:bg-white/5"
                >
                  Clear All Filters
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Jobs List */}
          <div className="flex-1">
            {filteredJobs.length > 0 ? (
              <div className="space-y-6">
                {filteredJobs.map((job, index) => (
                  <div key={job.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                    <JobCard job={job} onApply={handleApply} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">No jobs found</h3>
                <p className="text-gray-400 mb-4">
                  Try adjusting your search criteria or filters
                </p>
                <Button onClick={clearFilters} variant="outline" className="border-white/20">
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
