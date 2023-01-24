const {mainPage, roomPage} = require('../pom/pageObject')

describe('e2e', function() {
  beforeEach(function() {
    browser
    .navigateTo(mainPage.url)
    .waitForElementVisible(mainPage.agreeTerms)
    .click(mainPage.agreeTerms)
  })
  /*
   - Verify that the rooms name in the URL after going to the room matches the room card on the homepage

   - Verify the following elements are present on the page:

   - “Sign Up” button

   - “Scan Cams” and “Next Cam”

   - “Send Tip” button​

   - Click the “Scan Cams” button three separate times. Verify that each time the button is clicked the user is brought to a new page by checking something of your choice.
 */

  it('rooms name in the URL after going to the room matches the room card on the homepage', function(browser) {
    browser
      .elements('css selector', mainPage.rooms, (result) => {
          let randomIndex = Math.floor(Math.random() * result.value.length);
          const randomElement = `${mainPage.roomList} > :nth-of-type(${randomIndex}) a`
          browser.getAttribute('css selector', randomElement, mainPage.dataRoom, result =>{
            browser
            .click(randomElement)
            browser
            .assert.urlContains(result.value)
            browser
            .assert.elementPresent(roomPage.signUp)
            .assert.elementPresent(roomPage.next)
            .assert.elementPresent(roomPage.scan)
            .assert.elementPresent(roomPage.sendTip)
          })
          for(let i = 0; i < 3; i++) {
            browser.url(function(result) {
              browser.click(roomPage.next) 
              browser.pause(3000)
              browser.assert.not.urlContains(result.value)
            });
          }
        })
  });
}); 

