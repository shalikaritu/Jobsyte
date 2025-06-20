
import React, { createContext, useContext, useState, ReactNode } from 'react';

export interface Job {
  id: string;
  title: string;
  company: string;
  companyLogo: string;
  location: string;
  salary: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
  applications: number;
}

export interface User {
  name: string;
  email: string;
  avatar: string;
  title: string;
  location: string;
  experience: string;
  skills: string[];
}

interface JobContextType {
  jobs: Job[];
  user: User;
  addJob: (job: Omit<Job, 'id'>) => void;
  updateJob: (id: string, job: Partial<Job>) => void;
  deleteJob: (id: string) => void;
  updateUser: (user: Partial<User>) => void;
}

const JobContext = createContext<JobContextType | undefined>(undefined);

const initialJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Software Engineer',
    company: 'Google India',
    companyLogo: '🟢',
    location: 'Bangalore, Karnataka',
    salary: '₹25,00,000 - ₹40,00,000',
    type: 'Full-time',
    experience: '4-6 years',
    description: 'Join Google India team to build next-generation products that impact billions of users worldwide.',
    requirements: ['React', 'Node.js', 'Python', 'System Design', 'Cloud Computing'],
    posted: '2 days ago',
    applications: 145
  },
  {
    id: '2',
    title: 'Frontend Developer',
    company: 'Microsoft India',
    companyLogo: '🔵',
    location: 'Hyderabad, Telangana',
    salary: '₹18,00,000 - ₹32,00,000',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Build amazing user experiences for Microsoft products used by millions in India.',
    requirements: ['React', 'TypeScript', 'Azure', 'JavaScript', 'CSS'],
    posted: '1 day ago',
    applications: 89
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'Amazon India',
    companyLogo: '🟠',
    location: 'Mumbai, Maharashtra',
    salary: '₹22,00,000 - ₹35,00,000',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Analyze large datasets to drive business decisions and improve customer experience.',
    requirements: ['Python', 'Machine Learning', 'SQL', 'AWS', 'Statistics'],
    posted: '3 days ago',
    applications: 234
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'Netflix India',
    companyLogo: '🔴',
    location: 'Mumbai, Maharashtra',
    salary: '₹20,00,000 - ₹30,00,000',
    type: 'Full-time',
    experience: '3-5 years',
    description: 'Maintain and scale Netflix infrastructure to serve millions of Indian viewers.',
    requirements: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Linux'],
    posted: '4 days ago',
    applications: 156
  },
  {
    id: '5',
    title: 'iOS Developer',
    company: 'Apple India',
    companyLogo: '🍎',
    location: 'Bangalore, Karnataka',
    salary: '₹24,00,000 - ₹38,00,000',
    type: 'Full-time',
    experience: '4-7 years',
    description: 'Develop innovative iOS applications for Apple products in the Indian market.',
    requirements: ['Swift', 'iOS SDK', 'Xcode', 'Core Data', 'UI/UX'],
    posted: '5 days ago',
    applications: 198
  },
  {
    id: '6',
    title: 'Backend Engineer',
    company: 'Flipkart',
    companyLogo: '🛒',
    location: 'Bangalore, Karnataka',
    salary: '₹16,00,000 - ₹28,00,000',
    type: 'Full-time',
    experience: '2-4 years',
    description: 'Build scalable backend systems for India\'s leading e-commerce platform.',
    requirements: ['Java', 'Spring Boot', 'Microservices', 'MySQL', 'Redis'],
    posted: '1 week ago',
    applications: 267
  }
];

const initialUser: User = {
  name: 'Shalika Ritu',
  email: 'ritushalika@gmail.com',
  avatar: '👩‍💻',
  title: 'Full Stack Developer',
  location: 'Bangalore, Karnataka',
  experience: '3 years',
  skills: ['React', 'Node.js', 'Python', 'MongoDB', 'AWS', 'TypeScript']
};

export function JobProvider({ children }: { children: ReactNode }) {
  const [jobs, setJobs] = useState<Job[]>(initialJobs);
  const [user, setUser] = useState<User>(initialUser);

  const addJob = (job: Omit<Job, 'id'>) => {
    const newJob = {
      ...job,
      id: Date.now().toString(),
    };
    setJobs(prev => [newJob, ...prev]);
  };

  const updateJob = (id: string, updatedJob: Partial<Job>) => {
    setJobs(prev => prev.map(job => 
      job.id === id ? { ...job, ...updatedJob } : job
    ));
  };

  const deleteJob = (id: string) => {
    setJobs(prev => prev.filter(job => job.id !== id));
  };

  const updateUser = (updatedUser: Partial<User>) => {
    setUser(prev => ({ ...prev, ...updatedUser }));
  };

  return (
    <JobContext.Provider value={{
      jobs,
      user,
      addJob,
      updateJob,
      deleteJob,
      updateUser
    }}>
      {children}
    </JobContext.Provider>
  );
}

export function useJob() {
  const context = useContext(JobContext);
  if (context === undefined) {
    throw new Error('useJob must be used within a JobProvider');
  }
  return context;
}
