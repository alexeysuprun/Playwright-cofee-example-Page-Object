import { AuthorizationComponent } from "../components/AuthorizationComponent";
import { searchComponent } from "../components/searchComponent";
import { CartComponent } from "../components/CartComponent";

export class HeaderComponent {

    authorize: AuthorizationComponent;
    searchComponent: searchComponent;
    cartComponent: CartComponent;

    constructor() {
        super();
        this.authorize = new AuthorizationComponent();
        this.searchComponent = new searchComponent();
        this.cartComponent = new CartComponent();
    }
}