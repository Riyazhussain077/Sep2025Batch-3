exports.CartPage =
    class CartPage {

        constructor(page) {
            this.page = page;
            this.listOfProducts = '//tbody[@id="tbodyid"]/tr/td[2]';
        }

        async checkProductInCart(productName) {
            const list = await this.page.$$(this.listOfProducts)
            for (const gadgets of list) {
                console.log(await gadgets.textContent())
                if (productName === await gadgets.textContent()) {
                    break;
                }
            }
            return true;
        }
    }