import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";

export default function AboutPage() {
  useEffect (() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <div className="about">
      <h1 data-aos="fade-up">ABOUT PAGE</h1>
      <h2 data-aos="fade-up">About Us</h2>
      <h3 data-aos="fade-up">Empowering Your Financial Journey with Data-Driven Insights</h3>
      <p data-aos="fade-up">At Stock Trekker, we believe that informed investing is powerful investing. Our platform combines real-time data, cutting-edge analysis, and intuitive tools to bring you a clear, actionable view of the stock market. Whether you're an experienced investor or just beginning your journey, our mission is to equip you with the insights needed to make confident, strategic decisions in a fast-moving market.</p>
      <h2 data-aos="fade-up">Our Mission</h2>
      <h3 data-aos="fade-up">To Simplify Market Complexity and Drive Financial Success</h3>
      <p data-aos="fade-up">In today's ever-changing financial landscape, timely and accurate information is key. We are dedicated to providing a straightforward, user-friendly experience that transforms complex data into meaningful insights, helping you spot opportunities, manage risks, and achieve your investment goals with confidence.</p>
      <h2 data-aos="fade-up">Why Choose Us?</h2>
      <ul data-aos="fade-up">
        <li data-aos="fade-up"><h3>Real-Time Data</h3></li>
        <p data-aos="fade-up">Stay up-to-date with the latest market movements and trends to make timely decisions.</p>
        <li data-aos="fade-up"><h3>In-Depth Analysis Tools</h3></li>
        <p data-aos="fade-up">Our suite of tools allows you to dissect market data, assess stock performance, and understand the financial landscape like never before.</p>
        <li data-aos="fade-up"><h3>Intuitive and User-Friendly Interface</h3></li>
        <p data-aos="fade-up">Easy navigation and clear visuals let you dive deep into stock insights without getting lost in numbers.</p>
        <li data-aos="fade-up"><h3>Actionable Insights for Every Investor</h3></li>
        <p data-aos="fade-up">Whether short-term trading or long-term investing, our analysis adapts to your strategies, bringing value to investors of every level.</p>
      </ul>
      <h2 data-aos="fade-up">Our Vision</h2>
      <h3 data-aos="fade-up">Creating a Community of Confident Investors</h3>
      <p data-aos="fade-up">Our vision is to democratize access to advanced market insights, fostering a world where investors of all backgrounds can make sound financial choices. We strive to create a community where knowledge is shared, confidence is built, and success is achieved collectively.</p>
    </div>
  );
}
