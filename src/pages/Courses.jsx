
import { useState } from "react";
import coursesData from "../data/dataCourses";
import CourseCard from "../components/CoursesCard";
import styles from "./Courses.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";

function Courses() {
  const [sortOption, setSortOption] = useState("A-Z");
  const [page, setPage] = useState(1);
  const [p, setP]= useState("page 1 of 2");
  const itemsPerPage = 9;

  const sortedCourses = [...coursesData].sort((a, b) => {
    if (sortOption === "A-Z") return a.p.localeCompare(b.p);
    if (sortOption === "Release Date") return new Date(b.releaseDate) - new Date(a.releaseDate);
    return 0;
  });

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedCourses = sortedCourses.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <Navbar  btn1="Login" btn2="Sign Up"/>
      <Hero page="Courses" />

      <div className={styles.filterBar}>
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="A-Z">A to Z</option>
          <option value="Release Date">Release Date</option>
        </select>
      </div>

      <main className={styles.grid}>
        {paginatedCourses.map(course => (
          <CourseCard key={course.id} {...course} />
        ))}
      </main>

      <div className={styles.pagination}>
        <p>{p}</p>

        <div>
        <button onClick={() => {setPage(1) ; setP("page 2 0f 2")} } disabled={page === 1}>1</button>
         

        <button onClick={() => {setPage(2) ; setP("page 2 0f 2")} }disabled={page === 2}>2</button>
      </div></div>

      <Footer />
    </>
  );
}

export default Courses;
