import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";

export default function About() {
    return (
        <Layout>
            <SEO title="About" description="Yeaaaah, about me XD" />
            <h1 className="mb-5 text-center text-3xl">About</h1>
            <p className="mb-3 text-sm md:text-base">
                I'm enjoying front-end development. I love to code, learn
                something new, eat, sleep and poop, yeah, take a shit give me
                unlimited ideas to thinking about, lol.
            </p>
            <p className="mb-3 text-sm md:text-base">
                I was born in mid 2001. My very first code when I was junior
                high school trying to make an rpg game with Unity3D from YouTube
                tutorial with my potato PC without knowing what programming it
                is. At that time, I was really like playing games and from that
                came up with wild thoughts about making games and make me have a
                life goals to be a 'Game Developer'.
            </p>
            <p className="mb-5 text-sm md:text-base">
                Long story short, in the end of junior high school, I decided to
                continue my study to vocational high school in majors software
                engineering, and from that, I realized that to be a Game Dev is
                hard with a complex learning curve. Time goes by, lesson after
                lesson I passed, I found myself comfortable with something that
                eye-catching and beautiful to see, YEAH! I like cool,
                anti-mainstream, flat design interfaces. So, I find a way to
                learn Front-End Development from HTMl/CSS/JavaScript basic
                fundamental. Until now, I'm still learning something new,
                whether it's a tools, framework, methodology, whatever it is. If
                it's useful and I need it, I'll try to learn that thing.
            </p>
            <p className="mb-3 text-sm font-bold">
                "Do what you understand, and understand what you do."
            </p>
        </Layout>
    );
}
