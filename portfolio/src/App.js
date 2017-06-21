import React, { Component } from 'react';
import './App.css';
import { Grid, Row, Col, Panel, Table, Image } from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <Row>
            <Col xsHidden smHidden md={1} lg={2} />
            <Col xs={12} sm={12} md={10} lg={8}>
                <Panel>
                  <h1>Kyle Romero</h1>
                  <p>Senior Software Developer with 10 years experience living in Houston, TX.</p>
                </Panel>
                <Panel>
                <div className="App-body">
                  <Panel collapsible defaultExpanded header="Technical Skills">
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            Languages
                            </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="Table-Body">
                          <td>
                            <strong>.NET</strong>
                          </td>
                          <td>
                            C#,
                            VB.NET,
                            ASP.NET
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Javascript</strong>
                          </td>
                          <td>
                            Typescript,
                            ES5,
                            ES2015
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Database</strong>
                          </td>
                          <td>
                            MSSQL
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Scripting</strong>
                          </td>
                          <td>
                            Bash, Powershell (Novice)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Former Proficiencies</strong>
                            </td>
                          <td>
                            Java,
                            C (Microcontroller),
                            C++,
                            Matlab,
                            Verilog / VHDL,
                            Perl
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong>Frameworks / Libraries</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Microsoft</strong>
                            </td>
                          <td>
                            .NET 4.5, .NET 3.5, .NET 2.0
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>API</strong>
                            </td>
                          <td>
                            ASP.NET MVC WebAPI
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Javascript</strong>
                            </td>
                          <td>
                            React,
                            React-Router,
                            Redux,
                            Redux-Thunk,
                            Webpack,
                            Babel,
                            SuperAgent,
                            SCSS,
                            Bootstrap,
                            JQuery
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table bordered >
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong>Development Tools</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Source Control</strong>
                            </td>
                          <td>
                            GIT (Bitbucket, GitKraken / Bash), TFS, SVN (TortoiseSVN)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>IDE</strong>
                            </td>
                          <td>
                            Visual Studio 2015, Visual Studio Code, SSMS
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Deployment</strong>
                            </td>
                          <td>
                            TeamCity
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>PM (Agile Scrum)</strong>
                            </td>
                          <td>
                            JIRA, Trello, TFS
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>OS</strong>
                            </td>
                          <td>
                            Windows 10/8.1/7, Linux (Ubuntu), MacOS Sierra
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Web Hosting</strong>
                            </td>
                          <td>
                            IIS, Node + NPM / YARN + Express + PM2, NGINX Reverse Proxy
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Containerization</strong>
                            </td>
                          <td>
                            Docker (Novice)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Cloud</strong>
                            </td>
                          <td>
                            Digital Ocean
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Panel>
                  <Panel collapsible defaultExpanded header="Work Experience">
                      <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong><a className="whiteanchor" href="https://wwmach.com/">Worldwide Machinery</a></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Title</strong>
                            </td>
                          <td>
                            Senior Software Developer
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dates</strong>
                            </td>
                          <td>
                            4/2016 to Current
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Description</strong>
                            </td>
                          <td>
                            <ul>
                              <li>Manage project workflow using Agile Scrum methodology</li>
                              <li>Manage junior developers' workloads</li>
                              <li>Develop modern ASP.NET MVC WebAPI</li>
                              <li>Develop modern Mobile-first Web Application using React, Redux, Typescript (ES6), Node.js + Express + NPM, Babel, Webpack, and SASS</li>
                              <li>Maintain legacy ERP application using .NET Winforms (C#, MS SQL)</li>
                              <li>Implement and Maintain Project and DevOps Processes using: JIRA, Bitbucket (GIT), TeamCity, Trello, Slack, Lucidcharts</li>
                              <li>Proactively identify process improvements, as well as project opportunities</li>
                              <li>Maintain / Troubleshoot hardware infrastructure as needed (Windows / Ubuntu Servers)</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong><a className="whiteanchor" href="http://www.hp.com/country/us/en/welcome.html">HP Inc.</a></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Titles</strong>
                            </td>
                          <td>
                            Technical Lead (IT Developer / Engineer III)<br/>
                            Mid-level Developer (IT Developer / Engineer II)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dates</strong>
                            </td>
                          <td>
                            12/2011 to 2/2016<br />
                             (Technical Lead: 2014 to 2016)<br />
                             (Developer: 2011 to 2014)
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Description</strong>
                          </td>
                          <td>
                            <strong>Technical Lead</strong><br />
                            <ul>
                              <li>Led development team working on enterprise level product quality / escalation management tool.</li>
                              <li>Helped manage both onshore and offshore, full time and contingent developers.</li>
                              <li>Helped to define and improve processes used on project, including development of a customized disciplined agile methodology and setting project timelines.</li>
                              <li>Administered Team Foundation Server (source and requirements).</li>
                              <li>Managed Quality control and workloads for developers on project.</li>
                              <li>Managed release process for tool.</li>
                              <li>Worked with business to define requirements and develop architecture for project.</li>
                              <li>Familiar with all aspects of project, from both technical and business standpoints.</li>
                              <li>While working on .NET Applications, received exposure to Big Data technologies, such as Hadoop and HP Vertica, as well as Dashboarding Technologies, such as Qlikview and Tableau.</li>
                              <li>During the year 2015, led team to successfully complete clone of our systems to be used on both sides of HP after the company split into two.</li>
                            </ul>
                            <hr/>
                            <strong>Mid-level Developer</strong><br />
                            <ul>
                              <li>Worked on ASP.NET Web applications incorporating a 3-Tier approach.</li>
                              <li>Did work on all three tiers (MS SQL Database, VB.NET Middle tier object libraries, and ASP.NET + jQueryUI frontend).</li>
                              <li>Project was managed using Agile Scrum methodology (Received Certified Scrum Master certification 2012).</li>
                              <li>Source control system was Team Foundation Server.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong><a className="whiteanchor" href="https://www.xfab.com/en/about-x-fab/corporate-overview/locations/usa-texas-single/">X-Fab Texas, Inc.</a></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Title</strong>
                            </td>
                          <td>
                            Software / Systems Engineer
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dates</strong>
                          </td>
                          <td>
                            1/2010 to 12/2011
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Description</strong>
                            </td>
                          <td>
                            <ul>
                              <li>Development of ASP.NET/C# Web applications to serve as frontends for MSSQL databases.</li>
                              <li>Developed .NET Web / Console / Winforms Applications.</li>
                              <li>Involved in Database Design. Administered Windows and Linux servers.</li>
                              <li>Designed Shell / Batch scripts. Developed C++ console applications.</li>
                              <li>Deployed machine monitoring system. Developed Inventory tracking system.</li>
                              <li>Deployed Documentation system to sites globally.</li>
                            </ul>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong><a className="whiteanchor" href="http://www.depts.ttu.edu/ece/">X-Fab Texas, Inc. / TTU EE Department</a></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Title</strong>
                            </td>
                          <td>
                            IT Intern
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dates</strong>
                            </td>
                          <td>
                            5/2007 to 12/2009
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Description</strong>
                            </td>
                          <td>
                            Developed various internal software projects, including statistical analysis programs, format conversion software, and .NET web applications.
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Panel>
                  <Panel collapsible defaultExpanded header="Education">
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong><strong><a className="whiteanchor" href="http://www.ttu.edu/">Texas Tech University</a></strong></strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <strong>Degree</strong>
                            </td>
                          <td>
                            Bachelor of Science, Computer Engineering
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>GPA</strong>
                            </td>
                          <td>
                            2.944
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Dates</strong>
                            </td>
                          <td>
                            8/2005 to 12/2009
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Description</strong>
                            </td>
                          <td>
                            - Trained in Electrical Engineering and Computer Science<br />
                            - Project Lab Projects: <br />
                             1a: 60 Hz Notch Filter <br />
                             1b: Line Following Robot <br />
                             2: Tech-SAL Robotics Programming Language <br />
                             3: Remote Event Timer <br />
                             4/5: F.P.G.A. based Waveform Generator.<br />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Panel>
                  <Panel collapsible defaultExpanded header="About Me">
                    <Table bordered condensed>
                      <thead>
                        <tr className="Table-header">
                          <th colSpan="2">
                            <strong>Information</strong>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                              <Image src="./kgromero.png" responsive thumbnail/>
                          </td>
                          <td>
                              Hello! My name is Kyle Romero.<br/>
                              I am a happily-married software developer living in Houston, Texas.<br/>
                              I have worked in the IT field since 2007 as a software engineer.<br/>
                              Currently, I am a team lead and senior developer at Worldwide Machinery.<br/>
                              My last two jobs I have been in a leadership role, helping to drive the success of the team. <br/>
                              I have extensive knowledge of all aspects of a succesful software project, and have used many different technologies over the years.<br/>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Contact</strong>
                            </td>
                          <td>
                            <ul>
                              <li><a href="mailto:kgromero@gmail.com" target="_top">kgromero@gmail.com</a></li>
                              <li><a href="https://www.linkedin.com/in/kyleromero/">LinkedIn</a></li>
                              <li><a href="https://github.com/romero927">Github</a> <i>Not Active Currently</i></li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Interests</strong>
                            </td>
                          <td>
                            <ul>
                              <li>My wife and I love to travel. We have travelled extensively throughout the U.S., as well as to several other countries.</li>
                              <li>I am very passionate about nature, and love hiking / camping / backpacking.</li>
                              <li>I also love Reading, Music, Movies, and Broadway Musicals (thanks to my wife).</li>
                              <li>Being an engineer at heart, I am constantly trying to find new side-projects to do.
                            Some of my favorite have been implemented using a Raspberry Pi, such as a Pi-hole DNS blocker.</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Continued Learning</strong>
                            </td>
                          <td>
                            Currently, I am doing my best to keep up with the quickly changing development landscape. <br/>
                            <ul>
                              <li>I am very interested in Python, .NET Core, GOLang, Rust, Clojure, and Vue.js.</li>
                              <li>I try to keep up-to-date using aggregators such as Hacker News.</li>
                              <li>I use Pluralsight to keep refreshed on various topics</li>
                            </ul>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Note</strong>
                            </td>
                          <td>
                            This site was built using the fantastic Create-React-App and React-Bootstrap libraries.<br/>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Panel>
                </div>
              </Panel>
            </Col>
            <Col xsHidden smHidden md={1} lg={2} />
          </Row>
        </Grid>
      </div>
    );
  }
}

export default App;