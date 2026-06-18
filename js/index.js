const processSalesCoffee = () => {

    const request = getSalesCoffee();

    request.onload = () => {

        const parser = new DOMParser();

        const xml = parser.parseFromString(
            request.responseText,
            "text/xml"
        );

        const sales = xml.getElementsByTagName("row");

        const tbody = document.querySelector("#salesTable tbody");

        for (let sale of sales) {

            const date =
                sale.getElementsByTagName("Date")[0].textContent;

            const coffee =
                sale.getElementsByTagName("coffee_name")[0].textContent;

            const money =
                sale.getElementsByTagName("money")[0].textContent;

            const payment =
                sale.getElementsByTagName("cash_type")[0].textContent;

            tbody.innerHTML += `
                <tr class="border-b border-amber-300">
                    <td class="py-2 px-4">${date}</td>
                    <td class="py-2 px-4">${coffee}</td>
                    <td class="py-2 px-4">$${money}</td>
                    <td class="py-2 px-4">${payment}</td>
                </tr>
            `;
        }
    };

    request.onerror = () => {
        console.error("Error al cargar el XML");
    };
};

window.onload = () => {
    processSalesCoffee();
};