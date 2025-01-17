"use client"
import { notFound, useSearchParams } from 'next/navigation';
import AddComponent from '@/components/CRUDTAB/AddComponent'
import { customerSchema, productSchema } from '@/components/CRUDTAB/validatorComponent'
import DataTable from '@/components/DataTable/DataTable'
import { AddCustomerField } from '@/data/ComponentData'
import { apiAddCustomer } from '@/data/apiUrl'
import { useEffect, useState } from 'react';
import { columnCus } from '@/data/listData';
import getData from '@/components/List/getData';
import LoadingScene from '@/components/LoadingScene';


export default function page({ params }: { params: { slug: string } }) {
  const searchParams = useSearchParams();
  const size = searchParams.get('size');
  const page = searchParams.get('page');
  const [data, setData] = useState<object[]>([])
  const [loading,setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getData('customers',params.slug, size, page);
        console.log("result",result)
        setData(result);
      } catch (error) {
        setData([]);
      }
    };

    fetchData();
    setLoading(false);
  }, [params.slug, size, page]);
  const [openAdd, setOpenAdd] = useState(false);

  return (
    <div className='w-full h-full flex flex-col'>
      CUSTOMER
      <div className='m-5'>
        <button onClick={() => setOpenAdd(!openAdd)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Customer
        </button>
      </div>
      {loading ? <LoadingScene /> : <DataTable columns={columnCus} rows={data} slug={'customer'} />}
      <div>
        {openAdd && <AddComponent componentData={AddCustomerField} validValueSchema={customerSchema} slug={'Cutomer'} setOpen={setOpenAdd} apiUrl={apiAddCustomer} />}
      </div>
    </div>
  )


}
