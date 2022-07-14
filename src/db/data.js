//create a portfolio with title, images, description etc
import survivalGuideImage from "../images/soc-survival-guide-landing-page.jpg"
import techAvengers from "../images/tech-avengers-landing-page.jpg"

const portfolioItems = [
  {
  title: "School of Code Survival Guide",
  description: "One week engineering project. Mindset, self-care and technical resources were supplied to assist bootcampers through the journey",
  image: survivalGuideImage,
  url: "https://soc-surival-guide-by-lisa.herokuapp.com/"
  },
  {
    title: "FutureVerse",
    description: "Figma prototyping of business idea",
    image: "",
    url: ""
  },
  {
    title: "Tech Avengers Trivia Game",
    description: "Planet Earth has regressed due to human destruction and greed. Help Earth to recover its technology by answering tech questions. Earn points and tech tools",
    image: techAvengers,
    url: "techavengers.herokuapp.com"
  }
]

export default portfolioItems