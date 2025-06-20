
import { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { useJob } from '@/contexts/JobContext';
import { MapPin, Mail, Briefcase, User, Edit, Save, X } from 'lucide-react';
import { toast } from 'sonner';

const Profile = () => {
  const { user, updateUser } = useJob();
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState(user);

  const handleSave = () => {
    updateUser(editedUser);
    setIsEditing(false);
    toast.success('Profile updated successfully!');
  };

  const handleCancel = () => {
    setEditedUser(user);
    setIsEditing(false);
  };

  const addSkill = (skill: string) => {
    if (skill && !editedUser.skills.includes(skill)) {
      setEditedUser({
        ...editedUser,
        skills: [...editedUser.skills, skill]
      });
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setEditedUser({
      ...editedUser,
      skills: editedUser.skills.filter(skill => skill !== skillToRemove)
    });
  };

  const applications = [
    {
      id: 1,
      jobTitle: 'Senior Software Engineer',
      company: 'Google India',
      companyLogo: '🟢',
      appliedDate: '2024-01-15',
      status: 'Under Review',
      salary: '₹25,00,000 - ₹40,00,000'
    },
    {
      id: 2,
      jobTitle: 'Frontend Developer',
      company: 'Microsoft India',
      companyLogo: '🔵',
      appliedDate: '2024-01-12',
      status: 'Interview Scheduled',
      salary: '₹18,00,000 - ₹32,00,000'
    },
    {
      id: 3,
      jobTitle: 'Data Scientist',
      company: 'Amazon India',
      companyLogo: '🟠',
      appliedDate: '2024-01-10',
      status: 'Rejected',
      salary: '₹22,00,000 - ₹35,00,000'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Under Review':
        return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'Interview Scheduled':
        return 'bg-green-500/20 text-green-400 border-green-500/30';
      case 'Rejected':
        return 'bg-red-500/20 text-red-400 border-red-500/30';
      default:
        return 'bg-gray-500/20 text-gray-400 border-gray-500/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-jobsyte-dark via-jobsyte-darker to-jobsyte-dark">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card className="glass-effect border-white/10">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4 ring-4 ring-jobsyte-primary/20">
                  <AvatarFallback className="bg-gradient-to-r from-jobsyte-primary to-jobsyte-secondary text-white text-2xl">
                    {user.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                {isEditing ? (
                  <div className="space-y-3">
                    <Input
                      value={editedUser.name}
                      onChange={(e) => setEditedUser({ ...editedUser, name: e.target.value })}
                      className="glass-effect border-white/20 text-center"
                    />
                    <Input
                      value={editedUser.title}
                      onChange={(e) => setEditedUser({ ...editedUser, title: e.target.value })}
                      className="glass-effect border-white/20 text-center"
                    />
                  </div>
                ) : (
                  <>
                    <CardTitle className="text-2xl text-white mb-2">{user.name}</CardTitle>
                    <p className="text-jobsyte-primary font-semibold">{user.title}</p>
                  </>
                )}
              </CardHeader>
              
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-4 h-4" />
                  {isEditing ? (
                    <Input
                      value={editedUser.email}
                      onChange={(e) => setEditedUser({ ...editedUser, email: e.target.value })}
                      className="glass-effect border-white/20 flex-1"
                    />
                  ) : (
                    <span>{user.email}</span>
                  )}
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-4 h-4" />
                  {isEditing ? (
                    <Input
                      value={editedUser.location}
                      onChange={(e) => setEditedUser({ ...editedUser, location: e.target.value })}
                      className="glass-effect border-white/20 flex-1"
                    />
                  ) : (
                    <span>{user.location}</span>
                  )}
                </div>
                
                <div className="flex items-center gap-3 text-gray-300">
                  <Briefcase className="w-4 h-4" />
                  {isEditing ? (
                    <Input
                      value={editedUser.experience}
                      onChange={(e) => setEditedUser({ ...editedUser, experience: e.target.value })}
                      className="glass-effect border-white/20 flex-1"
                    />
                  ) : (
                    <span>{user.experience} experience</span>
                  )}
                </div>
                
                <div className="pt-4">
                  {isEditing ? (
                    <div className="flex gap-2">
                      <Button onClick={handleSave} className="flex-1 bg-gradient-to-r from-jobsyte-primary to-jobsyte-secondary">
                        <Save className="w-4 h-4 mr-2" />
                        Save
                      </Button>
                      <Button onClick={handleCancel} variant="outline" className="border-white/20">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={() => setIsEditing(true)} variant="outline" className="w-full border-white/20">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Skills */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Skills & Technologies
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {editedUser.skills.map(skill => (
                    <Badge key={skill} className="bg-jobsyte-primary/20 text-jobsyte-primary border-jobsyte-primary/30">
                      {skill}
                      {isEditing && (
                        <button
                          onClick={() => removeSkill(skill)}
                          className="ml-2 text-xs hover:text-red-400"
                        >
                          ×
                        </button>
                      )}
                    </Badge>
                  ))}
                </div>
                
                {isEditing && (
                  <div className="flex gap-2">
                    <Input
                      placeholder="Add new skill..."
                      className="glass-effect border-white/20"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter') {
                          addSkill(e.currentTarget.value);
                          e.currentTarget.value = '';
                        }
                      }}
                    />
                    <Button
                      onClick={() => {
                        const input = document.querySelector('input[placeholder="Add new skill..."]') as HTMLInputElement;
                        if (input?.value) {
                          addSkill(input.value);
                          input.value = '';
                        }
                      }}
                      variant="outline"
                      className="border-white/20"
                    >
                      Add
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
            
            {/* Job Applications */}
            <Card className="glass-effect border-white/10">
              <CardHeader>
                <CardTitle className="text-white">Recent Applications</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {applications.map(application => (
                    <div key={application.id} className="glass-effect border-white/10 rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center text-lg">
                            {application.companyLogo}
                          </div>
                          <div>
                            <h4 className="font-semibold text-white">{application.jobTitle}</h4>
                            <p className="text-jobsyte-primary text-sm">{application.company}</p>
                          </div>
                        </div>
                        <Badge className={getStatusColor(application.status)}>
                          {application.status}
                        </Badge>
                      </div>
                      
                      <div className="flex justify-between items-center text-sm text-gray-300">
                        <span>Applied on {new Date(application.appliedDate).toLocaleDateString()}</span>
                        <span className="text-jobsyte-accent font-semibold">{application.salary}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
