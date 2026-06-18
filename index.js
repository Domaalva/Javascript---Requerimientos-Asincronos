const processSalesCoffee = () => {

    const request = getSalesCoffee();

    request.onload = () => {

        const xml = request.responseXML;

        const sales = xml.getElementsByTagName("sale");

        const tbody = document.querySelector("#salesTable tbody");

        for (let sale of sales) {

            const date =
                sale.getElementsByTagName("date")[0].textContent;

            const product =
                sale.getElementsByTagName("product")[0].textContent;

            const quantity =
                sale.getElementsByTagName("quantity")[0].textContent;

            const total =
                sale.getElementsByTagName("total")[0].textContent;

            tbody.innerHTML += `
                <tr>
                    <td>${date}</td>
                    <td>${product}</td>
                    <td>${quantity}</td>
                    <td>${total}</td>
                </tr>
            `;
        }

        new DataTable("#salesTable");
    };
};