/// <reference types="Cypress" />
const baseUrl = Cypress.config('baseUrl');

describe ('login to flipkart - search bar', () => {
 
    it('login to flipkart - search bar with hp laptop', () => {
        cy.visit(baseUrl);
        cy.get('._2M8cLY.header-form-search').click().type('HP Laptop');
        cy.wait(5000);
        cy.get('.L0Z3Pu').click();
        cy.get('._13oc-S').eq(0).click();        
        
        cy.visit('/hp-core-i3-11th-gen-8-gb-512-gb-ssd-windows-11-home-15s-dy3501tu-thin-light-laptop/p/itm450f55a8c2cb2?pid=COMG9WRFMYH8AZH2&lid=LSTCOMG9WRFMYH8AZH2FJG3EL&marketplace=FLIPKART&q=HP+laptop&store=6bo%2Fb5g&srno=s_1_1&otracker=search&otracker1=search&iid=8b8eac16-6ece-4615-ad15-26cd5477377f.COMG9WRFMYH8AZH2.SEARCH&ssid=e1y9wp0hy80000001650296411067&qH=0cc3bb474a7da8c2');
        cy.wait(5000);
        cy.get('._2KpZ6l._1t_O3S._2ti6Tf._3AWRsL').click({ force: true});
        cy.go('back');
    });
    
    it('return to parent window', () => {
        
        cy.get('._2M8cLY.header-form-search').type('{selectall}{backspace}');
        cy.get('._2M8cLY.header-form-search').click().type('Vivo v23e mobile');
        cy.get('.L0Z3Pu').click();
        cy.get('._13oc-S').eq(0).click();
        cy.wait(5000);
        cy.visit('/vivo-v23e-5g-midnight-blue-128-gb/p/itm90d9df020a3d3?pid=MOBGBMKTNVSSRY77&lid=LSTMOBGBMKTNVSSRY77TBOKJO&marketplace=FLIPKART&q=vivo+v23e+mobile&store=tyy&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=38728735-1499-4eb7-95b7-97f5c3b1c16d.MOBGBMKTNVSSRY77.SEARCH&ppt=sp&ppn=sp&ssid=4bhnmvw1mo0000001650298222430&qH=b6adc9ad31a5687b');
        
        cy.wait(5000);
        cy.get('.col.col-6-12').find('._2KpZ6l._2U9uOA._3v1-ww').click();
        cy.get('._2KpZ6l._2U9uOA._3v1-ww').click();
        cy.get('.YUhWwv').click({ force: true });
    });

});
