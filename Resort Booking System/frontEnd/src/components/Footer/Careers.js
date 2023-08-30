import React from 'react'

export default function Careers() {
  return (
    <div>Careers
     <div className="container">
        <img style={{width: "100%"}} src="https://www.newdelhiairport.in/src/images/careers/career-Life.jpg" alt=""/>
    </div>
    <br/>
  <br/>
    <div className="container">
        <h1>CAREERS</h1>
        <div className="row">
            <div className="col-xl-6">
              <br/> <br/>
                <h4>Designer</h4>
                <p>
                    <strong>Job Description :</strong>
                <ul>
                    <li>Good understanding of marketing brief , Work closely with In house teams .</li>
                    <li>To Design In-house signage’s and visuals across different platforms.</li>
                    <li>Create Banner , Thumbnails for our Marketing material.</li>
                    <li>Knowledge of designing , With CorelDraw or canava , Photoshop and other design software’s.</li>
                    <li>Experience in designing creatives for digital media or service industry or website design</li>
                    <li>Designing signage’s or greetings, making art works and production knowledge
                    </li>
                </ul>
                </p>
                <p>
                    <strong>Required candidate profile</strong>
                <ul>
                    <li>Experience with ad agency or digital agency will be preferred (1 or 2 yrs )</li>
                    <li>Female Preferred.</li>
                </ul>
                </p>
                <p>
                    <strong><ins>CTC: Upto 40000 per Month.</ins></strong>
                </p>
            </div>
            <div className="col-xl-6">
              <br/> <br/>
                <h4>Marketing Executive</h4>
                <p>
                    <strong>Job Description :</strong>
                <ul>
                    <li>Reels creations, Develop engaging, Creative, Innovative content for scheduled posts which promotes brand-focused msg.</li>
                    <li> Familiar with social media automation tools ( Hootsuite , Buffer, Hubspot, etc )</li>
                    <li>Creative management with a creative agency.</li>
                    <li> Co-ordinations with other dept. for smooth operations.</li>
                    <li>Familiar with Canava graphics tool.</li>
                </ul>
                </p>
                <p>
                    <strong>Required Skills</strong>
                    <ol>
                        <li>Proactive</li>
                        <li>Passionate with digital trends in the market</li>
                        <li>Proficiency in MS Excel and MS Word will be an added advantage</li>
                        <li>Strong verbal & written communication skills</li>
                    </ol>
                </p>
              <br/>
                <p>
                    <strong><ins>CTC: Upto 40000 per Month.</ins></strong>
                </p>
            </div>
            <div className="col-xl-6">
              <br/> <br/>
                <h4>Sales Executive</h4>
                <p>
                    <strong>Job Description :</strong>
                <ul>
                    <li>Reels creations, Develop engaging, Creative, Innovative content for scheduled posts which promotes brand-focused msg.</li>
                    <li> Familiar with social media automation tools ( Hootsuite , Buffer, Hubspot, etc )</li>
                    <li>Creative management with a creative agency.</li>
                    <li> Co-ordinations with other dept. for smooth operations.</li>
                    <li>Familiar with Canava graphics tool.</li>
                </ul>
                </p>
                <p>
                    <strong>Required Skills</strong>
                    <ol>
                        <li>Proactive</li>
                        <li>Passionate with digital trends in the market</li>
                        <li>Proficiency in MS Excel and MS Word will be an added advantage</li>
                        <li>Strong verbal & written communication skills</li>
                    </ol>
                </p>
              <br/>
                <p>
                    <strong><ins>CTC: Upto 40000 per Month.</ins></strong>
                </p>
            </div>
        </div>
    </div>
    {/* <!-- Artical end -->
    <!-- section start --> */}
    <div className="container">
        <div className="row">
            <p>(*) Required Fields</p>
            <div className="col-xl-3">
                <label for="">Name*: </label> <br/><br/>
                <label for="">Email Address*: </label> <br/><br/><br/>
                <label for="">Contact Number*: </label> <br/><br/><br/>
                <label for="">Position Applied For*: </label> <br/><br/>
                <label for="">Choose File*: </label> <br/><br/>
            </div>
            <div className="col-xl-9">
                <input type="text" className="form-control"/> <br/>
                <input type="email" name="" id="" className="form-control"/> <br/>
                <input type="text" className="form-control"/> <br/>
                <input type="text" className="form-control"/> <br/>
                
                    <input className="form-control" type="file" />
                <p>Please upload only .docx | .doc | .pdf</p>
                <div >
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- section end --> */}
  <br/>
  <br/>
  </div>
  )
}
