interface IProps {
  params: { id: string };
}

function PhotoModal({ params }: IProps) {
  return null;

  // (
  //   <div
  //     style={{
  //       position: 'fixed',
  //       top: 0,
  //       left: 0,
  //       width: '100vw',
  //       height: '100vh',
  //       background: 'rgba(0, 0, 0, 0.5)',
  //       display: 'flex',
  //       justifyContent: 'center',
  //       alignItems: 'center',
  //     }}
  //   >
  //     <div
  //       style={{
  //         background: 'white',
  //         padding: '2rem',
  //         borderRadius: '8px',
  //       }}
  //     >
  //       <h2>Photo {params.id} (Modal)</h2>
  //       <p>This is a modal view of photo {params.id}.</p>
  //       <Image src='next.svg' alt='' width={100} height={100} />
  //     </div>
  //   </div>
  // );
}

export default PhotoModal;
