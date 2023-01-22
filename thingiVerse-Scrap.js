const puppeteer = require('puppeteer');

const thingCard = ".thing-card"

const scrap = async (url) => {
  try {
    const browser = await puppeteer.launch({headless: false}) ;
    const page = await browser.newPage();
    await page.goto(`https://www.thingiverse.com/${url}`);

    //?puppeteer method for multiple elements
    const things = await page.$$eval(thingCard, (cards) =>{ 
        return cards.map(card => {
          const title = card.getAttribute("title")
          const id = card.getAttribute("data-id")
          const img = card.children[1].children[0].src
          const object = {
            title: title,
            id: id,
            link: `https://www.thingiverse.com/thing:${id}`,
            img: img
          }
          return object
        })
      })

    console.log(things)


    await browser.close();// Cerramos el puppeteer
    return things
  } 
  catch (error) {
    console.error(error);
  }
}

scrap('paulalala/collections/tools')














//!LO SIGUIENTE ES UN COPY PASTE DEL RESULTADO OBTENIDO EN LA TERMINAL CON EL CONSOLE.LOG()



[
  {
    title: 'Ikea Skadis Drill Bit Carousel',
    id: '3622924',
    link: 'https://www.thingiverse.com/thing:3622924',
    img: 'https://cdn.thingiverse.com/renders/57/87/56/5c/13/c7992eb3329e619c05d06522e2bf263d_preview_card.jpg'
  },
  {
    title: 'Lockology Pinning Tweezers',
    id: '4235613',
    link: 'https://www.thingiverse.com/thing:4235613',
    img: 'https://cdn.thingiverse.com/assets/9c/b3/1e/5c/4a/card_preview_Pinning_Tweezers_V2.png'
  },
  {
    title: 'Tweezers - 20 Different All Purpose Ready-to-Print Tweezers from 80 mm/3.1" to 160 mm/6.3"',
    id: '4797069',
    link: 'https://www.thingiverse.com/thing:4797069',
    img: 'https://cdn.thingiverse.com/assets/bf/21/95/de/eb/card_preview_Tweezers_title_01.jpg'
  },
  {
    title: 'Nano Chuck by PRIma',
    id: '5171097',
    link: 'https://www.thingiverse.com/thing:5171097',
    img: 'https://cdn.thingiverse.com/assets/23/57/7d/9b/83/card_preview_NanoChuck_1-1.png'
  },
  {
    title: 'Sanding Tool 2',
    id: '4823204',
    link: 'https://www.thingiverse.com/thing:4823204',
    img: 'https://cdn.thingiverse.com/assets/94/a6/3d/55/82/card_preview_Sanding-Tool-2.jpg'
  },
  {
    title: 'Arrow Cutter',
    id: '4687209',
    link: 'https://www.thingiverse.com/thing:4687209',
    img: 'https://cdn.thingiverse.com/assets/99/60/fd/db/bb/card_preview_IMG_4615b.jpg'
  },
  {
    title: 'Parkside  PFBS 12 B2 wall holder',
    id: '3322399',
    link: 'https://www.thingiverse.com/thing:3322399',
    img: 'https://cdn.thingiverse.com/renders/94/08/f9/f4/0f/ff1396f15acbaeb68817215e88a22cdb_preview_card.jpg'
  },
  {
    title: 'Parkside PFBS 160 B2 adaptator 43mm',
    id: '3188809',
    link: 'https://www.thingiverse.com/thing:3188809',
    img: 'https://cdn.thingiverse.com/renders/4f/95/cb/df/82/0f5ac3d2de0cf7f1b6011852fac04cd2_preview_card.jpg'
  },
  {
    title: 'Dremel Holder Clip Latch attachment Parkside',
    id: '3514943',
    link: 'https://www.thingiverse.com/thing:3514943',
    img: 'https://cdn.thingiverse.com/renders/fc/91/e6/b1/4b/ec4e0b7a4a3af88164780939e59de870_preview_card.jpeg'
  },
  {
    title: 'Dremel Router Attachment w/ Markings/Windows',
    id: '2448041',
    link: 'https://www.thingiverse.com/thing:2448041',
    img: 'https://cdn.thingiverse.com/renders/b7/e8/39/07/2e/c62ccf6bb9d6d9b2b558779d4f9f27fa_preview_card.JPG'
  },
  {
    title: 'Collet Drill Stop (<1mm to 14mm)',
    id: '3177276',
    link: 'https://www.thingiverse.com/thing:3177276',
    img: 'https://cdn.thingiverse.com/renders/6e/a8/4d/91/5d/9bbfe0c8fc2b1466e8d6bd1fb33830a0_preview_card.jpg'
  },
  {
    title: 'Center Finder For Edges',
    id: '4933846',
    link: 'https://www.thingiverse.com/thing:4933846',
    img: 'https://cdn.thingiverse.com/assets/15/38/cb/4f/4e/card_preview_SKY05527.JPG'
  }
]