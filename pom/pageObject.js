const mainPage = {}
mainPage.url = 'https://chaturbate.com/'
mainPage.agreeTerms ='#close_entrance_terms'
mainPage.rooms ='.title [data-room]'
mainPage.roomList = 'ul#room_list',
mainPage.dataRoom = 'data-room'

const roomPage = {}
roomPage.signUp = '#nav > a'
roomPage.next = 'a.nextCamBgColor'
roomPage.scan = '.tabActiveColor.transparentBg'
roomPage.videoPlayer = '.videoPlayerDiv'
roomPage.sendTip = '#VideoPanel .sendTipButton'
module.exports = {mainPage, roomPage}
