import "./Skills.css";
import htmllogo from './html5logo.webp'
import csslogo from './csslogo.png'
import TechStack from "../TechStack/TechStack";
import reactIcon from './react-icon.png'
import ioniclogo from './ionic.png'

function Skills() {

  const techs = [
    {techname: "HTML5", techSrc: htmllogo},
    {techname: "CSS", techSrc: csslogo},
    {techname: "React", techSrc: reactIcon},
    {techname: "Ionic", techSrc: ioniclogo}
  ]

  const backendTechs = [
    {techname: "Javascript", techSrc: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"},
    {techname: "Typescript", techSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"},
    {techname: "Node.js", techSrc: "https://miro.medium.com/v2/resize:fit:800/1*v2vdfKqD4MtmTSgNP0o5cg.png"},
    {techname: "Express.js", techSrc: "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/20/express-js.png"},
    {techname: "Python", techSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/640px-Python.svg.png"},

  ]

  const dataTechs = [
    {techname: "Firebase", techSrc: "https://appsec-labs.com/portal/wp-content/uploads/2020/12/touchicon-180.png"},
    {techname: "PostgreSQL", techSrc: "https://cdn.iconscout.com/icon/free/png-256/free-postgresql-8-1175119.png?f=webp"},
    {techname: "MySQL", techSrc: "https://cdn-icons-png.flaticon.com/512/528/528260.png"},
    {techname: "Oracle", techSrc: "https://5.imimg.com/data5/SELLER/Default/2022/7/FT/WW/IM/7756102/oracle-database-enterprise-edition-license-1-processor-500x500.png"},
    {techname: "Neo4j", techSrc: "https://dist.neo4j.com/wp-content/uploads/20210527153924/Neo4j-icon-color.png"},

  ]

  const mobiledev = [
    {techname: "Flutter", techSrc: "https://web-strapi.mrmilu.com/uploads/flutter_logo_470e9f7491.png"},
    {techname: "Kotlin", techSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Kotlin_Icon.png/1200px-Kotlin_Icon.png"}
    ,{techname: "Compose", techSrc: "https://tabris.com/wp-content/uploads/2021/06/jetpack-compose-icon_RGB.png"}
  ]

  const testingTechs = [
    {techname: "JUnit", techSrc: "https://howtodoinjava.com/wp-content/uploads/2017/04/junit5-logo-e1493917459324.png"},
    {techname: "Cucumber", techSrc: "https://cdn.iconscout.com/icon/free/png-256/free-cucumber-130-1175236.png?f=webp"},
    {techname: "StoryBook", techSrc: "https://static-00.iconduck.com/assets.00/storybook-icon-icon-1645x2048-ir1mrc43.png"},
    ]
  
    const uixTechs = [
      {techname: "Figma", techSrc: "https://www.topitools.com/wp-content/uploads/2024/01/figma-logo-0-300x300.png"},
    ]
  
    const proyectechs = [
      {techname: "Jira", techSrc: "https://static-00.iconduck.com/assets.00/jira-icon-512x512-z7na7dot.png"},
      {techname: "Trello", techSrc: "https://cdn.worldvectorlogo.com/logos/trello.svg"},
      {techname: "SCRUM", techSrc: "https://seeklogo.com/images/S/scrum-logo-B057CBD9B8-seeklogo.com.png"},
    ]

    const moreLanguages = [
      {techname: "Java", techSrc: "https://cdn-icons-png.flaticon.com/512/226/226777.png"},
      {techname: "Dart", techSrc: "https://upload.wikimedia.org/wikipedia/commons/7/7e/Dart-logo.png"},
      {techname: "C#", techSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png"},
      {techname: "C++", techSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"}
    ]

    const extraTools = [
      {techname: "Docker", techSrc: "https://static-00.iconduck.com/assets.00/docker-icon-2048x2048-5mc7mvtn.png"},
      {techname: "AWS", techSrc: "https://static-00.iconduck.com/assets.00/aws-icon-1024x1024-xh5ti9kd.png"},
      {techname: "KNIME", techSrc: "https://forum-cdn.knime.com/uploads/default/original/1X/ab3ccf34482a0329361734a18199390177204f15.png"},
      {techname: "POSTMAN", techSrc: "https://cdn.iconscout.com/icon/free/png-256/free-postman-3521648-2945092.png?f=webp"}
      ,{techname: "Office", techSrc: "https://cdn.icon-icons.com/icons2/1826/PNG/512/4202103logomicrosoftmsofficesocialsocialmedia-115585_115716.png"}
    ]
    
  
  const frontwidth = (techs.length*230).toString()+"px";
  const backwidth = (backendTechs.length*270).toString()+"px";
  const datawidth = (backendTechs.length*230).toString()+"px";
  const mobilewidth = (mobiledev.length*230).toString()+"px";
  const testingwidth = (mobiledev.length*250).toString()+"px";
  const uixwidth = (uixTechs.length*250).toString()+"px";
  const projectwidth = (proyectechs.length*250).toString()+"px";
  const languageswidth = (moreLanguages.length*230).toString()+"px";
  const toolswidth = (extraTools.length*250).toString()+"px";

  const frontStyle = {
    width: frontwidth,
    border: "solid #ffd52e94 5px"
  }

  const backStyle = {
    width: backwidth,
    border: "solid #48b8d694 5px"
  }

  const dataStyle = {
    width: datawidth,
    border: "solid #a4e1d58a 5px"
  }

  const mobileStyle = {
    width: mobilewidth,
    border: "solid WHITE 5px"
  }

  const testingStyle = {
    width: testingwidth,
    border: "solid #dfa4e18a 5px"
  }

  const uixStyle = {
    width: uixwidth,
    border: "solid #9f14678a 5px"
  }

  const projectStyle = {
    width: projectwidth,
    border: "solid #234195b8 5px"
  }

  const languageStyle = {
    width: languageswidth,
    border: "solid white 5px"
  }

  const toolsStyle = {
    width: toolswidth,
    border: "solid white 5px"
  }
  return (
    <>
      <section className="skills-section">
      <span className="skill-welcome">&lt;My Tech Skills/&gt;</span>
      <TechStack techStackName={"Frontend"} techs={techs} style={frontStyle}/>
      <TechStack techStackName={"Backend"} techs={backendTechs} style={backStyle}/>
      <TechStack techStackName={"Database Management"} techs={dataTechs} style={dataStyle}/>
      <TechStack techStackName={"Mobile 🔜"} techs={mobiledev} style={mobileStyle}/>
      <TechStack techStackName={"Testing"} techs={testingTechs} style={testingStyle}/>
      <TechStack techStackName={"More Languages"} techs={moreLanguages} style={languageStyle}/>
      <TechStack techStackName={"UI/UX Design"} techs={uixTechs} style={uixStyle}/>
      <TechStack techStackName={"Project Management"} techs={proyectechs} style={projectStyle}/>
      <TechStack techStackName={"More development tools"} techs={extraTools} style={toolsStyle}/>
      </section>
    </>
  );
}

export default Skills;
