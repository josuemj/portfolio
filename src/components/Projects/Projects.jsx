import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import BlogImage from "./image.png";
import SabteImage from "./sabte.png"
import WhereappImage from './whereapp.png'

function Projects() {
  const projectsData = [
    {
      projectSrc: BlogImage,
      projectLink: "https://blogsport22397.netlify.app/",
      projectTitle: "Blog CRUD API",
      description:
        "The Sport Blog Project is an engaging web application meticulously crafted using React and Vite, aimed at providing a dynamic and interactive platform for sports blogging. This full-stack solution excels in content management, powered by a custom backend API. The frontend leverages React, a powerful JavaScript library for building user interfaces, coupled with Vite, a modern build tool that enhances the development experience with fast and efficient bundling. React Router is used for smooth navigation within the application. On the backend, the project utilizes Express, a robust framework that provides a comprehensive set of features for web and mobile applications, and MySQL, a reliable relational database system that ensures structured data storage and retrieval. Docker is employed to facilitate consistent development, testing, and deployment environments through containerization, making the project scalable and easy to set up. The combination of these cutting-edge technologies results in a seamless and responsive sports blogging platform that offers a rich user experience and efficient content management",
    },
    {
      projectSrc: SabteImage,
      projectLink: "",
      projectTitle: "SABTE Making it easier",
      description: "SABTE is a comprehensive full-stack project designed to streamline the hiring process by connecting users with employees for specific tasks, with deployment expected by the end of 2024. Utilizing advanced technologies, the backend is powered by Node.js and Express, with JavaScript enabling robust server-side operations. The frontend leverages Ionic with React, creating a responsive and interactive user interface, while TypeScript enhances code quality. For data management, SABTE employs Neo4j to handle complex user-task relationships and PostgreSQL for reliable, structured data storage. The project aims to build confidence between users, fostering a community that simplifies hiring by facilitating online connections and eliminating the need for physical contacts. Key features include user connections, community building, task management, and data insights. The development incorporates modern tools and frameworks, with Docker ensuring consistent environments across development, testing, and production stages. By revolutionizing the way tasks are outsourced and completed, SABTE promises to make the hiring process more efficient and accessible."   },
      {
        projectSrc: WhereappImage,
        projectLink: "https://github.com/josuemj/wHERE-App",
        projectTitle: "WhereApp",
        description: "WhereApp is an innovative mobile application designed to connect people nearby by encouraging them to meet through local events. The app facilitates social interactions by allowing users to chat, form groups, and access special offers. Developed for Android using Kotlin and Jetpack Compose, WhereApp ensures a seamless and modern user experience. It includes a robust verification process powered by Firebase Authentication, enhancing user security and trust. Additionally, the integration of the Google Maps API enables users to navigate to events and locations effortlessly. By leveraging these technologies, WhereApp aims to foster community and enhance social connectivity in local areas."},
    ];
  return (
    <>
      <section className="projects-section">
        <span>Projects</span>
        <p>Porjects description</p>
        {/* Mapping proyuectsData with <ProjectCard />*/}
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            projectSrc={project.projectSrc}
            projectLink={project.projectLink}
            projectTitle={project.projectTitle}
            description={project.description}
          />
        ))}
      </section>
    </>
  );
}

export default Projects;
