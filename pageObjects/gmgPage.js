let gmgCommands = {
    signIn:  function (){
        var self = this
        this
            .click('@signInBtn')
            .pause(1000)
            .sendKeys('@emailInput','t')
            .pause(100)
            .sendKeys('@emailInput','e')
            .pause(100)
            .sendKeys('@emailInput','s')
            .pause(100)
            .sendKeys('@emailInput','t')
            .pause(100)
            .sendKeys('@emailInput','e')
            .pause(100)
            .sendKeys('@emailInput','r')
            .pause(100)
            .sendKeys('@emailInput','8')
            .pause(100)
            .sendKeys('@emailInput','1')
            .pause(100)
            .sendKeys('@emailInput','0')
            .pause(100)
            .sendKeys('@emailInput','6')
            .pause(100)
            .sendKeys('@emailInput','3')
            .pause(100)
            .sendKeys('@emailInput','@')
            .pause(100)
            .sendKeys('@emailInput','g')
            .pause(100)
            .sendKeys('@emailInput','m')
            .pause(100)
            .sendKeys('@emailInput','a')
            .pause(100)
            .sendKeys('@emailInput','i')
            .pause(100)
            .sendKeys('@emailInput','l')
            .pause(100)
            .sendKeys('@emailInput','.')
            .pause(100)
            .sendKeys('@emailInput','c')
            .pause(100)
            .sendKeys('@emailInput','o')
            .pause(100)
            .sendKeys('@emailInput','m')
            //password input
            .sendKeys('@passInput','t')
            .pause(100)
            .sendKeys('@passInput','e')
            .pause(100)
            .sendKeys('@passInput','s')
            .pause(100)
            .sendKeys('@passInput','t')
            .pause(100)
            .sendKeys('@passInput','e')
            .pause(100)
            .sendKeys('@passInput','r')
            .pause(100)
            .sendKeys('@passInput','a')
            .pause(100)
            .sendKeys('@passInput','c')
            .pause(100)
            .sendKeys('@passInput','c')
            .pause(100)
            .sendKeys('@passInput','o')
            .pause(100)
            .sendKeys('@passInput','u')
            .pause(100)
            .sendKeys('@passInput','n')
            .pause(100)
            .sendKeys('@passInput','t')
            .pause(100)
            .sendKeys('@passInput','8')
            .pause(100)
            .sendKeys('@passInput','1')
            .pause(100)
            .sendKeys('@passInput','0')
            .pause(100)
            .sendKeys('@passInput','6')
            .pause(100)
            .sendKeys('@passInput','3')
            .click('@signInSubmit')
            .pause(10000)

    },
    ageVerify: function () {
        var self = this
        this
            .api.element('tag name', '@ageVerifyPopUp', function (result) {
                if (result = 'Present') {
                    self
                    console.log('Verifying age')
                    self

                        .useXpath()
                        .click('//select[@id="day"]/option[@label="05"]')
                        .click('//select[@id="month"]/option[@label="05"]')
                        .click('//select[@id="year"]/option[@label="1993"]')
                    self
                        .verify.elementPresent('@ageSubmit')
                        .verify.visible('@ageSubmit')
                        .moveToElement('@ageSubmit',10,10)
                        .click('@ageSubmit')
                        //.submitForm('//div[@class="form-group"]')
                        
                        
                }
            })
        return this

    } //cant get it to click the continue button

}

module.exports = {
    url: 'https://www.greenmangaming.com',
    commands: [gmgCommands],
    elements: {
        searchInput: {
            selector: '//input[@type="search"]',
            locateStrategy: 'xpath'
        },
        searchSubmit: {
            selector: '//button[@class="btn btn-success btn-sm search-button"]',
            locateStrategy: 'xpath'
        },
        firstResult: {
            selector: '(//div[@class="row search-result"])[1]',
            locateStrategy: 'xpath'
        },
        resultClick: {
            selector: '(//div[@class="media-object pull-left"])[1]',
            locateStrategy: 'xpath'
        },
        productTitle: {
            selector: '(//h1[@ng-bind="product.name"])[2]',
            locateStrategy: 'xpath'
        },
        firstGame: {
            selector: '(//div[@class="col-xs-12 col-sm-4 module"])[1]',
            locateStrategy: 'xpath'
        },
        logoBtn: {
            selector: '//div[@class="col-xs-6 col-sm-3 top-content header-logo-container"]',
            locateStrategy: 'xpath'
        },
        whirligig: {
            selector: '//div[@class="whirligig-carousel owl-theme owl-carousel owl-loaded owl-drag"]',
            locateStrategy: 'xpath'
        },
        thirdGame: {
            selector: '(//div[@class="col-xs-12 col-sm-4 module"])[3]',
            locateStrategy: 'xpath'
        },
        // randomGame: {
        //     selector: `(//div[@class="col-xs-12 col-sm-4 module"])['${randomNum}']`,
        //     locateStrategy: 'xpath'
        // },
        hotDeals: {
            selector: '(//span[text()="Hot Deals"])[2]',
            locateStrategy: 'xpath'
        },
        discount: {
            selector: '(//div[@class="discount"])',
            locateStrategy: 'xpath'
        },
        // example:{
        //     selector: '(//li[@ng-repeat="item in basket.items"])',
        //     locateStrategy: 'xpath'
        // },
        addToCart: {
            selector: '(//button[@class="btn btn-block btn-primary"])[3]',
            locateStrategy: 'xpath'
        },
        cart: {
            selector: '(//div[@class="dropdown hidden-xs full-cart-dropdown"])',
            locateStrategy: 'xpath'
        },
        price: {
            selector: '(//price[@amount="(order||basket).total.final"]//span)[1]',
            locateStrategy: 'xpath'
        },
        ageVerifyPopUp: {
            selector: '//ng-include[@ng-if="loadAgeVerificationModal"]',
            locateStrategy: 'xpath'
        },
        ageDay: {
            selector: '(//div[@class="col-xs-4 dropdown"])[1]',
            locateStrategy: 'xpath'
        },
        ageMonth: {
            selector: '(//div[@class="col-xs-4 dropdown"])[2]',
            locateStrategy: 'xpath'
        },
        ageYear: {
            selector: '(//div[@class="col-xs-4 dropdown"])[3]',
            locateStrategy: 'xpath'
        },
        ageSubmit: {
            selector: '//button[@class="btn btn-success"]',
            locateStrategy: 'xpath'
        },
        signInBtn:{
            selector: '//div[@class="sign-in-btn"]',
            locateStrategy: 'xpath'
        },
        emailInput:{
            selector: '(//input[@type="email"])[1]',
            locateStrategy: 'xpath'
        },
        passInput:{
            selector: '(//input[@type="password"])[1]',
            locateStrategy: 'xpath'
        },
        signInSubmit:{
            selector: '//button[@validate-form="signInForm"]',
            locateStrategy: 'xpath'
        },
        reqBlock:{
            selector: '//div[@class="langBlock_en"]',
            locateStrategy: 'xpath'
        },
        captchaBox:{
            selector: '//div[@id="captcha-box"]',
            locateStrategy: 'xpath'
        },
        // example:{
        //     selector: '',
        //     locateStrategy: 'xpath'
        // },
        // example:{
        //     selector: '',
        //     locateStrategy: 'xpath'
        // },
        // example:{
        //     selector: '',
        //     locateStrategy: 'xpath'
        // },
        // example:{
        //     selector: '',
        //     locateStrategy: 'xpath'
        // },

    }
}