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

        let html = "";

        for (let i = 0; i < sales.length; i++) {

            const sale = sales[i];

            const date = sale.getElementsByTagName("Date")[0]?.textContent || "";
            const coffee = sale.getElementsByTagName("coffee_name")[0]?.textContent || "";
            const money = sale.getElementsByTagName("money")[0]?.textContent || "";
            const payment = sale.getElementsByTagName("cash_type")[0]?.textContent || "";

            html += `
                <tr class="border-b border-amber-300">
                    <td class="py-2 px-4">${date}</td>
                    <td class="py-2 px-4">${coffee}</td>
                    <td class="py-2 px-4">$${money}</td>
                    <td class="py-2 px-4">${payment}</td>
                </tr>
            `;
        }

        tbody.innerHTML = html;

        console.log("Filas agregadas:", sales.length);
    };

    request.onerror = () => {
        console.error("Error al cargar XML");
    };
};

window.onload = () => {
    processSalesCoffee();
};