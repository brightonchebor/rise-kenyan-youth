import React, { useState, useEffect } from 'react';
import { 
  GraduationCap, 
  Laptop, 
  Users, 
  Heart,
  ArrowRight,
  Quote,
  Play,
  MapPin,
  Calendar,
  Trophy,
  BookOpen,
  Briefcase,
  Star,
  ChevronLeft,
  ChevronRight,
  Filter,
  Search
} from 'lucide-react';
import chebor from '../assets/chebor.jpg';
import daniel from '../assets/daniel.jpg';
import edwin from '../assets/edwin.jpg';
import laureta from '../assets/laureta.jpg';
import laurian from '../assets/laurian.jpg';
import elizabeth from '../assets/elizabeth.jpg';

const SuccessStoriesPage = () => {
    const [selectedStory, setSelectedStory] = useState(null);
    const [filterProgram, setFilterProgram] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    const successStories = [
        {
            id: 1,
            name: "Nasimiyu Elizabeth",
            title: "Software Developer & University Student",
            program: "Technology Training Program",
            graduationYear: "2022",
            location: "Nairobi, Kenya",
            avatar: elizabeth,
            coverImage: elizabeth,
            currentRole: "Full-Stack Developer at TechCorp Kenya",
            
            before: {
                situation: "Struggled with basic literacy and had no access to computers",
                challenges: ["Limited educational resources", "No technical skills", "Financial constraints", "Rural background with limited opportunities"],
                quote: "I had never touched a computer before joining the program. Technology seemed like something for other people, not for someone like me from a rural village."
            },
            
            after: {
                achievements: ["Graduated with honors from Technology Training Program", "Secured internship at leading tech company", "Currently pursuing Computer Science degree", "Developed 3 mobile applications"],
                currentImpact: "Now mentors 50+ young women in tech, leads coding workshops in rural schools",
                quote: "From struggling with basic literacy to becoming a software developer - this program didn't just change my career, it transformed my entire worldview."
            },
            
            journey: [
                { year: "2021", milestone: "Enrolled in Technology Training Program", type: "education" },
                { year: "2022", milestone: "Graduated with distinction", type: "achievement" },
                { year: "2022", milestone: "Secured first internship", type: "career" },
                { year: "2023", milestone: "Hired as Junior Developer", type: "career" },
                { year: "2024", milestone: "Promoted to Full-Stack Developer", type: "career" },
                { year: "2024", milestone: "Started mentoring program", type: "community" }
            ],
            
            testimonial: "The Technology Training Program gave me more than just coding skills - it gave me confidence, a support network, and the belief that I could achieve anything. Today, I'm not just building software; I'm building bridges between technology and my community.",
            
            videoTestimonial: true,
            communityImpact: "Founded 'Code Queens' - a program that has trained 200+ girls in basic programming",
            skills: ["JavaScript", "React", "Python", "Mobile Development", "UI/UX Design"],
            awards: ["Outstanding Graduate 2022", "Young Innovator Award 2023", "Community Leader Recognition 2024"]
        },
        {
            id: 2,
            name: "Edwin Sipupu",
            title: "Mechanical Engineer & Entrepreneur",
            program: "Secondary Education Scholarship",
            graduationYear: "2021",
            location: "Eldoret, Kenya",
            avatar: edwin,
            coverImage: edwin,
            currentRole: "Mechanical Engineer & Founder of Green Energy Solutions",
            
            before: {
                situation: "Dropped out of school due to lack of fees, worked as a farm laborer",
                challenges: ["Family couldn't afford school fees", "Working in fields to support family", "Limited exposure to engineering concepts", "No role models in technical fields"],
                quote: "I was working in the fields when I should have been in a classroom. Engineering seemed like an impossible dream."
            },
            
            after: {
                achievements: ["Graduated top 5% of engineering class", "Founded successful renewable energy company", "Holds 2 patents in solar technology", "Employs 25+ people"],
                currentImpact: "His company has installed solar systems in 500+ rural homes",
                quote: "Education gave me wings, but the scholarship program gave me the runway to take off. Now I'm helping power rural communities with clean energy."
            },
            
            journey: [
                { year: "2017", milestone: "Received Secondary Scholarship", type: "education" },
                { year: "2021", milestone: "Graduated with A- in KCSE", type: "achievement" },
                { year: "2021", milestone: "Admitted to Engineering Program", type: "education" },
                { year: "2023", milestone: "Completed Industrial Attachment", type: "career" },
                { year: "2024", milestone: "Graduated with First Class Honors", type: "achievement" },
                { year: "2024", milestone: "Founded Green Energy Solutions", type: "career" }
            ],
            
            testimonial: "The scholarship didn't just pay for my education; it invested in my dreams. Today, I'm not just an engineer - I'm creating sustainable solutions for my community while providing jobs for other young people.",
            
            videoTestimonial: false,
            communityImpact: "Provides free solar installations for schools and health centers in rural areas",
            skills: ["Mechanical Engineering", "Solar Technology", "Project Management", "Business Development", "Team Leadership"],
            awards: ["Best Engineering Student 2024", "Young Entrepreneur Award", "Green Innovation Prize"]
        },
        {
            id: 3,
            name: "Daniel Murunga",
            title: "Agricultural Producer & Social Entrepreneur",
            program: "Youth Development Program",
            graduationYear: "2020",
            location: "Kakamega, Kenya",
            avatar: daniel,
            coverImage: daniel,
            currentRole: "CEO of Harvest Hope Cooperative & Agricultural Consultant",
            
            before: {
                situation: "Unemployed youth with no clear direction, dependent on family farm",
                challenges: ["Limited agricultural knowledge", "No business skills", "Lack of market access", "Traditional farming methods with low yields"],
                quote: "I was just another unemployed youth in the village, watching crops fail year after year with no idea how to make farming profitable."
            },
            
            after: {
                achievements: ["Built cooperative serving 200+ farmers", "Increased average farm yields by 300%", "Established direct market connections", "Employs 15 full-time staff"],
                currentImpact: "Transformed farming practices across 5 counties, improving food security for thousands",
                quote: "The Youth Development Program taught me that agriculture isn't just about growing food - it's about growing communities, opportunities, and hope."
            },
            
            journey: [
                { year: "2019", milestone: "Joined Youth Development Program", type: "education" },
                { year: "2020", milestone: "Completed leadership training", type: "achievement" },
                { year: "2020", milestone: "Started small cooperative", type: "career" },
                { year: "2021", milestone: "Expanded to 50 farmers", type: "career" },
                { year: "2023", milestone: "Reached 200+ farmers", type: "career" },
                { year: "2024", milestone: "Launched agricultural consultancy", type: "career" }
            ],
            
            testimonial: "This program showed me that every challenge is an opportunity in disguise. From unemployed youth to empowering hundreds of farmers - that's the power of believing in young people's potential.",
            
            videoTestimonial: true,
            communityImpact: "Improved food security for 5,000+ families through better farming practices",
            skills: ["Agricultural Science", "Cooperative Management", "Market Analysis", "Community Organizing", "Sustainable Farming"],
            awards: ["Rural Innovator Award 2023", "Community Impact Leader", "Sustainable Agriculture Champion"]
        },
        {
            id: 4,
            name: "Laureta Nekesa",
            title: "Education Technology Specialist & University Student",
            program: "Youth Development Program",
            graduationYear: "2022",
            location: "Bungoma, Kenya",
            avatar: laureta,
            coverImage: laureta,
            currentRole: "EdTech Coordinator & Education Studies Student",
            
            before: {
                situation: "Bright student from rural area with limited access to quality education resources",
                challenges: ["Overcrowded classrooms", "Limited learning materials", "No exposure to technology in education", "Gender barriers in STEM"],
                quote: "In our school, we had one computer for 300 students. I dreamed of a classroom where every child could access quality education through technology."
            },
            
            after: {
                achievements: ["Integrated tech in 15 rural schools", "Trained 100+ teachers in digital tools", "Developed educational apps for local languages", "Pursuing Education degree on full scholarship"],
                currentImpact: "Her innovations have improved learning outcomes for 3,000+ students",
                quote: "Now I integrate tech projects into high school classrooms, sparking curiosity in 200+ students each year. Technology has become a bridge to better education."
            },
            
            journey: [
                { year: "2021", milestone: "Joined Youth Development Program", type: "education" },
                { year: "2022", milestone: "Completed digital literacy certification", type: "achievement" },
                { year: "2022", milestone: "Started school tech program", type: "career" },
                { year: "2023", milestone: "Expanded to 10 schools", type: "career" },
                { year: "2024", milestone: "Launched teacher training initiative", type: "career" },
                { year: "2024", milestone: "Awarded education scholarship", type: "achievement" }
            ],
            
            testimonial: "The program taught me that education is not just about what you learn, but how you share that knowledge to lift others. Every student I reach is a multiplier of positive change.",
            
            videoTestimonial: false,
            communityImpact: "Established 'Digital Classrooms Initiative' reaching 15 rural schools",
            skills: ["Educational Technology", "Curriculum Development", "Teacher Training", "App Development", "Project Coordination"],
            awards: ["Educational Innovation Award", "Youth Leader in STEM", "Digital Inclusion Champion"]
        },
        {
            id: 5,
            name: "Brighton Chebor",
            title: "Open Source Developer & University Student",
            program: "Technology Training Program",
            graduationYear: "2022",
            location: "Kericho, Kenya",
            avatar: chebor,
            coverImage: chebor,
            currentRole: "Open Source Contributor & Computer Science Student",
            
            before: {
                situation: "Self-taught HTML on an old laptop, no formal programming education",
                challenges: ["No access to quality tech education", "Outdated equipment", "Limited internet connectivity", "No programming mentors"],
                quote: "I was teaching myself HTML on an old laptop with intermittent internet. The world of professional software development felt completely out of reach."
            },
            
            after: {
                achievements: ["Contributes to major open-source projects", "Code used by developers worldwide", "Mentors 100+ young programmers", "Full scholarship to top university"],
                currentImpact: "His open-source contributions are used by thousands of developers globally",
                quote: "From teaching myself HTML on an old laptop to contributing to open-source projects used worldwide - the program gave me the structure and community I needed to excel."
            },
            
            journey: [
                { year: "2021", milestone: "Enrolled in Technology Training", type: "education" },
                { year: "2022", milestone: "First open-source contribution", type: "achievement" },
                { year: "2022", milestone: "Graduated with honors", type: "achievement" },
                { year: "2023", milestone: "Became project maintainer", type: "career" },
                { year: "2024", milestone: "Started coding bootcamp", type: "community" },
                { year: "2024", milestone: "University scholarship recipient", type: "education" }
            ],
            
            testimonial: "Open source taught me that coding isn't just about solving problems - it's about building solutions that can help people everywhere. The program connected me to this global community.",
            
            videoTestimonial: true,
            communityImpact: "Founded 'Code for Kenya' meetup, bringing together 500+ developers monthly",
            skills: ["JavaScript", "Python", "Open Source Development", "Community Building", "Technical Writing"],
            awards: ["Open Source Contributor Award", "GitHub Star", "Tech Community Leader"]
        },
        {
            id: 6,
            name: "Laurian Wekesa",
            title: "EdTech Innovator & University Student",
            program: "Technology Training Program",
            graduationYear: "2022",
            location: "Busia, Kenya",
            avatar: laurian,
            coverImage: laurian,
            currentRole: "EdTech Developer & Computer Science Student",
            
            before: {
                situation: "Learned basic programming on XO laptop, no formal tech education",
                challenges: ["Limited educational resources", "Basic hardware", "No structured learning path", "Rural location with few opportunities"],
                quote: "I started learning Scratch on an XO laptop. Programming felt like magic, but I had no idea how to turn that curiosity into a career."
            },
            
            after: {
                achievements: ["Developed educational games for children", "Founded coding club for kids", "University scholarship recipient", "Published educational research"],
                currentImpact: "His educational tools are used in 20+ schools, inspiring hundreds of children to learn programming",
                quote: "From learning Scratch on an XO laptop to inspiring children to learn tech - I've come full circle, and now I'm paying it forward."
            },
            
            journey: [
                { year: "2021", milestone: "Joined Technology Training Program", type: "education" },
                { year: "2022", milestone: "Developed first educational game", type: "achievement" },
                { year: "2022", milestone: "Program graduation", type: "achievement" },
                { year: "2023", milestone: "Founded Kids Code Club", type: "community" },
                { year: "2024", milestone: "University admission", type: "education" },
                { year: "2024", milestone: "Educational research publication", type: "achievement" }
            ],
            
            testimonial: "The program taught me that technology is most powerful when it serves education. Every child I teach programming to could be the next innovator who changes the world.",
            
            videoTestimonial: false,
            communityImpact: "Established coding programs in 10 primary schools, teaching 500+ children basic programming",
            skills: ["Educational Game Development", "Scratch Programming", "Child Psychology", "Curriculum Design", "Research"],
            awards: ["Educational Innovation Prize", "Young Researcher Award", "Community Impact Recognition"]
        },
    ];

    const programs = [
        { id: 'all', name: 'All Programs', count: successStories.length },
        { id: 'Technology Training Program', name: 'Technology Training', count: successStories.filter(s => s.program === 'Technology Training Program').length },
        { id: 'Secondary Education Scholarship', name: 'Secondary Scholarships', count: successStories.filter(s => s.program === 'Secondary Education Scholarship').length },
        { id: 'Youth Development Program', name: 'Youth Development', count: successStories.filter(s => s.program === 'Youth Development Program').length },
        { id: 'Primary Education Support', name: 'Primary Education', count: successStories.filter(s => s.program === 'Primary Education Support').length }
    ];

    const videoTestimonials = successStories.filter(story => story.videoTestimonial);

    const filteredStories = successStories.filter(story => {
        const matchesProgram = filterProgram === 'all' || story.program === filterProgram;
        const matchesSearch = story.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                             story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             story.currentRole.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesProgram && matchesSearch;
    });

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % videoTestimonials.length);
        }, 8000);
        return () => clearInterval(interval);
    }, []);


    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-blue-600 text-white py-12">
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    Success Stories
                </h1>
                <p className="text-lg md:text-xl mb-6 max-w-2xl mx-auto opacity-90">
                    Real transformations. Real impact. Real hope.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold">2,500+</div>
                        <div className="text-xs md:text-sm opacity-80">Lives Transformed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold">95%</div>
                        <div className="text-xs md:text-sm opacity-80">Success Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold">10,000+</div>
                        <div className="text-xs md:text-sm opacity-80">Community Impact</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold">50+</div>
                        <div className="text-xs md:text-sm opacity-80">Counties Reached</div>
                    </div>
                </div>
            </div>
            </div>            

            {/* Success Stories Grid */}
            <div className="py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredStories.map((story) => (
                            <div key={story.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                                {/* Story Card Header */}
                                <div className="relative h-48">
                                    <img 
                                        src={story.avatar} 
                                        alt={story.name}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                                    <div className="absolute bottom-4 left-4 right-4 text-white">
                                        <h3 className="font-bold text-lg">{story.name}</h3>
                                        <p className="text-sm opacity-90">{story.title}</p>
                                    </div>
                                    {story.videoTestimonial && (
                                        <div className="absolute top-4 right-4">
                                            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center">
                                                <Play className="w-3 h-3 mr-1" />
                                                Video
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Story Card Content */}
                                <div className="p-6">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                                            {story.program}
                                        </span>
                                        <span className="text-gray-500 text-sm">Alumni {story.graduationYear}</span>
                                    </div>

                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {story.after.quote}
                                    </p>

                                    <div className="space-y-3 mb-6">
                                        <div className="flex items-center text-sm text-gray-600">
                                            <MapPin className="w-4 h-4 mr-2 text-gray-400" />
                                            {story.location}
                                        </div>
                                        <div className="flex items-center text-sm text-gray-600">
                                            <Briefcase className="w-4 h-4 mr-2 text-gray-400" />
                                            {story.currentRole}
                                        </div>
                                    </div>

                                    {/* Key Achievements */}
                                    <div className="mb-6">
                                        <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Achievements:</h4>
                                        <ul className="space-y-1">
                                            {story.after.achievements.slice(0, 2).map((achievement, index) => (
                                                <li key={index} className="text-xs text-gray-600 flex items-start">
                                                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                                                    {achievement}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* Community Impact */}
                                    <div className="bg-green-50 rounded-lg p-3 mb-4">
                                        <div className="flex items-center mb-1">
                                            <Heart className="w-4 h-4 text-green-600 mr-1" />
                                            <span className="text-xs font-medium text-green-800">Community Impact</span>
                                        </div>
                                        <p className="text-xs text-green-700">{story.communityImpact}</p>
                                    </div>

                                    <button 
                                        onClick={() => setSelectedStory(story)}
                                        className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
                                    >
                                        Read Full Story
                                        <ArrowRight className="ml-2 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredStories.length === 0 && (
                        <div className="text-center py-12">
                            <div className="text-gray-400 mb-4">
                                <Users className="w-16 h-16 mx-auto" />
                            </div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">No stories found</h3>
                            <p className="text-gray-600">Try adjusting your filters or search terms.</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Call to Action */}
            <div className="mt-16 text-center">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Transform Lives?
                    </h3>
                    <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                        Whether you're looking to apply for a program or support our mission, 
                        we're here to help you make a difference in the lives of Kenyan youth.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center">
                            <Heart className="mr-2 h-5 w-5" />
                            Donate Now
                        </button>
                        
                    </div>
                </div>
            </div>            

        </div>
    );
}

export default SuccessStoriesPage;