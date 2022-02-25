const puppeteer = require('puppeteer')

wallet_addr = '871z7QxpHFcF6CVyLuexzWEk3Pq7zjRtpNxxp4aaGeyKEAGRn4KFSDRUUgjxmkkaEKYe9qapm78CAUMLQgqtNR2ALjLnDUK'

// const url_list = [
//   'https://supportxmr.com/'
// ]

// url_list.forEach(url_item => {
//   scrape_webpage(url_item)
// });

scrape_webpage()

async function scrape_webpage(url) {
  try {
    console.log('puppet start');

    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://supportxmr.com/');
    
    await page.evaluate(() => {
      document.getElementById('TogMode').click()
      input_field = document.getElementById('AddrField');
      input_field.click();
      input_field.value = '871z7QxpHFcF6CVyLuexzWEk3Pq7zjRtpNxxp4aaGeyKEAGRn4KFSDRUUgjxmkkaEKYe9qapm78CAUMLQgqtNR2ALjLnDUK'
      
      const ev = document.createEvent('Event');
      ev.initEvent('keypress');
      ev.which = ev.keyCode = 13;
      return ev;
    })

    // console.log(document.getElementById('AddrField').value);
    // input_wallet = await document.getElementById("AddrField").value
    // input_wallet.value = await wallet_addr

 

    // const [el0]       = await page.$x('/html/body/div[1]/div[2]/div[2]/div/div[2]/div/div[1]/div/div[2]/h2');
    // const txt0        = await el0.getProperty('textContent');
    // let   name        = await txt0.jsonValue();
    //       name   = name.replace("Verified", "").toString();
    //       name   = name.replace("<\n>", "").toString();
    // // console.log({name});

    // const bgImg       = await page.evaluate(el => window.getComputedStyle(el).backgroundImage, await page.$('#content > div > div.l-user-hero.sc-px-2x > div > div.profileHeader__info > div > div.profileHeaderInfo__avatar.sc-media-image.sc-mr-4x > div > span'))
    // const imgProfile  = bgImg.match(/url\("(.*)"/)[1] 
    // // console.log({imgProfile})

    // const el         = await page.$("#content > div > div.l-fluid-fixed > div.l-sidebar-right.l-user-sidebar-right > div > article.infoStats > table > tbody > tr > td:nth-child(1) > a") 
    // const txt         = await el.getProperty('title');
    // const followers   = await txt.jsonValue();
    // // console.log({followers});
    
    // const el1         = await page.$('#content > div > div.l-fluid-fixed > div.l-sidebar-right.l-user-sidebar-right > div > article.infoStats > table > tbody > tr > td:nth-child(2) > a')
    // const txt2        = await el1.getProperty('title')
    // const following   = await txt2.jsonValue()
    // // console.log({following})

    // const el2       = await page.$('#content > div > div.l-fluid-fixed > div.l-sidebar-right.l-user-sidebar-right > div > article.infoStats > table > tbody > tr > td:nth-child(3) > a')
    // const txt3        = await el2.getProperty('title')
    // const tracks      = await txt3.jsonValue()
    // // console.log({tracks})


    // console.log({name, imgProfile, followers, following, tracks})
    // console.log({num})
    // await browser.close();

  } catch (e) {
    console.error(e);
  }
}





// async function scrapesite1(url){

//   try{
//     const browser = await puppeteer.launch({ headless: true })
//     const page = await browser.newPage()
//     await page.goto(url); 

//     const [el]    = await  page.$x('//*[@id="landingImage"]')
//     const src     = await el.getProperty('src')
//     const srcTxt  = await src.jsonValue()
//     console.log({srcTxt});
  
//     browser.close();

//   } catch (e){
//     console.error("**error**");
//     console.error(e); 
//   }
// }
// scrapesite1('https://www.amazon.com/LF-Inc-Premium-Mexican-Landscape/dp/B07MHJMZ23/ref=sr_1_1_sspa?dchild=1&keywords=rock&qid=1634158625&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExVDNHRVpXMUFNOUdIJmVuY3J5cHRlZElkPUEwNDg1Njc4MTVPWFNJRFQwRloxTCZlbmNyeXB0ZWRBZElkPUEwNzQ2NjE3M1VJMUhZRzJGUVVFSSZ3aWRnZXROYW1lPXNwX2F0ZiZhY3Rpb249Y2xpY2tSZWRpcmVjdCZkb05vdExvZ0NsaWNrPXRydWU=')