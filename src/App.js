import {useState} from 'react'
import './App.css';



//icons
import  RightArrow from './images/forward.svg';
import  ApproveIcon from './images/approval.svg';
import  TermPaperIcon from './images/rules.svg';
import  ResearchPaperIcon from './images/research.svg';
import  WhitePaperIcon from './images/whitepaper.svg';
import  AssignmentIcon from './images/assignment.svg';
import  CaseStudyIcon from './images/casestudy.svg';
import  DissertationIcon from './images/dissertations.svg';



//components
import  RatingCard from './components/RatingCard';
import Footer from './components/Footer';
import Header from './components/Header';
import Overlay from './components/Overlay';





function App() {

const [ratings,setRating]  = useState([
    {
        customerName: 'Franklin Shera',
        rating: 3.5,
        created_at: "JUN 28, 2020",
        remarks: `The writer worked for everything I 
            needed. I had some questions that were 
            answered promptly and professionally.  

            And.... they validated that my experiences  
            could work towards a new career!`
    },
    {
        customerName: 'Kimani Stephen',
        rating: 4.5,
        created_at: "MAY 09, 2018",
        remarks: `The writer worked for everything I 
            needed. I had some questions that were 
            answered promptly and professionally.  

            And.... they validated that my experiences  
            could work towards a new career!`
    },
    {
        customerName: 'Ann Kanyiva',
        rating: 5,
        created_at: "SEP 21, 2016",
        remarks: `The writer worked for everything I 
            needed. I had some questions that were 
            answered promptly and professionally.  

            And.... they validated that my experiences  
            could work towards a new career!`
    }


])







  return (
  <>
    <Overlay/>

    <div className="bg-gray-100">
    
    <Header/>

    <div className="hero" >

        <div className="cta">

            <p className="cta-lead">As <span className="p-1 px-2 font-semibold bg-white text-primary-1">Writers</span></p>

            <p className="cta-word">
                We are inclined to optimum dedication in <br/>
                providing top-quality services braced with<br/>
                inimitable creativity and perfectionism.<br/>
                The services we offer stand out for<br/>
                themselves in uniqueness.
            </p>

            <button className="strt-btn">CHECKOUT OUR SOLUTIONS  <img src={RightArrow} className="inline h-5 lg:h-8 xl:ml-2 md:ml-3" alt="Check Our Solutions Button"></img></button>

        </div>
        
    </div>

    <div id="services" className="services">
        <div className="serv-group">
                <h1 className="block w-full my-10 text-center header-text">SERVICES</h1> 
          
            <div className="service">
                <img src={TermPaperIcon} className="h-12" alt="Term paper icon"></img>
                <span>Term Papers</span>
            </div>

            
            <div className="service sm:justify-start xl:justify-center">
                <img src={ResearchPaperIcon} className="h-12" alt="Research Paper icon"></img>
                <span>Research Paper</span>
            </div>

            <div className="service">
                <img src={WhitePaperIcon} className="h-12" alt="White Paper icon"></img>
                <span>White Paper</span>
            </div>

            <div className="service sm:justify-start xl:justify-center">
                <img src={AssignmentIcon} className="h-12" alt="Class Assignment icon"></img>
                <span>Class Assignment</span>
            </div>

            
            <div className="service">
                <img src={CaseStudyIcon} className="h-12" alt="Case Study icon"></img>
                <span>Case Study</span>
            </div>

            <div className="service sm:justify-start xl:justify-center">
                <img src={DissertationIcon} className="h-12" alt="Dissertation icon"></img>
                <span>Dissertation</span>
            </div>


        </div>
    </div>

    <div className="overview">
        <h1 className="header-text">OVERVIEW</h1>
        <div className="views">
            
            <div className="view">
                <p className="text-4xl font-bold num text-primary-1">2000</p>
                <p className="text-center caption">
                    Projects  <br/>
                    Completed
                </p>
            </div>

            
            <div className="view">
                <p className="text-4xl font-bold num text-primary-1">85</p>
                <p className="text-center caption">
                    Countries  <br/>
                    Represented
                </p>
            </div>

            <div className="view">
                <p className="text-4xl font-bold num text-primary-1">95%</p>
                <p className="text-center caption">
                    Success  <br/>
                    Rate
                </p>
            </div>

            <div className="view">
                <p className="text-4xl font-bold num text-primary-1">100+</p>
                <p className="text-center caption">
                    Active <br/>
                    Tutors
                </p>
            </div>


        </div>
    </div>


    <div className="why-us">
        <h1 className="mt-24 header-text">
            WHY CHOOSE OUR ESSAY SERVICE
        </h1>
        <p className="px-5 mt-12 text-xl text-center lg:text-2xl text-dark-5">
            We seek to help students with assignments all to relieve them of their busy schedules.<br/>
            Most students find it hard to balance student life, family and work.<br/>
            We step in to help with assignments for we care. 
        </p>

        <div className="score-card">

            <div className="score-start">
                <img src={ApproveIcon} className="inline h-7 w-7" alt="Approved Service Icon"></img>
                <span className="">Our services are at optimal quality</span>
            </div>

            
            <div className="score-end">
                <img src={ApproveIcon} className="inline h-7 w-7" alt="Approved Service Icon"></img>
                <span className="">Top-notch tutors at your disposal</span>
            </div>


           <div className=" score-start">
                <img src={ApproveIcon} className="inline h-7 w-7" alt="Approved Service Icon"></img>
                <span className="">Clients Are Our Top Priority</span>
            </div>

            
            <div className="score-end">
                <img src={ApproveIcon} className="inline h-7 w-7" alt="Approved Service Icon"></img>
                <span className="">Responsive support</span>
            </div>


            <div className="score-start">
                <img src={ApproveIcon} className="inline h-7 w-7" alt="Approved Service Icon"></img>
                <span className="">Delivery on time</span>
            </div>

            
            <div className="score-end">
                <img src={ApproveIcon} className="inline h-7 w-7" alt="Approved Service Icon"></img>
                <span className="">Cheap rates</span>
            </div>
        </div>

        
        <div className="flex flex-col items-center justify-center w-full h-1 my-3 fancy-hr">
            {/* <hr className="w-4/6 thin-hr bg-primary-1"> </hr> */}
        </div>

        <div className="mb-24 benefits">

            <div className="benefit">
                <h1 className="text-xl font-bold text-primary-1">Money-Back Guarantee</h1>
                <p className="text-sm sm:pr-2">
                    Our customers obtain their money back in full upon ascertaining 
                    that correct work was not delivered, cases of poor quality, 
                    and valid claims after confirmation by the quality department.
                </p>
            </div>

            <div className="benefit sm:pl-2">
                <h1 className="text-xl font-bold text-primary-1">Non-Plagiarism Work Guarantee</h1>
                <p className="text-sm">
                    We have inbuilt plagiarism checker that ensures work is 100% 
                    non-plagiarized before submission to esteemed customers. 
                    We observe plagiarism and patent rights in line with 
                    international guidelines.
                </p>
            </div>


            <div className="benefit">
                <h1 className="text-xl font-bold text-primary-1">Approved and Skilled Writers</h1>
                <p className="text-sm sm:pr-2">
                    All writers are appointed through a step-wise interview.
                    Our team is committed to delivery of the best content that 
                    qualifies for top quality always. We always guarantee success in 
                    the  completion of tasks to the satisfaction of the clients.
                </p>
            </div>

            <div className="benefit sm:pl-2">
                <h1 className="text-xl font-bold text-primary-1">Free Limitless Ammendments</h1>
                <p className="text-sm">
                    Our customers are liable to free limitless modification of work in
                    cases that clients present their original instructions for the task.
                </p>
            </div>

        </div>

    </div>


    <div className="subjects">

       <div className="info">
            <h1 className="pt-8 header-text">
                SUBJECTS AVAILABLE
            </h1>

            <p className="px-5 py-8 text-center sm:text-xl">
                Our team of experts is vast in various disciplines, something that we pride in as a team. <br/>
                We offer services in line with the following subjects.
            </p>
       </div>
       

      <div className="subgroup">
        <div className=" sublist" >

            <span className="subject">
                English
            </span>
            
            <span className="subject">
                Literature 
            </span>

            <span className="subject">
                History
            </span>

            <span className="subject">
                Sociology
            </span>

            <span className="subject">
                Psychology
            </span>

            <span className="subject">
                Mathematics
            </span>

            <span className="subject">
                Finance
            </span>

            <span className="subject">
                Accounts
            </span>
            
            <span className="subject">
                Management
            </span>

            <span className="subject">
                Computer Science
            </span>
            
            <span className="subject">
                Economics and Econometrics Statistics 
            </span>

            <span className="subject">
                Healthcare and Nursing
            </span>


            <span className="subject">
                All Branches of Sciences 
            </span>

          </div>
      </div>

       
    </div>       


    <div className="customer-say">

        <h1 className="px-5 mt-14 lg:mt-28 header-text">
            WHAT OUR CUSTOMERS SAY
        </h1>

        <div className="cards-list">


            { ratings.map( (rate,index) => (
                <RatingCard cardData={rate} key={index} />
            ) ) }
            
        
        </div>

    </div>


    <div id="contact" className="contact" >

        <h1 className="mt-14 lg:mt-28 header-text">GET IN TOUCH WITH US</h1>

        <form action="" className="w-5/6 sm:w-3/4 lg:w-3/5 mt-7 mb-14 lg:mb-28 2xl:w-1/2">
            <div className="input-group">
                <label  >Name</label>
                <input type="text" className="" placeholder="Type Your Name Here"></input>
            </div>

            <div className="input-group">
                <label >Email</label>
                <input type="email" className="" placeholder="Type Your Email Here"></input>
            </div>

            <div className="input-group">
                <label >WhatsApp Number</label>
                <input type="number" className="" min="0" placeholder="Type Your Whatsapp Number Here"></input>
            </div>

            <div className="input-group">
                <label >Message</label>
                <textarea name="message" id="" cols="25" rows="10" placeholder="Type Message Here"></textarea>
            </div>

            <div className="radio-group">
                <label className="text-lg font-semibold ">Email Me Back</label>
               
                <label className="custom-check">
                    <input type="checkbox" name="mailback" id=""></input>
                    <span className="checkmark"></span>
                </label>
            </div>

            <div className="radio-group">
                <label className="text-lg font-semibold ">Add Me On Whatsapp</label>
                <label className="custom-check">
                    <input type="checkbox" name="addonwhatsapp" id=""></input>
                    <span className="checkmark"></span>
                </label>
            </div>

            <button type="submit" className="btn-pri">SUBMIT</button>
        </form>
    </div>

        <Footer/>

    </div>
  </>
  );
}

export default App;
