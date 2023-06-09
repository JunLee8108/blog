import "./HomeSection.css";
import jun from "../assets/JunLee.webp";
import designer from "../assets/graphic-designer.webp";
import programmer from "../assets/programmer.webp";

function HomeSection() {
  return (
    <div>
      <div className="home-top-container">
        <div className="home-top-left">
          <img src={designer} alt="designer-icon"></img>
          <h1>Dᴇsɪɢɴᴇʀ</h1>
        </div>
        <div className="home-top-profile">
          <img src={jun} alt="jun's picture"></img>
          <h1>Jeong Hyun Lee</h1>
          <h4>Software Engineer</h4>
          <p>
            Hello! I'm a software engineer specialized in frontend and backend
            development for complex web apps. Want to see my projects? Check out
            my project portfolio and resume!
          </p>
          <button className="portfolio-button">View Portfolio</button>
          <button className="resume-button">View Resume</button>
        </div>
        <div className="home-top-right">
          <img src={programmer} alt="programmer-icon"></img>
          <h1>Dᴇᴠᴇʟᴏᴘᴇʀ</h1>
          <h3></h3>
        </div>
      </div>

      <div className="home-middle-container"></div>
    </div>
  );
}

export default HomeSection;
