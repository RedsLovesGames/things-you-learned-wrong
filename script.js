const facts = [
  {
    title: 'Pluto is the ninth planet',
    inaccurate:
      'Textbooks listed Pluto as the solar system\'s ninth planet, memorized with mnemonics like "My Very Educated Mother...".',
    corrected:
      'In 2006 the International Astronomical Union reclassified Pluto as a dwarf planet because it has not cleared other objects out of its orbit.',
    appliesFrom: 1980,
    appliesUntil: 2006,
    sources: [
      {
        title: 'NASA – Pluto and the Developing Landscape of Our Solar System (2006)',
        url: 'https://solarsystem.nasa.gov/news/728/pluto-and-the-developing-landscape-of-our-solar-system/',
      },
    ],
  },
  {
    title: 'The food pyramid is the official nutrition guide',
    inaccurate:
      'Health classes promoted the 1992 USDA food pyramid as the evidence-based way to build meals.',
    corrected:
      'The USDA replaced the pyramid with MyPlate in 2011 to reflect research on portion balance and dietary diversity.',
    appliesFrom: 1992,
    appliesUntil: 2011,
    sources: [
      {
        title: 'USDA – What Is MyPlate? (2011)',
        url: 'https://www.myplate.gov/eat-healthy/what-is-myplate',
      },
    ],
  },
  {
    title: 'Stress or spicy food cause stomach ulcers',
    inaccurate:
      'Biology lessons blamed lifestyle factors for most peptic ulcers.',
    corrected:
      'Most long-lasting ulcers are caused by Helicobacter pylori bacteria and are treated with antibiotics—an idea proven in the 1980s and endorsed worldwide by the early 2000s.',
    appliesFrom: 1980,
    appliesUntil: 2005,
    sources: [
      {
        title: 'CDC – Helicobacter pylori and Peptic Ulcer Disease',
        url: 'https://www.cdc.gov/ulcer/about/index.html',
      },
      {
        title: 'NIH – Nobel Prize for H. pylori Discovery (2005)',
        url: 'https://www.nih.gov/news-events/news-releases/nobel-prize-awarded-helicobacter-researchers',
      },
    ],
  },
  {
    title: 'You only have five senses',
    inaccurate:
      'Introductory science courses emphasized just sight, hearing, smell, taste, and touch.',
    corrected:
      'Humans rely on many additional senses—such as proprioception, equilibrioception, and thermoception—that neuroscientists catalogued long ago.',
    appliesFrom: 1980,
    appliesUntil: null,
    sources: [
      {
        title: 'Smithsonian Magazine – Humans Have More Than Five Senses (2015)',
        url: 'https://www.smithsonianmag.com/science-nature/humans-have-more-than-five-senses-180967875/',
      },
    ],
  },
  {
    title: 'Taste zones on the tongue',
    inaccurate:
      'Diagrams in language arts and science textbooks showed sweetness, sourness, bitterness, and saltiness confined to separate tongue regions.',
    corrected:
      'Taste receptors for all basic tastes are distributed across the tongue; the original 1901 study was misinterpreted and debunked decades ago.',
    appliesFrom: 1980,
    appliesUntil: 2013,
    sources: [
      {
        title: 'Smithsonian Magazine – The Myth of the Tongue Map (2013)',
        url: 'https://www.smithsonianmag.com/science-nature/the-myth-of-the-tongue-map-514973/',
      },
    ],
  },
  {
    title: 'Dinosaurs were all scaly and cold-blooded',
    inaccurate:
      'Older textbooks portrayed dinosaurs as sluggish reptiles covered in scales.',
    corrected:
      'Fossil evidence of feathered theropods and bone growth rates show many dinosaurs were active and warm-blooded.',
    appliesFrom: 1980,
    appliesUntil: 2010,
    sources: [
      {
        title: 'American Museum of Natural History – Why Some Dinosaurs Had Feathers',
        url: 'https://www.amnh.org/explore/news-blogs/from-the-collection-posts/why-some-dinosaurs-had-feathers',
      },
      {
        title: 'Smithsonian Magazine – Dinosaurs May Have Been Warm-Blooded (2014)',
        url: 'https://www.smithsonianmag.com/science-nature/dinosaurs-may-have-been-warm-blooded-180951529/',
      },
    ],
  },
  {
    title: 'Toilets swirl opposite directions in different hemispheres',
    inaccurate:
      'Geography trivia books credited the Coriolis effect for the way household drains empty.',
    corrected:
      'The Coriolis force is far too weak at that scale; the direction is set by basin design and initial water motion.',
    appliesFrom: 1980,
    appliesUntil: null,
    sources: [
      {
        title: 'Scientific American – Do Toilets Flush Differently in Different Hemispheres? (2005)',
        url: 'https://www.scientificamerican.com/article/do-toilets-flush-differently-in-different-hemispheres/',
      },
    ],
  },
  {
    title: 'Humans evolved directly from chimpanzees',
    inaccurate:
      'Evolution units sometimes simplified human origins as a straight line from modern apes to modern humans.',
    corrected:
      'Genetic and fossil evidence show humans and chimpanzees share a common ancestor that lived millions of years ago; neither species descended from the other.',
    appliesFrom: 1980,
    appliesUntil: null,
    sources: [
      {
        title: 'Smithsonian National Museum of Natural History – Do Humans Really Come From Monkeys?',
        url: 'https://humanorigins.si.edu/evidence/ask-anthropologist/do-humans-really-come-monkeys',
      },
    ],
  },
  {
    title: 'Left-brained vs. right-brained people',
    inaccurate:
      'Psychology lessons described analytic people as "left-brained" and creative people as "right-brained".',
    corrected:
      'Large fMRI studies show that people use both hemispheres for complex tasks; the personality split is a myth.',
    appliesFrom: 1980,
    appliesUntil: 2013,
    sources: [
      {
        title: 'University of Utah – Neuroscientists Debunk Left-Brain/Right-Brain Myth (2013)',
        url: 'https://unews.utah.edu/brain-myth/',
      },
      {
        title: 'PLOS ONE – An Evaluation of the Left-Brain vs. Right-Brain Hypothesis with Resting State Functional Connectivity (2013)',
        url: 'https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0071275',
      },
    ],
  },
  {
    title: 'You only use 10% of your brain',
    inaccurate:
      'Health and psychology classes sometimes repeated the claim that 90% of the brain lies dormant.',
    corrected:
      'Neuroimaging shows that virtually every region of the brain has a function and is active over the course of a day.',
    appliesFrom: 1980,
    appliesUntil: null,
    sources: [
      {
        title: 'Scientific American – Do People Only Use 10 Percent of Their Brains? (2008)',
        url: 'https://www.scientificamerican.com/article/do-people-only-use-10-percent-of-their-brains/',
      },
    ],
  },
  {
    title: 'Matter exists only as solids, liquids, or gases',
    inaccurate:
      'Physical science classes emphasized three classical states of matter.',
    corrected:
      'Physicists recognize additional states like plasma and Bose–Einstein condensates, which entered textbooks after laboratory confirmation in the 1990s.',
    appliesFrom: 1980,
    appliesUntil: null,
    sources: [
      {
        title: 'National High Magnetic Field Laboratory – Four Fundamental States of Matter',
        url: 'https://nationalmaglab.org/education/magnet-academy/watch-play/interactive/four-states-of-matter/',
      },
      {
        title: 'NIST – Nobel Prize Highlights Bose–Einstein Condensate Discovery (2001)',
        url: 'https://www.nist.gov/news-events/news/2001/10/nobel-prize-highlights-creation-bose-einstein-condensates',
      },
    ],
  },
  {
    title: 'Blood in your veins is blue',
    inaccurate:
      'Health textbooks and diagrams implied venous blood is blue until oxygenated.',
    corrected:
      'Human blood is always red; veins look blue because of how light penetrates skin and reflects back.',
    appliesFrom: 1980,
    appliesUntil: null,
    sources: [
      {
        title: 'Cleveland Clinic – Is Blood Really Blue in Your Veins? (2022)',
        url: 'https://health.clevelandclinic.org/is-blood-really-blue-in-your-veins/',
      },
    ],
  },
];

