function priceCalc(book, disc, tax, stock, purchase, credit) 
{

    let result = 0;
    let price1, disc1, pricedisc1, amounttax1, pricetax1;
    for(let i = 0; i < purchase; i++)
    {
            if(book && book.price && (i < stock)) 
        {
            const price = book.price;
            const amountdisc = price * (disc/100);
            const pricedisc = price - amountdisc;
            const amounttax = pricedisc * (tax/100);
            const pricetax = pricedisc - amounttax;
            result+=pricetax;

            price1 = price;
            amountdisc1 = amountdisc;
            pricedisc1 = pricedisc;
            amounttax1 = amounttax;
            pricetax1 = pricetax;

        }
            else
        {
            console.log("Sorry, Out Of Stock");
            break;
        }

    }

        console.group();
        console.log('Title               : ', book.title);
        console.log('Original            : ', price1);
        console.log('Disc Amount         : ', amountdisc1);
        console.log('Price After Dis     : ', pricedisc1);
        console.log('Tax Amount          : ', amounttax1);
        console.log('Price After Tax     : ', pricetax1);
        console.log('Total Order         : ', purchase);
        console.log('Total               : ', result);
        console.groupEnd();  

        const amountcredit = result/credit;
        let credit1 = [];

        for(let index = 0; index < credit; index++)
        {
            credit1[index] = amountcredit;
            credit1.push(credit1[index]);
        }

        for(let i = 0; i < credit; i++)
        {
            console.log("Bulan ke - " + (i+1) + " = "+ credit1[i]);
           
        }
        return result; 
}
        let temp =
        priceCalc({title : 'Naruto Jadi Jahat', price : 5000, printing_status : true} , 40, 10, 21, 7);
        priceCalc({title : 'The Batman', price : 20000, printing_status : true} , 20, 5, 5, 2);
        priceCalc({title : 'Superman', price : 52000, printing_status : true} , 15, 2, 7, 3);
        priceCalc({title : 'Boruto anak haram', price : 59000, printing_status : true} , 25, 10, 10, 5);
        priceCalc({title : 'Ayam vs Ipin', price : 99000, printing_status : true} , 70, 10, 5, 2);
        priceCalc({title : 'Indonesia merdeka', price : 115000, printing_status : true} , 80, 10, 6, 5);