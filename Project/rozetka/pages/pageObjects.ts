import { HeaderComponent } from "../components/HeaderComponent";


abstract class BasePage {
    verifyPAgeTitle() {}
    verifyUrl() {}
    navigateTo() {}
    reloadPage() {}
    back() {}
}

class CatalogPage extends BasePage {

    header: HeaderComponent;

    constructor() {
        super();
        this.header = new HeaderComponent();
    }

    //page specific
    searchForLaptop() {
        this.header.searchComponent.getSearchQuery
    }
    clickOnProduct() {

    }
    clickOnFilter() {

    }
}

class ProductDetailsPage extends BasePage {
    //header
    authorize(){

    }
    searchForProduct() {

    }
    viewCart() {

    }
    clickOnCatalog() {

    }
    //page specific
    addToCart() {

    }
    clickBuyInCredit() {

    }

}

class CheckoutPage extends BasePage {
    enterName() {}
    enterPhone() {}
    confirmOrder() {
        this.
    }

    
}