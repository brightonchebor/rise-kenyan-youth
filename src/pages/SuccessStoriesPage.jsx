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
            title: "Aspiring Science Teacher & Environmental Advocate",
            location: "Kilifi, Kenya",
            avatar: elizabeth,
            coverImage: elizabeth,
            currentRole: "B.Ed. (Science) Student at Pwani University",

            before: {
                situation: "Struggled to stay in school—often hungry, barefoot, without fees or learning materials",
                challenges: [
                    "Frequent hunger and lack of meals",
                    "Worn-out uniform and walking to school barefoot",
                    "Unpaid fees leading to missed school days",
                    "No access to digital tools or learning resources"
                ],
                quote: "Many mornings I walked barefoot to class, clutching only a dream of education."
            },

            after: {
                achievements: [
                    "Earned a fully funded scholarship to Chwele Girls High School (2019)",
                    "Served as School President and scored B plain in KCSE",
                    "Enrolled in Bachelor’s Degree in Education (Science) at Pwani University (2023)",
                    "Joined and leads initiatives in the university’s Environmental Club"
                ],
                currentImpact: "Mentors younger students in digital literacy and leads sustainability projects in rural schools",
                quote: "That scholarship was more than financial aid—it was hope in action that transformed my life."
            },

            journey: [
                { year: "2016", milestone: "Completed primary school at Kibeu Primary School", type: "education" },
                { year: "2019", milestone: "Awarded full scholarship to Chwele Girls High School", type: "education" },
                { year: "2022", milestone: "Elected School President; scored B plain in KCSE", type: "leadership" },
                { year: "2023", milestone: "Matriculated at Pwani University for B.Ed. (Science)", type: "education" },
                { year: "2024", milestone: "Joined Environmental Club; began community sustainability projects", type: "community" }
            ],

            testimonial: "From walking barefoot and lacking books to leading school and university projects—this support rekindled my confidence and reshaped my future.",
            communityImpact: "Co-founded the ‘Green Roots’ initiative: tree-planting and eco-education workshops reaching 150+ students",
            skills: ["Digital Literacy", "Leadership", "Project Planning", "Environmental Advocacy", "Peer Mentorship"],
            awards: ["Rise Kenyan Youth Scholarship Recipient 2019", "School President Recognition 2022", "Environmental Steward Award 2024"]
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


    const filteredStories = successStories.filter(story => {
        const matchesProgram = filterProgram === 'all' || story.program === filterProgram;
        const matchesSearch = story.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            story.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            story.currentRole.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesProgram && matchesSearch;
    });


    return (
        <div className="min-h-screen relative bg-gradient-to-br from-blue-100 via-white to-blue-100 overflow-hidden py-20">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                    Success Stories
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
                    Real transformations. Real impact. Real hope.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto text-gray-600">
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold">100+</div>
                        <div className="text-xs md:text-sm opacity-80">Lives Transformed</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold">85%</div>
                        <div className="text-xs md:text-sm opacity-80">Success Rate</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold">10+</div>
                        <div className="text-xs md:text-sm opacity-80">Graduates</div>
                    </div>
                    <div className="text-center">
                        <div className="text-2xl md:text-3xl font-bold">10+</div>
                        <div className="text-xs md:text-sm opacity-80">Active Donors</div>
                    </div>
                </div>
            </div>

            {/* Success Stories Grid */}
            <div className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {filteredStories.map((story) => (
                            <div key={story.id} className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500">
                                {/* Hero Section */}
                                <div className="relative bg-gradient-to-r from-slate-50 to-white py-8 px-8">
                                    <div className="max-w-6xl mx-auto">
                                        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
                                            {/* Large Image on Left */}
                                            <div className="flex-shrink-0">
                                                <img
                                                    src={story.coverImage || story.avatar}
                                                    alt={story.name}
                                                    className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover shadow-lg border border-gray-200"
                                                />
                                            </div>

                                            {/* Content on Right */}
                                            <div className="flex-1 text-center lg:text-left">
                                                <div className="space-y-4">
                                                    <div>
                                                        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                                                            {story.name}
                                                        </h2>
                                                        <p className="text-base md:text-lg text-blue-600 font-medium mb-4">
                                                            {story.title}
                                                        </p>
                                                    </div>

                                                    <div className="flex flex-col sm:flex-row lg:flex-col gap-3 text-sm text-gray-600 justify-center lg:justify-start">
                                                        <div className="flex items-center gap-2">
                                                            <div className="p-1.5 bg-blue-100 rounded-lg">
                                                                <MapPin className="w-4 h-4 text-blue-600" />
                                                            </div>
                                                            <span className="font-medium">{story.location}</span>
                                                        </div>

                                                        <div className="flex items-center gap-2">
                                                            <div className="p-1.5 bg-blue-100 rounded-lg">
                                                                <Briefcase className="w-4 h-4 text-blue-600" />
                                                            </div>
                                                            <span className="font-medium">{story.currentRole}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Content Section */}
                                <div className="p-8">
                                    {/* Journey Overview */}
                                    <div className="grid lg:grid-cols-2 gap-8 mb-8">
                                        {/* Before Section */}
                                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                                                Before the Program
                                            </h3>
                                            <blockquote className="text-slate-700 italic mb-4 text-sm leading-relaxed">
                                                "{story.before.quote}"
                                            </blockquote>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-slate-800 text-sm mb-2">Key Challenges:</h4>
                                                {story.before.challenges.map((challenge, index) => (
                                                    <div key={index} className="flex items-start text-sm text-slate-700">
                                                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                        <span>{challenge}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* After Section */}
                                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                            <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center">
                                                After the Program
                                            </h3>
                                            <blockquote className="text-slate-700 italic mb-4 text-sm leading-relaxed">
                                                "{story.after.quote}"
                                            </blockquote>
                                            <div className="space-y-2">
                                                <h4 className="font-semibold text-slate-800 text-sm mb-2">Key Achievements:</h4>
                                                {story.after.achievements.map((achievement, index) => (
                                                    <div key={index} className="flex items-start text-sm text-slate-700">
                                                        <div className="w-2 h-2 bg-slate-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                        <span>{achievement}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Community Impact & Testimonial */}
                                    <div className="space-y-6">
                                        {/* Community Impact */}
                                        <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                                            <div className="flex items-center mb-4">
                                                <Heart className="w-6 h-6 text-blue-600 mr-3" />
                                                <h4 className="font-bold text-blue-800">Community Impact</h4>
                                            </div>
                                            <p className="text-blue-700 leading-relaxed">{story.communityImpact}</p>
                                            <div className="mt-4 text-sm text-blue-600 font-medium">
                                                Current Impact: {story.after.currentImpact}
                                            </div>
                                        </div>

                                        {/* Final Testimonial */}
                                        <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-xl p-6 border border-slate-200">
                                            <div className="flex items-start">
                                                <div className="text-4xl text-blue-400 mr-4">"</div>
                                                <div>
                                                    <blockquote className="text-slate-700 italic text-lg leading-relaxed mb-4">
                                                        {story.testimonial}
                                                    </blockquote>
                                                    <cite className="text-slate-600 font-medium">— {story.name}</cite>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {filteredStories.length === 0 && (
                        <div className="text-center py-16">
                            <div className="text-gray-400 mb-6">
                                <Users className="w-24 h-24 mx-auto" />
                            </div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">No stories found</h3>
                            <p className="text-gray-600 text-lg">Try adjusting your filters or search terms to discover more inspiring journeys.</p>
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