const form = document.querySelector('#lookup-form');
const yearInput = document.querySelector('#grad-year');
const feedback = document.querySelector('.feedback');
const resultsList = document.querySelector('#results-list');

function renderResults(year, results) {
  resultsList.innerHTML = '';

  if (!results.length) {
    const empty = document.createElement('p');
    empty.className = 'no-results';
    empty.textContent =
      'No widely debunked lessons matched that graduation year. Try a nearby year or suggest one we missed.';
    resultsList.appendChild(empty);
    return;
  }

  results
    .sort((a, b) => {
      const aUntil = a.appliesUntil ?? Infinity;
      const bUntil = b.appliesUntil ?? Infinity;
      if (aUntil === bUntil) {
        return a.title.localeCompare(b.title);
      }
      return bUntil - aUntil;
    })
    .forEach((fact) => {
      const card = document.createElement('article');
      card.className = 'result-card';

      const title = document.createElement('h3');
      title.textContent = fact.title;

      const metadata = document.createElement('p');
      metadata.className = 'metadata';
      const endLabel = fact.appliesUntil ? fact.appliesUntil : 'present';
      metadata.textContent = `Common in classrooms: ${fact.appliesFrom} – ${endLabel}`;

      const wrong = document.createElement('p');
      wrong.className = 'fact';
      wrong.innerHTML = `<strong>What you heard:</strong> ${fact.inaccurate}`;

      const right = document.createElement('p');
      right.className = 'update';
      right.innerHTML = `<strong>What we know now:</strong> ${fact.corrected}`;

      const sourcesList = document.createElement('ul');
      sourcesList.className = 'sources';
      sourcesList.setAttribute('aria-label', 'Sources');

      fact.sources.forEach((source) => {
        const item = document.createElement('li');
        const link = document.createElement('a');
        link.href = source.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = source.title;
        item.appendChild(link);
        sourcesList.appendChild(item);
      });

      card.append(title, metadata, wrong, right, sourcesList);
      resultsList.appendChild(card);
    });
}

function validateYear(value) {
  if (!value) {
    return 'Enter the year you graduated.';
  }

  const year = Number.parseInt(value, 10);

  if (Number.isNaN(year)) {
    return 'Please enter a valid year.';
  }

  if (year < 1980) {
    return 'This project currently covers graduates from 1980 onward.';
  }

  if (year > 2100) {
    return 'Please enter a year that has already happened.';
  }

  return null;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const rawValue = yearInput.value.trim();
  const error = validateYear(rawValue);

  if (error) {
    feedback.textContent = error;
    renderResults(null, []);
    return;
  }

  const year = Number.parseInt(rawValue, 10);
  feedback.textContent = `Showing concepts that were still common around ${year}.`;

  const filtered = facts.filter(
    (fact) =>
      year >= fact.appliesFrom &&
      (fact.appliesUntil === null || year <= fact.appliesUntil)
  );

  renderResults(year, filtered);
});

// Provide a helpful default view for curious visitors.
renderResults(null, facts.filter((fact) => fact.appliesUntil === null));
