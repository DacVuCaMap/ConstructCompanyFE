import GetPattern from '@/ApiPattern/GetPattern';

export default async function getData(component:string,slug:string,size:any,page:any) {
    const url = process.env.NEXT_PUBLIC_API_URL + `/api/${component}/${slug}?size=${size}&page=${page}`;
    const data = await GetPattern(url, {});
    if (data === null) {
      console.log("vao null")
      return [];
    }
   
    let arrRs: any[] = [];
    if (component === "product") {
      arrRs = data.productPage.content; 
    }
    else{
      arrRs=data.customerPage.content;
    }
    console.log("arrRs",arrRs)
    // if (arrCustomer != null) {
    //   arrCustomer.map((item: any) => (
    //     arrRs.push({
    //       id: item.id,
    //       companyName: item.companyName,
    //       address: item.address,
    //       taxCode: item.taxCode,
    //       debt: item.debt,
    //       createAt: item.createAt,
    //       updateAt: item.updateAt
    //     })))
    // }
    return arrRs;
}
