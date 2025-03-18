
export const setupRevealAnimations = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
  });

  // Select all elements with the 'reveal-animation' class
  const elements = document.querySelectorAll('.reveal-animation');
  elements.forEach((el) => observer.observe(el));

  return () => {
    elements.forEach((el) => observer.unobserve(el));
  };
};

export const testimonialData = [
  {
    text: "I poured hours into social media marketing and earned $300 in about two weeks. It's not huge, but it's a solid start!",
    author: "Andrea C."
  },
  {
    text: "Had to learn the ropes first, but my dedication paid off when I cleared $2,000 in a little over a month!",
    author: "Brandon S."
  },
  {
    text: "The first few days were tough, but I managed to pull in $75 in that short time—motivating me to keep pushing!",
    author: "Tina M."
  },
  {
    text: "I refined my outreach strategy daily. After about three weeks, I was up $1,200—hard work, but so worthwhile!",
    author: "Kyle W."
  },
  {
    text: "At first, I only made $50, but consistent effort over a month bumped me up to $700! Persistence pays off.",
    author: "Emily R."
  },
  {
    text: "It took a lot of follow-ups and online ads, but I managed to earn $3,000 in six weeks. You've got to stay on top of it.",
    author: "Shawn P."
  },
  {
    text: "I started slow, but by my second week, I hit $250. Every day I learn something new and apply it.",
    author: "Felicia J."
  },
  {
    text: "I never thought I'd reach $500 so fast. Lots of trial-and-error, but definitely worth it in the end!",
    author: "Marcos T."
  },
  {
    text: "It took some serious hustle, but after a month, I was sitting at $1,500. Stick with it and you'll see results.",
    author: "Rachel B."
  },
  {
    text: "I focused on daily posts and emails. Surprised myself by breaking $2,800 in about four weeks—patience was key!",
    author: "Jordan L."
  },
  {
    text: "This wasn't a walk in the park, but after a month of consistent promotions, I hit $4,000. Hard work does pay!",
    author: "Sophia K."
  },
  {
    text: "I stayed committed to my referral plan, answering questions non-stop. Ended up hitting $900 in just three weeks!",
    author: "Marcus V."
  },
  {
    text: "Honestly didn't expect to hit $120 so quickly, but it only took four days once I put myself out there.",
    author: "Candice H."
  },
  {
    text: "Between the AI tools and my non-stop outreach, I ended up making $3,500 over five weeks. It wasn't easy, but definitely worth it.",
    author: "Devin A."
  },
  {
    text: "I put in a lot of late nights building campaigns. All that effort turned into a tidy $2,200 in three weeks.",
    author: "Beth S."
  },
  {
    text: "My biggest surprise was hitting $750 by day 10. It's still growing, so I'm pumped to see what comes next!",
    author: "Ronald D."
  },
  {
    text: "I'm not a marketing pro, but I stuck with the system for six weeks and reached $7,000! You just have to be consistent.",
    author: "Ella P."
  },
  {
    text: "This required a ton of work, but hitting $10,000 in about six weeks was a huge milestone for me. I went all in!",
    author: "Greg T."
  }
];

export const faqData = [
  {
    question: "How do I get started?",
    answer: "Simply join via our referral link, deposit $30 in BTC, and follow the step-by-step setup!"
  },
  {
    question: "Is there a limit to how much I can earn?",
    answer: "There's no official cap; your results depend on your marketing efforts and consistency."
  },
  {
    question: "Do I need any prior experience?",
    answer: "Nope! Our system and AI tools are designed to help beginners get started smoothly."
  },
  {
    question: "How are payments made?",
    answer: "All payments are made in Bitcoin—fast, secure, and easy to track."
  },
  {
    question: "What is Go E1U Life?",
    answer: "Go E1U Life is a platform combining AI-powered marketing tools, automation services, and a 2×3 matrix system that allows you to earn Bitcoin instantly."
  },
  {
    question: "What products or tools do I get?",
    answer: "You receive credits that unlock tools such as funnel/website builders, email marketing, AI automation, booking calendars, reputation management, and more. Each package tier offers additional features."
  },
  {
    question: "How does the matrix board work?",
    answer: "Our matrix is 2×3. Once you join a board, it fills across three levels. After it's complete, you may receive a set payout in Bitcoin based on the board you activated."
  },
  {
    question: "What are the different board levels and payouts?",
    answer: "Boards begin at $25 and go up to $8,000. Potential payouts range from $200 to $64,000, depending on which board you join and when it completes."
  },
  {
    question: "When will new services be available?",
    answer: "Full Monty, Engagement Flow, IntelliVA AI, DFY Website/Funnel Builds, and Email Template Design are scheduled to launch soon."
  },
  {
    question: "What is the benefit of credits?",
    answer: "Each package comes with credits you can use on the platform's marketing services, ensuring that every dollar you spend has real value."
  },
  {
    question: "Is there any risk involved?",
    answer: "Like any online opportunity, there's some risk. However, Go E1U Life merges tangible digital products with a fair and transparent matrix system to help reduce it."
  },
  {
    question: "Can I upgrade to higher packages?",
    answer: "Absolutely. You can purchase higher-level boards at any time, which offer more credits for additional products and larger potential Bitcoin payouts."
  },
  {
    question: "Where can I find more details or support?",
    answer: "Detailed guides are available in your back office. For further assistance, contact our support team through the provided support channels."
  }
];
