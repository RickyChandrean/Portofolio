import React from "react";
import "./about.css";
import me from "../../Assets/fotoprofile.png";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
	return (
		<section id="about">
			<h5>Get to Know</h5>
			<h2>About Me</h2>

			<div className="container about_container">
				<div className="about_me">
					<div className="about_me-img">
						<img src={me} alt="About_image" />
					</div>
				</div>

				<div className="about_content">
					<div className="about_cards">
						<article className="about_card">
							<FaAward className="about_icon" />
							<h5>Experience</h5>
							<small>1+ Years</small>
						</article>
						<article className="about_card">
							<VscFolderLibrary className="about_icon" />
							<h5>Projects</h5>
							<small>10+ Completed</small>
						</article>
					</div>

					<p>
						IT graduate from President University, I am eager to begin my career
						in software development. I have strong expertise in web development
						technologies such as HTML, CSS, JavaScript, PHP and MySQL.
						My passion lies in building and optimizing web applications while
						continuously expanding my knowledge in web development and cyber security. I
						am enthusiastic about applying my skills in a professional
						environment, collaborating with dynamic teams, and contributing to
						innovative technology solutions.
					</p>

					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default About;
