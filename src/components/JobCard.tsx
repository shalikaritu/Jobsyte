
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Job } from '@/contexts/JobContext';
import { MapPin, Clock, Users, Briefcase } from 'lucide-react';

interface JobCardProps {
  job: Job;
  onApply?: (jobId: string) => void;
}

const JobCard = ({ job, onApply }: JobCardProps) => {
  return (
    <Card className="glass-effect border-white/10 hover:border-jobsyte-primary/30 job-card-hover">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-2xl">
              {job.companyLogo}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white">{job.title}</h3>
              <p className="text-jobsyte-primary font-medium">{job.company}</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-jobsyte-primary/20 text-jobsyte-primary border-jobsyte-primary/30">
            {job.type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="flex flex-wrap gap-4 text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4" />
            {job.location}
          </div>
          <div className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" />
            {job.experience}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {job.posted}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {job.applications} applications
          </div>
        </div>
        
        <div className="text-xl font-bold text-jobsyte-accent">
          {job.salary}
        </div>
        
        <div className="flex flex-wrap gap-2">
          {job.requirements.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="outline" className="border-white/20 text-gray-300">
              {skill}
            </Badge>
          ))}
          {job.requirements.length > 3 && (
            <Badge variant="outline" className="border-white/20 text-gray-400">
              +{job.requirements.length - 3} more
            </Badge>
          )}
        </div>
        
        <p className="text-gray-300 text-sm line-clamp-2">
          {job.description}
        </p>
        
        <div className="flex gap-2 pt-2">
          <Button 
            onClick={() => onApply?.(job.id)}
            className="flex-1 bg-gradient-to-r from-jobsyte-primary to-jobsyte-secondary hover:from-jobsyte-primary/80 hover:to-jobsyte-secondary/80"
          >
            Apply Now
          </Button>
          <Button variant="outline" className="border-white/20 hover:bg-white/5">
            Save
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default JobCard;
