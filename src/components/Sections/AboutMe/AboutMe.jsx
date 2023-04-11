import React from "react";
import MainHead from "../../MainHead/MainHead";
import "./aboutme.scss";

function AboutMe() {
  return (
    <section id="AboutMe" className="container ">
      <MainHead name="About Me" num={1} />
      <div className="content">
        <div className="info">
          <p>
            Youssef Yasser is a Computer and Control Systems Engineering student
            at Mansoura University. he is a software engineer with a strong
            passion for the fields of artificial intelligence and machine
            learning.
          </p>
          <p>
            Youssef is interested in problem-solving and desires to stay
            up-to-date with the latest technologies. He is always eager to learn
            new things and challenge himself with complex tasks. He enjoys
            working in teams and collaborating with other developers to deliver
            high-quality products
          </p>

          <p>
            He is passionate about applying his knowledge and skills to
            real-world problems and creating innovative solutions that can
            benefit society. He aspires to become a successful and influential
            software engineer in the future.
          </p>
          <p>Here are a few technologies I’ve been working with recently:</p>

          <ul>
            <li>Python</li>
            <li>C</li>
            <li>JavaScript (ES6+)</li>
            <li>React</li>
            <li>Git</li>
            <li>MySQl</li>
          </ul>
        </div>
        <div className="img">
          <img
            src="https://scontent.fcai21-1.fna.fbcdn.net/v/t39.30808-6/332123280_3088068964819098_7236975305357302567_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7HMyBvL-X8YAX8qZhK2&_nc_ht=scontent.fcai21-1.fna&oh=00_AfCiP8I0cM8y0WJVs8jUKFyS-D5sSrswfE3ViMoc4HoLlw&oe=643A0321"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
