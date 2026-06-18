const getSalesCoffee = () => {

    const request = new XMLHttpRequest();

    request.open(
        "GET",
        "https://raw.githubusercontent.com/DATA-DAWM/Datos/refs/heads/main/Coffee/Coffe_sales.xml"
    );

    request.responseType = "text";

    request.send();

    return request;
};