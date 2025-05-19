'use client';
import { useEffect, useMemo, useState } from 'react';
import { MaterialReactTable, type MRT_ColumnDef } from 'material-react-table';
import { ThemeProvider } from '@mui/material';
import { Planets } from '@/types/Planets';
import getStarWarsData from '@/api/invetory-api';
import Button from '../atoms/Button';
import darkTheme from '@/utils/TableTheme';

interface TableProps {
  addToCart: (item: any) => void;
}

const PlanetsTable = ({ addToCart }: TableProps) => {
  const [planets, setPlanets] = useState<Planets[]>([]);

  useEffect(() => {
    const data = async () => {
      try {
        setPlanets(await getStarWarsData('planets'));
      } catch (error) {
        console.error('Failed to fetch Planets', error);
      }
    };
    data();
  }, []);

  const price = 9.99;
  const planetsPriced = planets.map((planet) => ({
    ...planet,
    price: `$${price}`,
    stock: Math.floor(Math.random() * 50) + 1,
    button: (
      <Button
        name='Add to Cart'
        onClick={() => addToCart({ ...planet, price: `${price}` })}
      />
    ),
  }));

  const columns = useMemo<MRT_ColumnDef<Planets>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Planet',
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
        data={planetsPriced}
        enableColumnOrdering
        enableColumnPinning
      />
    </ThemeProvider>
  );
};

export default PlanetsTable;
