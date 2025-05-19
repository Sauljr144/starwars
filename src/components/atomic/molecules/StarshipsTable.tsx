'use client';
import { useEffect, useMemo, useState } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
} from 'material-react-table';
import { createTheme, ThemeProvider } from '@mui/material';
import getStarWarsData from '@/api/invetory-api';
import Button from '../atoms/Button';
import { Starships } from '@/types/Starships';
import darkTheme from '@/utils/TableTheme';

interface TableProps{
  addToCart: (item:any) => void
}

const StarshipsTable = ({addToCart}:TableProps) => {
  const [starShips, setStarShips] = useState<Starships[]>([]);

  useEffect(() => {
    const data = async () => {
      try{
        setStarShips(await getStarWarsData('starships'));
      }
      catch(error){
        console.error('Failed to fetch Planets', error)
      }
    };
    data();
  }, []);

  const price = 9.99;
  const starshipsPriced = starShips.map((ship) => ({
    ...ship,
    price: `$${price}`,
    stock: Math.floor(Math.random() * 50) + 1,
    button: <Button name='Add to Cart' onClick={() => addToCart({...ship, price:`${price}`})}/>,
  }));

  const columns = useMemo<MRT_ColumnDef<Starships>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Starship',
        size: 150,
      },
      {
        accessorKey: 'price',
        header: 'Price',
        size: 150,
      },
      {
        accessorKey: 'stock',
        header: 'Stock',
        size: 25,
      },
      {
        accessorKey: 'button',
        header: 'Cart',
        size: 25,
      },
    ],
    []
  );


  return (
    <ThemeProvider theme={darkTheme}>
      <MaterialReactTable
        columns={columns}
        data={starshipsPriced}
        enableColumnOrdering
        enableColumnPinning
      />
    </ThemeProvider>
  );
};

export default StarshipsTable;
