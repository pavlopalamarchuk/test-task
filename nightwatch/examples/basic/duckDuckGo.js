describe('e2e', function() {
  
  it('navigate to Main Page', function(browser) {
    browser
      .navigateTo('https://chaturbate.com/')
      .waitForElementVisible('#close_entrance_terms')
      .click('#close_entrance_terms')
      .elements('css selector', '.title [data-room]', (result) => {
          let randomIndex = Math.floor(Math.random() * result.value.length);
          const randomElement = `ul#room_list > :nth-of-type(${randomIndex}) a`
          var room
          browser.getAttribute('css selector', randomElement, 'data-room', result =>{
            browser.click(randomElement)
            room = result.value
            browser.assert.urlContains(room)
            .assert.elementPresent('#nav > a')
            .assert.elementPresent('[data-paction="NextCam"]')
            .assert.elementPresent('.tabActiveColor.transparentBg')
          })
          browser
          .assert.elementPresent('.videoPlayerDiv')
          browser
          .click('[data-paction="NextCam"]')
          .assert.not.urlContains(room)
      });
      
      
      //browser.end();
  }); 

  it.only('navigate to Main Page', function(browser) {
    browser
      .assert.elementPresent('#nav > a')
      .assert.elementPresent('[data-paction="NextCam"]')
      .assert.elementPresent('.tabActiveColor.transparentBg')
  }); 
});
