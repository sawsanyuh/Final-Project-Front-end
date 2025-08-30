import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import styles from "./AboutUs.module.css";
import SectionHeading from "../components/SectionHeading";
import teacher1 from "../assets/teacher1.jpg";import teacher2 from "../assets/teacher2.jpg";import teacher3 from "../assets/teacher3.jpg";import teacher4 from "../assets/teacher4.jpg";import girlAbout2 from "../assets/girlAbout2.png"
import { useNavigate } from "react-router-dom";
import ParagraphSection from "../components/ParagraphSection";
import CardSection from "../components/CardSection";import Achievements from "../components/Achievements";import TrustedCompany from "../components/TrustedCompany"



function AboutUs(){
  const navigate=useNavigate()
    return(<>
               <Navbar  btn1="Login" btn2="Sign Up"/>
               <Hero page="About Us"/>
               <CardSection/>


                   <ParagraphSection/>
                    <SectionHeading subtitle=" Why Choose Edusion">
                      Find The <span>Best Feature </span> Of Edusion.
                    </SectionHeading>
                    <section>
                        <div className={styles.featuresContainer}>
                            <div className={styles.featureCard}>
                            
                            <h2><span><i class='bx bx-book-open'></i></span>Learn MoreAnywhere</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                       </div>  
                            <div className={styles.featureCard}>

                            <h2><span><i class='bx bx-heart'></i></span>Expert Instructor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                        </div>
                            <div className={styles.featureCard}>
                            <h2><span><i class='bx bx-envelope'></i></span>Team Management</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                        </div>
                        <div className={styles.featureCard}>
                            
                            <h2><span><i class='bx bx-book-open'></i></span>Learn MoreAnywhere</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                       </div>  
                            <div className={styles.featureCard}>

                            <h2><span><i class='bx bx-heart'></i></span>Expert Instructor</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                        </div>
                            <div className={styles.featureCard}>
                            <h2><span><i class='bx bx-envelope'></i></span>Team Management</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor ut labore.</p>
                        </div>
                        </div>
                    </section>
                    <SectionHeading subtitle=" Some Fun Facts">
                      Our Great <span>Achievement</span>
                    </SectionHeading>
                    <Achievements/>
                    <SectionHeading subtitle="Team Member">
                      Our Expert <span>Instructors</span>
                    </SectionHeading>
                    <section>
                      <div className={styles.instructorContainer}>
                        <div className={styles.instructorCard}>
                          <img className={styles.instructorImg} src={teacher1}/>
                          <ul className={styles.socials}>
                            <li><i class='bx bxl-facebook'></i></li>
                            <li><i class='bx bxl-twitter' ></i></li>
                            <li><i class='bx bxl-instagram' ></i></li>
                            </ul>
                            <div className={styles.teamContent}>
                              <a>daniel miller</a>
                              <span className={styles.post}>logo expert</span>
                              <div className={styles.details}>
                                <span className={styles.logoAndDetails}><i class='bx bx-file-blank' ></i> <u>6 courcses</u></span>
                                <span className={styles.logoAndDetails}><i class='bx bx-user' ></i> <u>5 students</u></span>
                              </div>
                            </div>
                        </div>
                        <div className={styles.instructorCard}>
                          <img className={styles.instructorImg} src={teacher2}/>
                          <ul className={styles.socials}>
                            <li><i class='bx bxl-facebook'></i></li>
                            <li><i class='bx bxl-twitter' ></i></li>
                            <li><i class='bx bxl-instagram' ></i></li>
                            </ul>
                            <div className={styles.teamContent}>
                              <a>daniel miller</a>
                              <span className={styles.post}>logo expert</span>
                              <div className={styles.details}>
                                <span className={styles.logoAndDetails}><i class='bx bx-file-blank' ></i> <u>6 courcses</u></span>
                                <span className={styles.logoAndDetails}><i class='bx bx-user' ></i> <u>65 students</u></span>
                              </div>
                            </div>
                        </div>
                        <div className={styles.instructorCard}>
                          <img className={styles.instructorImg} src={teacher3}/>
                          <ul className={styles.socials}>
                            <li><i class='bx bxl-facebook'></i></li>
                            <li><i class='bx bxl-twitter' ></i></li>
                            <li><i class='bx bxl-instagram' ></i></li>
                            </ul>
                            <div className={styles.teamContent}>
                              <a>daniel miller</a>
                              <span className={styles.post}>logo expert</span>
                              <div className={styles.details}>
                                <span className={styles.logoAndDetails}><i class='bx bx-file-blank' ></i> <u>6 courcses</u></span>
                                <span className={styles.logoAndDetails}><i class='bx bx-user' ></i> <u>5 students</u></span>
                              </div>
                            </div>
                        </div>
                        <div className={styles.instructorCard}>
                          <div className={styles.imgSocials}>
                          <img className={styles.instructorImg} src={teacher4}/>
                          <ul className={styles.socials}>
                            <li><i class='bx bxl-facebook'></i></li>
                            <li><i class='bx bxl-twitter' ></i></li>
                            <li><i class='bx bxl-instagram' ></i></li>
                            </ul></div>
                            <div className={styles.teamContent}>
                              <a>daniel miller</a>
                              <span className={styles.post}>logo expert</span>
                              <div className={styles.details}>
                                <span className={styles.logoAndDetails}><i class='bx bx-file-blank' ></i> <u>6 courcses</u></span>
                                <span className={styles.logoAndDetails}><i class='bx bx-user' ></i> <u>5 students</u></span>
                              </div>
                            </div>
                        </div>
                      </div>
                    </section>
                    <SectionHeading subtitle="Frequently Asked Question">
                      General <span>Questions</span>
                    </SectionHeading>
                     <section>
                        <div className={styles.sectionTwoContainer}>
                            <div className={styles.separateSection}>
                            <h1 className={styles.heading} >Learn new skills to go <span>ahead for your</span> career.</h1>
                            <p className={styles.paragraph}>Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor incididunt ut labore et simply. From blogs to emails to ad copies, auto-generate catchy, original, and high-converting copies in popular tones languages.From blogs to emails to ad copies, auto-generate catchy, original and high-converting copies.</p>
                            <p className={styles.paragraph}>Auto-generate catchy original and high-converting copies in popular tones languages. From blogs to emails to ad copies auto-generate catchy</p>
                            </div>  <img src={girlAbout2} alt="image of a girl" />

                        </div>
                    </section>
                    <TrustedCompany/>
    <Footer/>
    </>

    );
}
export default AboutUs;