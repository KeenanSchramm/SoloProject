let gmgCommands = {
   /* ageVerify: function () {
        this
            .api.element('tag name', '@ageVerifyPopUp', function (result) {
                if (result = 'Present') {
                    this
                    console.log('Verifying age')
                    this

                        .useXpath()
                        .click('//select[@id="day"]/option[@label="05"]')
                        .click('//select[@id="month"]/option[@label="05"]')
                        .click('//select[@id="year"]/option[@label="1993"]')
                        .verify.elementPresent('@ageSubmit')
                        
                }
            })
        return this

    }*/ //cant get it to click the continue button

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
            selector: '//div/button[@ng-click="ageVerification.setDateOfBirth()"]',
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
    }
}