import React from 'react'
import './work.css'
const Experience = () => {
	return (
		<section id='work'>
			<h2>Working Experience</h2>

			<div className="container work_container">
				<div className="internship">
					<h3>Software Developer</h3>
					<div className="subtitle">
						<h4 className='company'>Savant Degrees</h4>
						<h4 className='range'>Sept 2024 - Now</h4>
					</div>
					<div className="internDetail">
						<h4 className='text-primary'>Desc</h4>
						<ul>
							<li className='text-light'>Designed, developed, and enhanced features for digital products based on detailed user requirements and assigned tickets.</li>
							<li className='text-light'>Collaborated closely with cross-functional teams to ensure seamless feature implementation, aligning with both
							client expectations and business goals.</li>
							<li className='text-light'>Performed comprehensive testing and debugging to deliver high-quality, functional, and reliable software.</li>
							<li className='text-light'>Created and maintained clear, structured documentation for code changes and updates, promoting transparency and effective project communication.</li>
						</ul>
						<small className='text-light'></small>
					</div>
				</div>
				<div className="internship">
					<h3>IT Security Intern</h3>
					<div className="subtitle">
						<h4 className='company'>BCA</h4>
						<h4 className='range'>Feb - Aug 2024</h4>
					</div>
					<div className="internDetail">
						<h4 className='text-primary'>Desc</h4>
						<ul>
							<li className='text-light'>Developed a MySQL query that consolidated data from different sources into a single report, improving data accessibility. </li>
							<li className='text-light'>Developed a load testing script with JMeter.</li>
							<li className='text-light'>Developed a stress  testing script with JMeter.</li>
							<li className='text-light'>Developed a JavaScript script to integrate new data into the database. </li>
							<li className='text-light'>Developed a shell script for deployment to minimize errors.</li>
						</ul>
						<small className='text-light'></small>
					</div>
				</div>
				<div className="internship">
					<h3>Cyber Identity Intern</h3>
					<div className='subtitle'>
						<h4 className='company'>Deloitte</h4>
						<h4 className='range'>Aug - Dec 2023</h4>
					</div>
					<div className="internDetail">
						<h4 className='text-primary'>Desc</h4>
						<ul>
							<li className='text-light'>Developed a MySQL query that consolidated data from different sources into a single report, improving data accessibility. </li>
							<li className='text-light'>Developed a load testing script with JMeter.</li>
							<li className='text-light'>Developed a stress  testing script with JMeter.</li>
							<li className='text-light'>Developed a JavaScript script to integrate new data into the database. </li>
							<li className='text-light'>Developed a shell script for deployment to minimize errors.</li>
						</ul>
						<small className='text-light'></small>
					</div>
				</div>
				

			</div>
		</section>
	)
}

export default Experience