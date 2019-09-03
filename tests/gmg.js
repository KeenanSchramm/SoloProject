let gmg = {}

module.exports = {
    beforeEach: browser => {
        gmg = browser.page.gmgPage()
        gmg.navigate()
    },

    'Search Bar': browser => {
            gmg
                .resizeWindow(1280, 1000)
                .setValue('@searchInput', "No Man's Sky")
                .click('@searchSubmit')
                .verify.containsText('@firstResult',"No Man's Sky") //1
                .click('@resultClick')
                .verify.containsText('@productTitle', "No Man's Sky") //2
    },

    'Logo': browser => {
        gmg
            .click('@firstGame')
            .expect.url('https://www.greenmangaming.com/').to.not.equal('https://www.greenmangaming.com/')//3
        gmg
            .click('@logoBtn')
            .verify.urlEquals('https://www.greenmangaming.com/') //4
         gmg
            .click('@thirdGame')
            .expect.url('https://www.greenmangaming.com/').to.not.equal('https://www.greenmangaming.com/')//5
        gmg 
            .click('@logoBtn')
            .verify.urlEquals('https://www.greenmangaming.com/')//6    
    },
    //whirligig element no longer available as of 9/3/2019
    /*'Logo': browser => {
        gmg
            .click('@firstGame')
            .expect.element('@whirligig').to.not.be.present //3
        gmg
            .click('@logoBtn')
            .expect.element('@whirligig').to.be.present //4
         gmg
            .click('@thirdGame')
            .verify.elementNotPresent('@whirligig') //5
            .click('@logoBtn')
            .verify.elementPresent('@whirligig')//6
            .pause(1000)     
    },*/

    'Hot deals': browser => {
        gmg
            .click('@hotDeals')
            .pause(500)
            .verify.urlContains('hot-deals')//7
            .verify.visible('@discount')//8
    },

    'Cart': browser => {
        gmg
            .setValue('@searchInput', "No Man's Sky")
            .click('@searchSubmit')
            .click('@resultClick')
            .click('@addToCart')
            .pause(2000)
            .click('@logoBtn')
            .useXpath()
            .click('(//div[@class="col-xs-12 col-sm-4 module"])[3]')
            .click('@addToCart')
            .pause(2000)
            .click('@logoBtn')
            .click('@hotDeals')
            .click('(//div[@class="col-xs-12 col-sm-4 module"])[5]')
            .click('@addToCart')
            .pause(2000)
            .click('@logoBtn')
            .click('@cart')
            .verify.visible('(//li[@ng-repeat="item in basket.items"])[1]')
            .verify.visible('(//li[@ng-repeat="item in basket.items"])[2]')
            .verify.visible('(//li[@ng-repeat="item in basket.items"])[3]')
            .expect.element('@price').text.to.not.equal('$0.00')
        gmg
            .pause(1000)

    },

    /*'agever': browser => {
            gmg
                .resizeWindow(1280, 1000)
                .setValue('@searchInput', "Borderlands 2")
                .click('@searchSubmit')
                .click('@resultClick')
                .pause(3000)
                .ageVerify()
                .pause(10000)
               
    },*/ // cant get it to click the continue button
}