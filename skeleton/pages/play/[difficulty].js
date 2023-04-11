import Board from '@/modules/bingo';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import { PrismaClient } from '@prisma/client';

const inter = Inter({ subsets: ['latin'] });

export default function BingoBoard({ blogs }) {
  return (
    <div>
      <Board></Board>

    </div>
  );
}
