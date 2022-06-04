import styled from 'styled-components'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <html>
    <div className={styles.container}>
      <Head>
    <title className={styles.punchline}>a regenerative agtech incubator</title>
       {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className={styles.main}>
        <div className={styles.navContainer}>
        <ul className={styles.navList}>  
        <li><a href="">Home</a></li>
        <li><a href="">Blueprint</a></li>
        <li><a href="">Monetization</a></li>
        <li><a href="">Functions and Benefits</a></li>
        <li><a href="">Tokens</a></li>
        <li><a href="">Contact</a></li>
        </ul>
        </div>
        
        <h1 className={styles.title}>
         A Regenerative AgTech Incubator <a href="https://www.cryptoaltruism.org/blog/daos-and-the-future-of-social-impact">Impact DAO</a>
        </h1>

        <div className={styles.tagline}>
        A modern infrastructure model for decentralized community living and food security innovation incubator.
        </div>

        <div className={styles.subtitle}>
        -- Maximizing quality of life through ecological care, self development and <b>regenerative technologies</b>. A possible solution to a core problem in the human experience: <i>loneliness and belonging</i>.
        </div>
        <body>
        <div className="parallax-wrapper">
            <div className="content">
                 <h1>what we stand for</h1>
                
                What does it mean to fit together? Maybe, to have everything in its place. A natural order. An order in which there is no strain of mind, of energy, thought. An order which comes naturally, from a state of freedom. 

Freedom, however, is not simply doing what one wants when one wants. When free to act impulsively or from a state of ones primal instincts, one realizes that some of the choices we make dont always come from a place of individual true choice, or are not in our best common interest.Our primitive and selfish behavior as a species continue to confound a lack of meaning and systemic inequalities with our most crucial and pressing crisis: climate change.- We endlessly seek material/superficial answers to existential questions, perpetuating deception, hypocrisy, and disappointment.. Freedom therefore comes with great responsibility. 

As technology races ahead of our own collective psychological evolution, a positive way forward is to ensure we are redefining our meaning to life. Decentralized cities allow young people to migrate toward rural areas and engage with projects they care about to improve the world and have a stable yet transient (agrotourism) community they can relate to. Many people dont want to be tied to one location anymore. The meaning of ownership and value of material possessions is changing. So is the way we value ourselves. We are leaving the reductionist capitalist model for one where everyone has an opportunity to live up to their potential if given compassion, resources and the exposure needed to blossom.If given compassion, exposure, and most importantly the resources. 

We are not idealists. This is just the next phase of human evolution: a life beyond the me.

To redefine societal values and orient a new approach of modern civilization, we must cultivate an environment which evokes the desire for: 

Cooperative decisions for all humans - require minds which question and value observing large scope of content before drawing conclusions
Environments that inspire -  inner growth, maturity and self-awareness, not escapism
Silent retreats and nature - interactions with the natural world to inhibit peace of mind
Elimination of emphasis on status in society - reinventing/integrating harmoniously w/ AI

It is now clear:
-	the globalized society humankind has created is unequivocally fragile
-	society must redefine its values to for a sustainable maximization of living quality
-	remote work has become a norm
-	mankinds interaction with the natural world must drastically change and include indigenous wisdom
-  humans need to exercise their fulfillment in a new way of living that will consist of mostly leisure without following into destructive vices
             
            </div>
        </div>
        <div className="regular-wrapper">
            <div className="content">
                <p><h1> The Blueprint </h1></p>
            </div>
        </div>
        </body>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </footer>
    </div>
    </html>
  )
}
