'use client';
import { useRouter } from 'next/navigation';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  const modalRoot = document.body;
  if (!modalRoot) {
    console.error('No modal-root found in the DOM!');
    return null;
  }
  return createPortal(
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          display: 'flex',
          flexDirection: 'column',
          gap: 20,
        }}
      >
        {children}
        <h2>Photo {children} (Modal)</h2>
        <p>This is a modal view of photo {children}.</p>
        <Image src='/next.svg' alt='' width={100} height={100} />
        <Button onClick={onDismiss}>Close</Button>
        <Button
          onClick={() => {
            alert('Submit --- ');
            onDismiss();
          }}
        >
          Submit
        </Button>
      </div>
    </div>,
    modalRoot,
  );
}
