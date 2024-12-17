import { Modal } from './_components/Modal';

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const photoId = (await params).id;
  return <Modal>{photoId}</Modal>;
}
