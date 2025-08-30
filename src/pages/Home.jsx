import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import style from "../pages/Home.module.css";
import CardSection from "../components/CardSection"
import SectionHeading from "../components/SectionHeading";
import popular1 from "../assets/popular1.svg";import popular2 from "../assets/popular2.svg";import popular3 from "../assets/popular3.svg";
import ParagraphSection from "../components/ParagraphSection";
import HomeCourses from "../components/HomeCourses";import card1 from "../assets/card1.jpg";
import card2 from "../assets/card2.jpg";import card3 from "../assets/card3.jpg";import card4 from "../assets/card3.jpg";import card5 from "../assets/card5.jpg";import card6 from "../assets/card6.jpg";
import Achievements from "../components/Achievements" ;
import TrustedCompany from "../components/TrustedCompany";import coursePrometion from "../assets/coursePrometion.png"

function Home(){
     const courses = [
    {
      img: card1,
      price: 250,
      category: "Finance",
      title: "Professional Ceramic Moulding For Beginners",
      lessons: 15,
      hours: "4 hours",
      stars: 5.0,
      level: "All Levels"
    },
    {
      img: card2,
      price: 199,
      category: "Technology",
      title: "Advanced JavaScript Bootcamp",
      lessons: 20,
      hours: "6 hours",
      stars: 4.8,
      level: "Intermediate"
    },
        {
      img: card3,
      price: 199,
      category: "Technology",
      title: "Advanced JavaScript Bootcamp",
      lessons: 20,
      hours: "6 hours",
      stars: 4.8,
      level: "Intermediate"
    },
        {
      img: card4,
      price: 199,
      category: "Technology",
      title: "Advanced JavaScript Bootcamp",
      lessons: 20,
      hours: "6 hours",
      stars: 4.8,
      level: "Intermediate"
    },
        {
      img: card5,
      price: 199,
      category: "Technology",
      title: "Advanced JavaScript Bootcamp",
      lessons: 20,
      hours: "6 hours",
      stars: 4.8,
      level: "Intermediate"
    },
        {
      img: card6,
      price: 199,
      category: "Technology",
      title: "Advanced JavaScript Bootcamp",
      lessons: 20,
      hours: "6 hours",
      stars: 4.8,
      level: "Intermediate"
    }
  ];
    return(<>
     <Navbar btn1="Contact" btn2="Account"/>
     <section className={style.container}><div className={style.mainContent}>
        <h1>Get smart <span>opportunity for</span> your best future</h1>
        <p>It is a long established fact that reader will be distracted readable content of a page when.</p>
        <div className={style.flexContainer}>
        <input type="text" placeholder="Search Your Course Here"></input>
        <button type="submit">Search <i class='bx bx-search-alt-2'></i></button></div>
        <span className={style.topics}> Popular Topics:</span>
        <a>Business ,</a>
        <a>Data Science ,</a>
        <a>Digital Program ,</a>
        <a>Finance</a>

        </div></section>
        <CardSection/>
        <SectionHeading subtitle="Start Learning"> Popular <span>Topics To Learn</span> From Today.</SectionHeading>
        <section>
            <div className={style.featuresContainer}>
                <div className={style.featureCard}>
                    <div className={style.visual}>
                   <img src={popular1}></img></div>
                   <div className={style.texts}> 
                    <h2>Business</h2>
                    <p>1 Course</p></div>
                </div>
                <div className={style.featureCard}>
                    <div className={style.visual}>
                   <img src={popular2}></img></div>
                   <div className={style.texts}> 
                    <h2><span></span>Data Science </h2>
                    <p>1 Course</p></div>
                </div>
                <div className={style.featureCard}>
                    <div className={style.visual}>
                   <img src={popular3}></img></div>
                   <div className={style.texts}> 
                    <h2><span></span>Digital Program </h2>
                    <p>2 Courses</p></div>
                </div>
                <div className={style.featureCard}>
                    <div className={style.visual}>
                   <img src={popular1}></img></div>
                   <div className={style.texts}> 
                    <h2><span></span>Business</h2>
                    <p>1 Course</p></div>
                </div>
                <div className={style.featureCard}>
                    <div className={style.visual}>
                   <img src={popular3}></img></div>
                   <div className={style.texts}> 
                    <h2><span></span>Data Science </h2>
                    <p>1 Course</p></div>
                </div>
                <div className={style.featureCard}>
                    <div className={style.visual}>
                   <img src={popular2}></img></div>
                   <div className={style.texts}> 
                    <h2><span></span>Digital Program </h2>
                    <p>2 Courses</p></div>
                </div>
            </div>
 
                       
        </section>
        <ParagraphSection/>
        <SectionHeading subtitle="Popular Courses"> Choose Our <span>Top Courses</span></SectionHeading>
            <div className={style.homeContainer}>
      {courses.map((course, index) => (
        <HomeCourses key={index} {...course} />
      ))}
    </div>
    <SectionHeading subtitle=" Some Fun Facts">
                      Our Great <span>Achievement</span>
                    </SectionHeading>
                    <Achievements/>
                    <section>
                         <div className={style.vidAreaSection}>
                             <a href="https://www.youtube.com/watch?v=0KYxN1kJSb0"><i class='bx bx-play'></i></a>
                              </div> 
                    </section>
                    <TrustedCompany/>
                    <section className={style.coursePromotion}>
                         <div className={style.sectionTwoContainer}>
                            <div className={style.separateSection}>
                            <h3 className={style.heading3}>Best Online Learning Platform</h3>
                            <h1 className={style.heading} >One Platfrom & Many <span>Courses</span> For You</h1>
                            <p className={style.paragraph}>From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.</p>
                            <ul>
                                <li><span><i class='bx bxs-check-square' ></i></span>&nbsp;&nbsp;9/10 Average Satisfaction Rate</li>
                               <li> <span><i class='bx bxs-check-square' ></i></span>&nbsp;&nbsp; 96% Completitation Rate</li>
                               <li><span><i class='bx bxs-check-square' ></i></span>&nbsp;&nbsp;Friendly Environment & Expert Teacher</li>
                                    <button className={style.exploreButton}> <span className={style.circlee}></span>
                                      EXPLORE COURSES <span className={style.arrow}>→</span>
                                    </button>
                            </ul>
                            
                             </div>
                               
                             <img src={coursePrometion} alt="image of a girl" />

                        
                         </div>
                         
                    </section>
            <SectionHeading subtitle="Popular Courses">
                      Choose Our <span>Top Courses</span>
                    </SectionHeading>
                    <section>
                              <div className={style.factsContainer}>
                                <div className={style.factsCard}>
                                  <div className={style.element1}>
                                    <h1>Free</h1>
                                    <h1>$0</h1>
                                    <p>\Month</p>
                                    <p style={{color:'#00c896',textDecoration:'underline'}}>Upgrade as you need</p>
                                    <hr/>
                                    <ul style={{listStyle:"none",padding:"4px"}}>
                                        <li><span><i class='bx bx-book-heart'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-book-heart'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-book-heart'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-book-heart'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-book-heart'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-book-heart'></i></span>Learn at your own pace</li>
                                    </ul>
                                    <button className={style.startBtn}>Start Now</button>

                                  </div>
                                </div>
                            
                                <div className={style.factsCard}>
                                  <div className={style.element1}>
                                    <h1>Saver plan</h1>
                                    <h1>$29</h1>
                                    <p>\Month</p>
                                    <p style={{color:'#00c896',textDecoration:'underline'}}>$348 Per Year</p>
                                    <hr/>
                                        <ul style={{listStyle:"none",padding:"4px"}}>
                                        <li><span><i class='bx bx-star'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-star'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-star'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-star'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-star'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-star'></i></span>Learn at your own pace</li>
                                    </ul>
                                    <button className={style.startBtn}>Start Now</button>

                                  </div></div>
                                
                            
                                <div className={style.factsCard}>
                                  <div className={style.element1}>
                                    <h1>Unlimited plan</h1>
                                    <h1>$49</h1>
                                    <p>\Month</p>
                                    <p style={{color:'#00c896',textDecoration:'underline'}}>$588 Per Year</p>
                                    <hr/>
                                         <ul style={{listStyle:"none",padding:"4px"}}>
                                        <li><span><i class='bx bx-file'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-file'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-file'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-file'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-file'></i></span>Learn at your own pace</li>
                                        <li><span><i class='bx bx-file'></i></span>Learn at your own pace</li>
                                    </ul>
                                    <button className={style.startBtn}>Start Now</button>
                                  </div></div>
                                
                                </div>

                    </section>
                    <section className={style.container}><div className={style.mainContent2}>
        <h1>Subscripbe to our newsletter, <br/>We don't make any spam.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elitsed eiusmod tempor enim minim</p>
        <div className={style.flexContainer}>
        <input type="text" placeholder="Enter Your Email Address"></input>
        <button type="submit"> <i class='bx bx-search-alt-2'></i></button></div>
       </div></section>
    <Footer/></>
    );
}
export default Home;
