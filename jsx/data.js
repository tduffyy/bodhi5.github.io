var SiteData = module.exports = {};

SiteData.blog = require('./blog_data.js');

SiteData.navItems = ['About', 'Team', 'Services', 'Work', 'Contact', 'Blog'];

SiteData.teamMembers = [{
    name: 'Christian Sullivan',
    photo: 'cs.png',
    position: 'Founder & CEO',
    description: 'Hacker, Mad Scientist, Software Engineer, Rock Climber, Jiu Jitsu Fighter, Buddhist bum Husband and Father of three beautiful girls.'
}, {
    name: 'West Damron',
    photo: 'place_holder.jpg',
    position: 'Engineer',
    description: 'Software engineer, and some other info that needs to go here for your bio'
}, {
    name: 'Megan Sullivan',
    photo: 'meg.png',
    position: 'Operations',
    description: 'Photographer, Business manager, DIYer, Wifey, Mommy extrodinare!!'
}, {
    name: 'Thomas Duffy',
    photo: 'tduffy.jpg',
    position: 'Engineer',
    description: 'Web addict, Internet Marketer, Jiu-Jitsu enthusiast and Web Programmer!'
}];

SiteData.skills = [{
    skill: 'Web Development',
    image: 'web.png',
    description: 'Your online presence matters more than ever. Captivate your audience, boost sales, and make a lasting impression with a professional website designed and built specifically for your business and your customers. We plan, create and build beautiful websites on the latest technologies that help drive growth and improve visibility for your business.',
}, {
    skill: 'Mobile Development',
    image: 'ui.png',
    description: 'With mobile devices taking over, mobile presence is one hundred percent necessary! From prototype to deployment and beyond! Our team will guide your mobile project from idea to finished product using our proprietary blend of cutting edge technologies. Whether you need a mobile web app or a native application, we\'ve got you covered.',
}, {
    skill: 'Programming',
    image: 'program.png',
    description: 'We have built everything from basic websites, admin systems, in-vehicle fleet management systems, object detection systems, financial software, and many mobile applications.Our engineers have a diverse knowledge of poplar programming languages and the focus and efficiency to get the job done on time. We love making your dreams reality.',
}, ];

SiteData.portfolio = [{
    name: 'LittleNeuron',
    subtitle: 'Infant Visual Stimulation Mobile Application',
    description: 'Using high-contrast colors and shapes encourages faster visual development & brain growth. The movements challenge your baby to stay focused on the shape that they are most interested in.',
    image: 'ln.png',
    appstore: 'https://itunes.apple.com/us/app/littleneuron/id738219537?ls=1&mt=8',
    googleplay: ''
}, {
    name: 'SightWords',
    subtitle: 'Learn to Read Mobile Application',
    description: 'SightWords is designed to help your child learn & recognize words. With our simple word pack generator, any parent or teacher can create a word pack for your child to practice with.',
    image: 'sightwords.png',
    appstore: 'https://itunes.apple.com/us/app/ln-sightwords/id805096015?ls=1&mt=8',
    googleplay: ''
}, {
    name: 'MathFacts',
    subtitle: 'Math Training Mobile Application',
    description: 'MathFacts allows any parent or teacher to provide children with customizable math quizzes. With our pack generator, you can easily create your own set of math problems for your child to use.',
    image: 'math.png',
    appstore: 'https://itunes.apple.com/us/app/ln-mathfacts/id805085536?ls=1&mt=8',
    googleplay: ''
}, {
    name: 'AppXen',
    subtitle: 'PSD to UI Desktop Application',
    description: 'Slicing PSD\'s is a long, tedious process that cuts into precious development time. Well with AppXen, we’ve transformed that process into a simple drag and drop process, you can go from design to UI in seconds.',
    image: 'appxen.png',
    appstore: null,
    googleplay: null
}, {
    name: 'Fleet Management',
    subtitle: 'Hardware/Software',
    description: 'We developed a fleet management system for a client that allowed for real time vehicle Geolocation and diagnostic tracking and live video feeds from vehicles. Allowing for any fleet manager to always be in control.',
    image: 'fleet.jpg',
    appstore: null,
    googleplay: null
}, {
    name: 'VidyCoach',
    subtitle: 'Video Tutorials Mobile Application',
    description: 'VidyCoach is a video tutorial application connecting users with their favorite professionals. Whether it be Jiu-Jitsu training or a cooking class. Users can learn to be the next champion or make an amazing dinner for their special someone!',
    image: 'vidy.jpg',
    appstore: null,
    googleplay: null
}];

SiteData.quotes = [{
    author: 'Steven Jobs - Apple',
    text: 'Design is not just what it looks like and feels like. Design is how it works.'
}, {
    author: 'Bill Gates - Microsoft - Company',
    text: 'Your most unhappy customers are your greatest source of learning.'
}, {
    author: 'Amine Mesbah - Company X',
    text: 'Convincing me with the futility of my dreams is somehow like convincing a fish that it can fly.'
}];