export function print(data: any) {
    const today = new Date();

    const day = today.getDate();
    const year = today.getFullYear();

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const month = months[today.getMonth()];

    const formattedDate = `${day < 10 ? '0' + day : day}/${month}/${year}`;

    var html = `
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <title>Purchase Order - Surya Electricals & Engineering Co.</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    font-size: 14px;
                }

                table {
                    border-collapse: collapse;
                    width: 100%;
                    margin-top: 1em;
                }

                .td-border{
                    border: 1px solid #444;
                    padding: 5px;
                    text-align: left;
                }

                .header-table td {
                    border: none;
                }

                .no-border {
                    border: none !important;
                }

                .center {
                    text-align: center;
                }

                .right {
                    text-align: right;
                }

                .bold {
                    font-weight: bold;
                }
            </style>
        </head>

        <body>
            <table >
                <tr>
                    <td colspan="2" style="text-align: center; font-weight: bold; font-size: 25px;" style="font-size:18px;">
                        Surya Electricals & Engineering Co.
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center; font-weight: bold; font-size: 15px;" style="font-size:18px;">
                        <div>47 Shanti Bhavan, 1st Floor, Shop No. 17A, Old Hanuman Lane,</div> 
                        <div>Kalbadevi Road, Mumbai - 400002</div>
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center; font-weight: bold; font-size: 15px;" style="font-size:18px;">
                        Email: suryaeec86@gmail.com 
                    </td>
                </tr>
                <tr>
                    <td colspan="2" style="text-align: center; font-weight: bold; font-size: 15px;" style="font-size:18px;">
                        Contact: 7208390289 / 9769410858
                    </td>
                </tr>
                <tr>
                    <td colspan="2">GST No.: <b>27ANQPC5083J1ZM</b></td>
                </tr>
                <tr style="border-top: 1px solid black;">
                    <td colspan="2" style="text-align: center; font-weight: bold; font-size: 20px;">PURCHASE ORDER</td>
                </tr>
                <hr>
            </table>
            
            <table style="width:100%;">
                <tr>
                    <td class="td-border" colspan="5">
                        <div style="display: flex; justify-content: space-between;">
                            <span>
                                <b>PO NO. :- </b> 501
                            </span>
                            <span>
                                <b>PO DATE :-</b> ${formattedDate}
                            </span>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td colspan="5" class="td-border">
                        <table border="0" style="border: none;">
                            <tr>
                                <td>To</td>
                                <td><b>ORDER TYPE :-</b> PURCHASE</td>
                            </tr>
                            <tr>
                                <td>
                                    <div>MADHAV CAPACITOR PVT. LTD.</div>
                                    <div>MIDC Industrial Estate, Bhosari, Pune - 411026</div>
                                </td>
                                <td><b>DEPARTMENT :- </b>ELECTRICALS</td>
                            </tr>
                            <tr>
                                <td><b>CIN :- </b> U32102MH1962PTC012271</td>
                                <td><b>CONTACT PERSON :- </b> Juned Khan</td>
                            </tr>
                            <tr>
                                <td><b>Your Quotation No:- </b> QTDOM-25-26-0160.1</td>
                                <td><b>CONTACT NO :- </b>+91 7888038613</td>
                            </tr>
                            <tr>
                                <td><b>Date :- </b>02/Sept/2025</td>
                                <td><b>CONTACT EMAIL :- </b>sale@madhavcapacitors.co.in</td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <th class="td-border">Sr. No</th>
                    <th class="td-border">Item Description</th>
                    <th class="td-border">Qty.</th>
                    <th class="td-border">Unit Discounted Rate in INR</th>
                    <th class="td-border">Total Discounted Rate in INR</th>
                </tr>
                ${data.map((item: any, index: number) => {
                    return `
                        <tr>
                            <td class="td-border">${index + 1}</td>
                            <td class="td-border">${item.itemDescription}</td>
                            <td class="td-border">${item.qty}</td>
                            <td class="td-border">${item.unitDiscountedRate}</td>
                            <td class="td-border">${item.totalDiscountedRate}</td>
                        </tr>
                    `
                }).join('')}
            </table>

            <div style="padding-top: 20px;"></div>
            <table>
                <tr>
                    <th class="td-border" colspan="2">TERMS AND CONDITIONS:</th>
                </tr>
                <tr>
                    <th class="td-border">Payment Terms</th>
                    <td class="td-border">
                        30% advance along with taxes against proforma invoice on readiness of material before dispatch. 70% against final invoice on delivery.
                    </td>
                </tr>
                <tr>
                    <th class="td-border">Packing & Forwarding</th>
                    <td class="td-border">NIL</td>
                </tr>
                <tr>
                    <th class="td-border">Delivery</th>
                    <td class="td-border">Within 04-05 Weeks from the date of receipt of technically & commerically clear purchase order containing agreed terms and the advance as per payment terms and Manufacturing Clearance / Drawing Approval.</td>
                </tr>
            </table>

            <div style="padding-top: 70px; font-weight: bold;">From Surya Electricals & Engineering Co.</div>
            <div style="padding-top: 80px; font-weight: bold;">Proprietor:</div>
        </body>

        </html>
    `;

    return html;
}