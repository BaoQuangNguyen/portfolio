export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-2 md:col-span-6 md:row-span-2 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-1 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development",
      description: "",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-2 md:row-span-1",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project with me? Contact me",
      description: "",
      className: "lg:col-span-1 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Minesweeper | Solo Project",
      des: "Puzzle game where the player tests their logic and deduction skills to strategically clear a grid of hidden mines!",
      img: "/p1.png",
      iconLists: ["/js.svg", "/html-5.svg", "/css.svg"],
      link: "https://github.com/BaoQuangNguyen/First-Project-Minesweeper",
    },
    {
      id: 2,
      title: "Workout Planner | Solo Project",
      des: "The web app empowering fitness enthusiasts by allowing them to create personalized workout regiments.",
      img: "/p2.png",
      iconLists: ["/js.svg", "/css.svg", "/bootstrap.svg", "/node-js.svg", "/mongo.svg", "/ejs.svg"],
      link: "https://github.com/BaoQuangNguyen/Second-Project-Workout-Planner",
    },
    {
      id: 3,
      title: "BAMN Coffee Shops | Group Project",
      des: "Users want great coffee and blog about it. So share your experience with fellow coffeeholics!",
      img: "/p3.png",
      iconLists: ["/js.svg", "/re.svg", "/node-js.svg", "/html-5.svg", "/css.svg", "/bootstrap.svg", "/mongo.svg"],
      link: "https://github.com/MichaelDang33/BAMN-coffee-shops",
    },
    {
      id: 4,
      title: "GameCease | Group Project",
      des: "Your one-stop website for community-sourced game recommendations and in-stock purchases.",
      img: "/p4.png",
      iconLists: ["/python.svg", "/django.svg", "/bootstrap.svg", "/js.svg", "/html-5.svg", "/css.svg"],
      link: "https://github.com/teyotobias/GameCease",
    },
  ];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Noor Dibou",
      title: "Web Developer @ NCCHE",
      imgUrl: "/python.svg"
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Keesun Baik",
      title: "Senior Software Development Engineer at Microsoft",
      imgUrl: "/next.svg"
    },
    {
      quote:
        "I've known Bao for quite some time now. He mentioned that he would be attending a Software Engineering boot camp, and during this period... I would serve as his mentor. Bao is truly a fighter - he went from not knowing anything about coding to becoming a full stack developer. His success is due to his study/work ethic. He constantly studied, worked through problems, and asked me many questions to help his understanding. Based on his dedication and eagerness, I would highly recommend him for your team.",
      name: "Thomas Yee",
      title: "Programmer Analyst @ SaskTel",
      imgUrl: "/thomas.png",
    },
  ];
  
  export const technologies = [
    {
      id: 1,
      name: "python",
      img: "/python.svg",
      nameImg: "/python-text.svg",
    },
    {
      id: 2,
      name: "django",
      img: "/django.svg",
      nameImg: "/django-text.svg",
    },
    {
      id: 3,
      name: "next.js",
      img: "/next.svg",
      nameImg: "/next-js-text.svg",
    },
    {
      id: 4,
      name: "react",
      img: "/re.svg",
      nameImg: "/react-text.svg",
    },
    {
      id: 5,
      name: "javascript.",
      img: "/js.svg",
      nameImg: "/js-text.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: " General Assembly Software Engineering Immersive Fellow",
      desc: "Successfully completed 450+ hours of expert-led instruction in JavaScript, Python, React, Express.js Django, Node.js, MongoDB, Postgresql, CSS and hands-on learning of full stack software development in the industry's most in demand technologies.",
      className: "md:col-span-2",
      thumbnail: "/GA.svg",
    },
    {
      id: 2,
      title: "12+ Years of Customer Service Related Experience",
      desc: "With over 12 years of diverse customer service experience, I have developed strong problem-solving and communication skills. I specialize in simplifying complex problems and finding efficient solutions. Throughout my career, I have worked with teams from different parts of the world, fostering an open-minded approach to tackling challenges.",
      className: "md:col-span-2",
      thumbnail: "/handshake.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
    {
      id: 3,
      img: "/link.svg",
    },
  ];