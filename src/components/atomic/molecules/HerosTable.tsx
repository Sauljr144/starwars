'use client';
import { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { ThemeProvider } from '@mui/material';
import getStarWarsData from '@/api/invetory-api';
import Button from '../atoms/Button';
import darkTheme from '@/utils/TableTheme';
import { People } from '@/types/People';

interface Price extends People {
  price: string;
}

interface TableProps {
  addToCart: (item: Price) => void;
}

const HerosTable = ({ addToCart }: TableProps) => {
  const [people, setPeople] = useState<People[]>([]);

  useEffect(() => {
    const data = async () => {
      try {
        setPeople(await getStarWarsData('people'));
      } catch (error) {
        console.error('Failed to fetch Planets', error);
      }
    };
    data();
  }, []);

  const price = 14.99;
  const heros = people.filter(
    (hero) => hero.films.length > 1 && hero.starships.length > 0
  );
  const herosPriced = heros.map((hero) => ({
    ...hero,
    price: `$${price}`,
    stock: Math.floor(Math.random() * 50) + 1,
    button: (
      <Button
        name='Add to Cart'
        onClick={() => addToCart({ ...hero, price: `${price}` })}
      />
    ),
  }));

  const columns = useMemo<MRT_ColumnDef<People>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Hero',
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
        data={herosPriced}
        enableColumnOrdering
        enableColumnPinning
      />
    </ThemeProvider>
  );
};

export default HerosTable;
