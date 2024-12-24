'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle
} from '@/components/ui/alert-dialog';
import { env } from '@/env.mjs';

const AlertDialogDemo = async () => {
  return (
    <>
      <div className='flex flex-col'>{env.NEXT_PUBLIC_API_URL}</div>
      <div className=''>{process.env.NODE_ENV}</div>
      <AlertDialog>
        <AlertDialogContent>
          <span>qwe</span>
          <span>qwe</span>
          <span>123</span>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default AlertDialogDemo;
