import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Image from "../components/image"
import SetupToc from "../components/setupToc"

import "./setup.css"

const SecondPage = () => {
  const headerContent = <p>
  Climate Angel is your guide to climate investing. First, we will setup your Angellist account and then we will help you apply to Lead Investors (called syndicates) who will invite you to join their investments.
   </p>

  return <Layout headerContent={headerContent} activePage="Getting Setup">
    <SEO title="Getting Setup" />
    <div className="setup">
    <SetupToc/>
    <div className="content">

    <h2 id="start-investing">Start Investing</h2>

    <h3 id="find-syndicates">1. Find syndicates</h3>
    <p>Once you're an accredited investor you can view the syndicates <a href="https://angel.co/invest/syndicates">page </a>focusing on climate on the Angellist platform.</p>
    <p>The angels listed on the <Link to="/">homepage</Link> are a great place to start too.</p>

    <Image alt="Gatsby in Space" filename="find-syndicates.png" />

    <h3 id="apply-to-syndicate">2. Apply to a Syndicate</h3>

    <p>When you find an investor who you want to invest alongside of, you can apply to join their syndicate.
    </p>
    <p>The application should is fairly short and should focus on three things: your background, your investment goals, and what you like about them.</p>

    <description>

      <p>Hi Jude,</p>
      <p>
        I'm reaching out because I appreciate your goal of accelerating business and science.
       As a lead on Firefox DevTools, I'm working on making web development more approachable and affordable.
      </p>
      <p>As an investor, I hope to support companies that will make tech more accessible and the climate more sustainable.</p>
    </description>

    <p> Checkout Angellist's syndicate resources <a href="https://angel.co/help/syndicates">here</a>.</p>
    <Image alt="Gatsby in Space" filename="syndicate.png" />

    <h3 id="review-invited-deals">3. Review invited deals</h3>

    <Image alt="Review invited deals" filename="invited-deals.png" />

    <h3>4. Invest in deals</h3>
    </div>
    </div>
  </Layout>
}

/*
  - add toc
  - add email Link at the bottom
  - add overview as part of the header
  -

*/

export default SecondPage
