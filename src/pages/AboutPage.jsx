import Aos from 'aos'
import 'aos/dist/aos.css'
import { useEffect } from "react";


export default function AboutPage() {
  useEffect (() => {
    Aos.init({duration: 1000});
  }, [])
  return (
    <div className="about">
    <h1 >About Us</h1>
    <h3 >Empowering your Financial Journey with Data-Driven Insights</h3>
    <p >At Stock Trekker, we believe that informed investing is powerful investing and we provide you that, comibining real-time data, cutting-edge tracking, and intuitive tools to bring you a clear, actionable view of the stock market. Whether you're an experienced investor or a beignner, our mission is to equip you with the insights needed to make confident, strategic decisions in a fast-moving market.</p>
    <h1 >Our Mission</h1>
    <h3 >To Simplify Market Complexity and Drive Financial Success</h3>
    <p >In today's ever-changing financial landscape, timely and accurate information is key. We are dedicated to providing a straightforward, user-friendly experience that transforms complex data into meaningful insights, helping you spot opportunities, manage risks, and achieve your investment goals with confidence.</p>
    <h1 >Why Choose Us?</h1>
    <ul >
      <li ><h3>Real-Time Data</h3></li>
      <p >Stay up-to-date with the latest market movements and trends to make timely decisions.</p>
      <li ><h3>In-Depth Tracking Tools</h3></li>
      <p >Our suite of tools allows you to see market data, assess stock performance, and understand the financial landscape like never before.</p>
      <li ><h3>Intuitive and User-Friendly Interface</h3></li>
      <p >Easy navigation and clear visuals let you dive deep into stock insights without getting lost in numbers.</p>
      <li ><h3>Actionable Insights for Every Investor</h3></li>
      <p >Whether mid cap companies or large cap enterprises, our tracking adapts to your strategies, bringing value to investors of every level.</p>
    </ul>
    <h1 >Our Vision</h1>
    <h3 >Creating a Community of Confident Investors</h3>
    <p >Our vision is to democratize access to advanced market insights, fostering a world where investors of all backgrounds can make sound financial choices. We strive to create a community where knowledge is shared, confidence is built, and success is achieved collectively.</p>
  </div>
  );
}
