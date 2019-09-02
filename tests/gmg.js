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
    },

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
            .click('(//div[@class="col-xs-12 col-sm-4 module"])[4]')
            .click('@addToCart')
            .pause(2000)
            .click('@logoBtn')
            .useXpath()
            .click('(//div[@class="col-xs-12 col-sm-4 module"])[7]')
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
}