const processSalesCoffee = () => {

    const request = getSalesCoffee();

    request.onload = () => {

        const xml = request.responseXML;

        const sales = xml.getElementsByTagName("row");

        const tbody = document.querySelector("#salesTable tbody");

        for (let sale of sales) {

            const date =
                sale.getElementsByTagName("Date")[0].textContent;

            const product =
                sale.getElementsByTagName("coffee_name")[0].textContent;

            const money =
                sale.getElementsByTagName("money")[0].textContent;

            const payment =
                sale.getElementsByTagName("cash_type")[0].textContent;

            tbody.innerHTML += `
                <tr class="border-b border-amber-300">
                    <td class="py-2 px-4">${date}</td>
                    <td class="py-2 px-4">${product}</td>
                    <td class="py-2 px-4">$${money}</td>
                    <td class="py-2 px-4">${payment}</td>
                </tr>
            `;
        }
    };

    request.onerror = () => {
        alert("Error al cargar los datos.");
    };
};

window.onload = () => {
    processSalesCoffee();
};