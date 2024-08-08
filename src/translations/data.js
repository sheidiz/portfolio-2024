import WikiNook1 from "../assets/images/wikinook-1.png";
import WikiNook2 from "../assets/images/wikinook-2.png";
import CheLaburo1 from "../assets/images/chelaburo-1.png";
import CheLaburo2 from "../assets/images/chelaburo-2.png";

const translations = {
  en: {
    menu: {
      about: "About me",
      experience: "Experience",
      projects: "Projects"
    },
    title: "Java Full Stack Developer",
    description: [
      "Looking out for my first job as a Developer, where I can contribute with my skills and knowledge in a dynamic workplace.",
      "I enjoy facing new challenges and colaborate on projects that generate a positive impact on people's lives. I'm open to new oportunities and I'm excited in exploring how can I contribute to innovative teams."
    ],
    education: [
      {
        title: "Bootcamp - Full Stack Java Developer",
        institution: "Coding Dojo",
        description: [
          "An intensive bootcamp that provided training in frontend and backend technologies such as HTML, CSS, Java, Spring, and Java Server Pages.",
        ],
        dates: "April 2024 - August 2024"
      },
      {
        title: "Full Stack Java Developer",
        institution: "EducacionIT",
        description: [
          "Specialized course in the development of full stack applications with Java. It included the creation and development of applications with Java, JDBC, MySQL and React.",
        ],
        dates: "June 2023 - January 2024"
      },
      {
        title: "Associate Degree in Programming",
        institution: "Universidad Tecnológica Nacional",
        description: [
          "An associate degree in computer programming with focus on software programming and application development.",
        ],
        dates: "February 2018 - December 2019"
      }
    ],
    work: [
      {
        title: "Senior Marketing Automation Analyst",
        company: "Ukelele Growth Company",
        description: [
          "Worked in a team environment where we used agile methodologies.",
          "Analyzed project outcomes to identify areas for improvement and increase operational efficiency.",
          "Developed automated workflows to enhance marketing campaign performance."
        ],
        dates: "March 2020 - September 2022"
      },
      {
        title: "Email Marketing & Automation Instructor",
        instituion: "Ukelele Growth Company",
        description: [
          "Delivered workshops on email marketing and digital automation strategies.",
          "Developed educational projects and provided hands-on training sessions."
        ],
        dates: "April 2022"
      }
    ],
    projects: [
      {
        title: "CheLaburo",
        description: "Platform for hiring home services in Buenos Aires, Argentina. It allows users to publish and search for available services, connecting those who need services with local providers.",
        image1: CheLaburo1,
        image2: CheLaburo2,
        technologies: [
          "Spring",
          "Spring JPA",
          "Spring MVC",
          "JSP",
          "JSTL",
          "Tailwind",
          "CSS",
          "JavaScript",
          "Responsive Design"
        ],
        repository: "https://github.com/sheidiz/CodingDojo-Project",
        web: "",
        figma: "https://www.figma.com/design/XW6XPeNF3aNehPdoMKTGUn/CheLaburo----Coding-Dojo-Project?t=aU71xOYXfDmADk7H-0",
      },
      {
        title: "WikiNook",
        description: "My first React App of the Animal Crossing game, powered by the Nookipedia API. Features filtering, search, and pagination for enhanced user experience.",
        image1: WikiNook1,
        image2: WikiNook2,
        technologies: [
          "React",
          "Tailwind",
          "Next.js",
          "React Paginate",
          "Framer Motion",
          "Fetch Api"
        ],
        repository: "https://github.com/sheidiz/wikinook",
        web: "https://wikinook.vercel.app/",
        figma: "",
      },
    ]
  },
  es: {
    menu: {
      about: "Sobre mí",
      experience: "Experiencia",
      projects: "Proyectos"
    },
    title: "Desarrolladora Full Stack Java",
    description: [
      "En búsqueda de mi primer empleo como desarrolladora, donde pueda contribuir con mis habilidades y conocimientos en un entorno laboral dinámico.",
      "Me entusiasma enfrentarme a nuevos desafíos y colaborar en proyectos que generen un impacto positivo. Abierta a nuevas oportunidades, estoy ansiosa por explorar cómo puedo aportar valor a equipos innovadores."
    ],
    education: [
      {
        title: "Bootcamp - Java Full-Stack Developer",
        institution: "Coding Dojo",
        description: [
          "Formación intensiva en donde profundice en tecnologías frontend y backend como HTML, CSS, JavaScript Java, Spring, Spring JPA y Java Server Pages.",
        ],
        dates: "Abril 2024 - Agosto 2024"
      },
      {
        title: "Java Full-Stack Developer",
        institution: "EducacionIT",
        description: [
          "Curso especializado en el desarrollo de aplicaciones full stack con Java. Incluyó la creación desarrollo de aplicaciones con Java, JDBC, MySQL y React.",
        ],
        dates: "Junio 2023 - Enero 2024"
      },
      {
        title: "Tecnicatura Universitaria en Programación",
        institution: "Universidad Tecnológica Nacional",
        description: [
          "Carrera técnica con un enfoque en la programación de software y el desarrollo de aplicaciones web.",
        ],
        dates: "Febrero 2018 - Diciembre 2019"
      }
    ],
    work: [
      {
        title: "Analista SR de Automation Marketing",
        company: "Ukelele Growth Company",
        description: [
          "Trabajo en equipo bajo metodologías ágiles.",
          "Desarrollo de estrategias digitales para mejorar la conversión y eficiencia operativa.",
          "Planificación y ejecución de campañas de marketing."
        ],
        dates: "Marzo 2020 - Septiembre 2022"
      },
      {
        title: "Profesora de Email Marketing & Automation para Municipalidad Venado Tuerto",
        instituion: "Ukelele Growth Company",
        description: [
          "Capacitación en estrategias de marketing digital y automatización.",
          "Creación de contenido educativo y actividades prácticas."
        ],
        dates: "Abril 2022"
      }
    ],
    projects: [
      {
        title: "CheLaburo",
        description: "Plataforma para la contratación de servicios en Buenos Aires, Argentina. Permite a los usuarios publicar y buscar servicios, conectando a quienes necesitan servicios con proveedores locales.",
        image1: CheLaburo1,
        image2: CheLaburo2,
        technologies: [
          "Spring",
          "Spring JPA",
          "Spring MVC",
          "JSP",
          "JSTL",
          "Tailwind",
          "CSS",
          "JavaScript",
          "Diseño responsivo"
        ],
        repository: "https://github.com/sheidiz/CodingDojo-Project",
        web: "",
        figma: "https://www.figma.com/design/XW6XPeNF3aNehPdoMKTGUn/CheLaburo----Coding-Dojo-Project?t=aU71xOYXfDmADk7H-0",
      },
      {
        title: "WikiNook",
        description: "Mi primer aplicación en React sobre el juego Animal Crossing, utilizando la API de Nookipedia. Incluye filtros, búsqueda y paginación para mejorar la experiencia del usuario.",
        image1: WikiNook1,
        image2: WikiNook2,
        technologies: [
          "React",
          "Tailwind",
          "Next.js",
          "React Paginate",
          "Framer Motion",
          "Fetch Api"
        ],
        repository: "https://github.com/sheidiz/wikinook",
        web: "https://wikinook.vercel.app/",
        figma: "",
      },
    ]
  },
};

export default translations;